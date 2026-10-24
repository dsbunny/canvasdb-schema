// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from "@dsbunny/patch-schema";
import {
	CanvasSchema,
	CanvasBaseSchema,
	CanvasRegistrationSchema,
} from "./canvas.schema.js";

// #region Canvases
export const ListCanvasesRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'ListCanvasesRequestSchema',
	description: 'List canvases request schema',
});
export type ListCanvasesRequest = z.infer<typeof ListCanvasesRequestSchema>;
export const ListCanvasesResponseSchema = z.object({
	canvases: z.array(CanvasSchema),
	next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
	id: 'ListCanvasesResponseSchema',
	description: 'List canvases response schema',
});
export type ListCanvasesResponse = z.infer<typeof ListCanvasesResponseSchema>;

export const GetCanvasSuggestionsRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetCanvasSuggestionsRequestSchema',
	description: 'Get canvas suggestions request schema',
});
export type GetCanvasSuggestionsRequest = z.infer<typeof GetCanvasSuggestionsRequestSchema>;
export const GetCanvasSuggestionsResponseSchema = z.object({
	c: z.tuple([z.string(), z.string().nullable()])
		.describe('Canvas name auto-complete for given prefix'),
	s: z.array(z.tuple([z.string(), z.string().nullable()]))
		.describe('Canvas name suggestions for given input'),
}).register(dsbunnyRegistry, {
	id: 'GetCanvasSuggestionsResponseSchema',
	description: 'Get canvas suggestions response schema',
});
export type GetCanvasSuggestionsResponse = z.infer<typeof GetCanvasSuggestionsResponseSchema>;

export const GetCanvasAvailabilityRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetCanvasAvailabilityRequestSchema',
	description: 'Get canvas availability request schema',
});
export type GetCanvasAvailabilityRequest = z.infer<typeof GetCanvasAvailabilityRequestSchema>;
export const GetCanvasAvailabilityResponseSchema = z.object({
	is_available: z.boolean()
		.describe('Indicates if the canvas name is available'),
}).register(dsbunnyRegistry, {
	id: 'GetCanvasAvailabilityResponseSchema',
	description: 'Get canvas availability response schema',
});
export type GetCanvasAvailabilityResponse = z.infer<typeof GetCanvasAvailabilityResponseSchema>;

export const ListDeletedCanvasesRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'ListDeletedCanvasesRequestSchema',
	description: 'List deleted canvases request schema',
});
export type ListDeletedCanvasesRequest = z.infer<typeof ListDeletedCanvasesRequestSchema>;
export const ListDeletedCanvasesResponseSchema = z.object({
	canvases: z.array(CanvasSchema),
	next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
	id: 'ListDeletedCanvasesResponseSchema',
	description: 'List deleted canvases response schema',
});
export type ListDeletedCanvasesResponse = z.infer<typeof ListDeletedCanvasesResponseSchema>;

export const CreateCanvasRequestSchema = CanvasBaseSchema.register(dsbunnyRegistry, {
	id: 'CreateCanvasRequestSchema',
	description: 'Create canvas request schema',
});
export type CreateCanvasRequest = z.infer<typeof CreateCanvasRequestSchema>;
export const CreateCanvasResponseSchema = CanvasRegistrationSchema.register(dsbunnyRegistry, {
	id: 'CreateCanvasResponseSchema',
	description: 'Create canvas response schema',
});
export type CreateCanvasResponse = z.infer<typeof CreateCanvasResponseSchema>;

export const GetCanvasRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetCanvasRequestSchema',
	description: 'Get canvas request schema',
});
export type GetCanvasRequest = z.infer<typeof GetCanvasRequestSchema>;
export const GetCanvasResponseSchema = CanvasSchema.register(dsbunnyRegistry, {
	id: 'GetCanvasResponseSchema',
	description: 'Get canvas response schema',
});
export type GetCanvasResponse = z.infer<typeof GetCanvasResponseSchema>;

export const DeleteCanvasRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'DeleteCanvasRequestSchema',
	description: 'Delete canvas request schema',
});
export type DeleteCanvasRequest = z.infer<typeof DeleteCanvasRequestSchema>;
export const DeleteCanvasResponseSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'DeleteCanvasResponseSchema',
	description: 'Delete canvas response schema',
});
export type DeleteCanvasResponse = z.infer<typeof DeleteCanvasResponseSchema>;

export const RecoverCanvasRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'RecoverCanvasRequestSchema',
	description: 'Recover canvas request schema',
});
export type RecoverCanvasRequest = z.infer<typeof RecoverCanvasRequestSchema>;
export const RecoverCanvasResponseSchema = CanvasSchema.register(dsbunnyRegistry, {
	id: 'RecoverCanvasResponseSchema',
	description: 'Recover canvas response schema',
});
export type RecoverCanvasResponse = z.infer<typeof RecoverCanvasResponseSchema>;

export const PatchCanvasRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
	id: 'PatchCanvasRequestSchema',
	description: 'Patch canvas request schema',
});
export type PatchCanvasRequest = z.infer<typeof PatchCanvasRequestSchema>;
export const PatchCanvasResponseSchema = CanvasSchema.register(dsbunnyRegistry, {
	id: 'PatchCanvasResponseSchema',
	description: 'Patch canvas response schema',
});
export type PatchCanvasResponse = z.infer<typeof PatchCanvasResponseSchema>;
// #endregion

// #region API
export const CanvasDbRequestSchema = z.union([
	ListCanvasesRequestSchema,
	GetCanvasSuggestionsRequestSchema,
	GetCanvasAvailabilityRequestSchema,
	ListDeletedCanvasesRequestSchema,
	CreateCanvasRequestSchema,
	GetCanvasRequestSchema,
	DeleteCanvasRequestSchema,
	RecoverCanvasRequestSchema,
	PatchCanvasRequestSchema,
]).register(dsbunnyRegistry, {
	id: 'CanvasDbRequestSchema',
	description: 'CanvasDB request schema',
});
export type CanvasDbRequest = z.infer<typeof CanvasDbRequestSchema>;

export const CanvasDbResponseSchema = z.union([
	ListCanvasesResponseSchema,
	GetCanvasSuggestionsResponseSchema,
	GetCanvasAvailabilityResponseSchema,
	ListDeletedCanvasesResponseSchema,
	CreateCanvasResponseSchema,
	GetCanvasResponseSchema,
	DeleteCanvasResponseSchema,
	RecoverCanvasResponseSchema,
	PatchCanvasResponseSchema,
	ErrorResponseSchema,
]).register(dsbunnyRegistry, {
	id: 'CanvasDbResponseSchema',
	description: 'CanvasDB response schema',
});
export type CanvasDbResponse = z.infer<typeof CanvasDbResponseSchema>;
// #endregion
