// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { CapabilityTypes } from '@dsbunny/capdb-schema';
import { sqliteDateSchema } from './sqlite-date.schema.js';
import { jsonSafeParser } from './json-safe-parser.js';

export const Viewport = z.object({
	reference_id: z.string()
		.describe('The reference ID of the viewport'),
	x: z.number().int()
		.describe('The X coordinate of the viewport'),
	y: z.number().int()
		.describe('The Y coordinate of the viewport'),
	width: z.number().int()
		.describe('The width of the viewport'),
	height: z.number().int()
		.describe('The height of the viewport'),
})
	.describe('The viewport');
export type Viewport = z.infer<typeof Viewport>;

export const CanvasBase = z.object({
	name: z.string()
		.describe('A descriptive name for the canvas'),
	tags: z.array(z.string()).min(1).max(100)
		.describe('The tags of the canvas'),
	width: z.number().int().min(1).max(99999)
		.describe('The width of the canvas'),
	height: z.number().int().min(1).max(99999)
		.describe('The height of the canvas'),
	frame_rate: z.number().int().min(1).max(1000)
		.describe('The maximum frames per second of the canvas'),
	viewports: z.array(Viewport).min(1).max(1000)
		.describe('The viewports of the canvas'),
	capabilities: z.array(CapabilityTypes).max(1000)
		.describe('The capabilities of the canvas'),
});
export type CanvasBase = z.infer<typeof CanvasBase>;

export const CanvasRegistration = z.object({
	tenant_id: z.string()
		.describe('The tenant ID of the canvas'),
	canvas_id: z.uuid()
		.describe('The UUID of the canvas'),
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime of the canvas creation'),
})
	.describe('The registration of the canvas');
export type CanvasRegistration = z.infer<typeof CanvasRegistration>;

export const CanvasMetadata = CanvasRegistration.extend({
	modify_timestamp: z.iso.datetime()
		.describe('The ISO datetime of when the canvas was last modified'),
	is_deleted: z.boolean().default(false)
		.describe('Whether the canvas is deleted'),
})
	.describe('The metadata of the canvas');
export type CanvasMetadata = z.infer<typeof CanvasMetadata>;

export const Canvas = CanvasBase.extend(CanvasMetadata.shape);
export type Canvas = z.infer<typeof Canvas>;

export const DbDtoFromCanvasBase = CanvasBase.transform((canvas: CanvasBase) => {
	return {
		...canvas,
		tags: JSON.stringify(canvas.tags),
		viewports: JSON.stringify(canvas.viewports),
		capabilities: JSON.stringify(canvas.capabilities),
	};
});

export const DbDtoFromCanvas = Canvas.transform((canvas: Canvas) => {
	return {
		...canvas,
		tags: JSON.stringify(canvas.tags),
		viewports: JSON.stringify(canvas.viewports),
		capabilities: JSON.stringify(canvas.capabilities),
	};
});

export const DbDtoToCanvas = z.object({
	canvas_id: z.uuid(),
	tenant_id: z.uuid(),
	name: z.string(),
	tags: z.string().max(65535),
	width: z.number().int().min(1).max(99999),
	height: z.number().int().min(1).max(99999),
	frame_rate: z.number().int().min(1).max(1000),
	viewports: z.string(),
	capabilities: z.string(),
	create_timestamp: sqliteDateSchema,
	modify_timestamp: sqliteDateSchema,
	is_deleted: z.number().default(0),
})
.transform((dto, ctx): Canvas => {
	const tags_result = jsonSafeParser(Canvas.shape.tags).safeParse(dto.tags);
	if(!tags_result.success) {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid tags',
			fatal: true,
		});
		return z.NEVER;
	}
	const viewports_result = jsonSafeParser(Canvas.shape.viewports).safeParse(dto.viewports);
	if(!viewports_result.success) {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid viewports',
			fatal: true,
		});
		return z.NEVER;
	}
	const capabilities_result = jsonSafeParser(Canvas.shape.capabilities).safeParse(dto.capabilities);
	if(!capabilities_result.success) {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid capabilities',
			fatal: true,
		});
		return z.NEVER;
	}

	return {
		...dto,
		tags: tags_result.data,
		viewports: viewports_result.data,
		capabilities: capabilities_result.data,
		is_deleted: Boolean(dto.is_deleted),
	};
});
