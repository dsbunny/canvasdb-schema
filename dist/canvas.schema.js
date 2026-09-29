// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { CapabilityTypesSchema } from '@dsbunny/capdb-schema';
import { SqliteDateSchema } from './sqlite-date.schema.js';
import { jsonSafeParser } from './json-safe-parser.js';
export const ViewportSchema = z.object({
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
export const CanvasBaseSchema = z.object({
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
    viewports: z.array(ViewportSchema).min(1).max(1000)
        .describe('The viewports of the canvas'),
    capabilities: z.array(CapabilityTypesSchema).max(1000)
        .describe('The capabilities of the canvas'),
});
export const CanvasRegistrationSchema = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the canvas'),
    canvas_id: z.uuid()
        .describe('The UUID of the canvas'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the canvas creation'),
})
    .describe('The registration of the canvas');
export const CanvasMetadataSchema = CanvasRegistrationSchema.extend({
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of when the canvas was last modified'),
    is_deleted: z.boolean().default(false)
        .describe('Whether the canvas is deleted'),
})
    .describe('The metadata of the canvas');
export const CanvasSchema = CanvasBaseSchema.extend(CanvasMetadataSchema.shape);
export const DbDtoFromCanvasBaseSchema = CanvasBaseSchema.transform((canvas) => {
    return {
        ...canvas,
        tags: JSON.stringify(canvas.tags),
        viewports: JSON.stringify(canvas.viewports),
        capabilities: JSON.stringify(canvas.capabilities),
    };
});
export const DbDtoFromCanvasSchema = CanvasSchema.transform((canvas) => {
    return {
        ...canvas,
        tags: JSON.stringify(canvas.tags),
        viewports: JSON.stringify(canvas.viewports),
        capabilities: JSON.stringify(canvas.capabilities),
    };
});
export const DbDtoToCanvasSchema = z.object({
    canvas_id: z.uuid(),
    tenant_id: z.uuid(),
    name: z.string(),
    tags: z.string().max(65535),
    width: z.number().int().min(1).max(99999),
    height: z.number().int().min(1).max(99999),
    frame_rate: z.number().int().min(1).max(1000),
    viewports: z.string(),
    capabilities: z.string(),
    create_timestamp: SqliteDateSchema,
    modify_timestamp: SqliteDateSchema,
    is_deleted: z.number().default(0),
})
    .transform((dto, ctx) => {
    const tags_result = jsonSafeParser(CanvasSchema.shape.tags).safeParse(dto.tags);
    if (!tags_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid tags',
            fatal: true,
        });
        return z.NEVER;
    }
    const viewports_result = jsonSafeParser(CanvasSchema.shape.viewports).safeParse(dto.viewports);
    if (!viewports_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid viewports',
            fatal: true,
        });
        return z.NEVER;
    }
    const capabilities_result = jsonSafeParser(CanvasSchema.shape.capabilities).safeParse(dto.capabilities);
    if (!capabilities_result.success) {
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
//# sourceMappingURL=canvas.schema.js.map