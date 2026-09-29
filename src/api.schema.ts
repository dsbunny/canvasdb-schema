// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import {
	CanvasSchema,
	CanvasBaseSchema,
	CanvasRegistrationSchema,
} from './canvas.schema.js';
import { JsonPatchOperationSchema } from './patch-operation.schema.js';

// #region Canvases
export const ListCanvasesRequestSchema = z.object({})
	.describe('List canvases request schema');
export type ListCanvasesRequest = z.infer<typeof ListCanvasesRequestSchema>;
export const ListCanvasesResponseSchema = z.object({
	canvases: z.array(CanvasSchema),
	next_token: z.string().nullable(),
})
	.describe('List canvases response schema');
export type ListCanvasesResponse = z.infer<typeof ListCanvasesResponseSchema>;

export const GetCanvasSuggestionsRequestSchema = z.object({})
	.describe('Get canvas suggestions request schema');
export type GetCanvasSuggestionsRequest = z.infer<typeof GetCanvasSuggestionsRequestSchema>;
export const GetCanvasSuggestionsResponseSchema = z.object({
	c: z.tuple([z.string(), z.string().nullable()])
		.describe('Canvas name auto-complete for given prefix'),
	s: z.array(z.tuple([z.string(), z.string().nullable()]))
		.describe('Canvas name suggestions for given input'),
})
	.describe('Get canvas suggestions response schema');
export type GetCanvasSuggestionsResponse = z.infer<typeof GetCanvasSuggestionsResponseSchema>;

export const GetCanvasAvailabilityRequestSchema = z.object({})
	.describe('Get canvas availability request schema');
export type GetCanvasAvailabilityRequest = z.infer<typeof GetCanvasAvailabilityRequestSchema>;
export const GetCanvasAvailabilityResponseSchema = z.object({
	is_available: z.boolean()
		.describe('Indicates if the canvas name is available'),
})
	.describe('Get canvas availability response schema');
export type GetCanvasAvailabilityResponse = z.infer<typeof GetCanvasAvailabilityResponseSchema>;

export const ListDeletedCanvasesRequestSchema = z.object({})
	.describe('List deleted canvases request schema');
export type ListDeletedCanvasesRequest = z.infer<typeof ListDeletedCanvasesRequestSchema>;
export const ListDeletedCanvasesResponseSchema = z.object({
	canvases: z.array(CanvasSchema),
	next_token: z.string().nullable(),
})
	.describe('List deleted canvases response schema');
export type ListDeletedCanvasesResponse = z.infer<typeof ListDeletedCanvasesResponseSchema>;

export const CreateCanvasRequestSchema = CanvasBaseSchema
	.describe('Create canvas request schema');
export type CreateCanvasRequest = z.infer<typeof CreateCanvasRequestSchema>;
export const CreateCanvasResponseSchema = CanvasRegistrationSchema
	.describe('Create canvas response schema');
export type CreateCanvasResponse = z.infer<typeof CreateCanvasResponseSchema>;

export const GetCanvasRequestSchema = z.object({})
	.describe('Get canvas request schema');
export type GetCanvasRequest = z.infer<typeof GetCanvasRequestSchema>;
export const GetCanvasResponseSchema = CanvasSchema
	.describe('Get canvas response schema');
export type GetCanvasResponse = z.infer<typeof GetCanvasResponseSchema>;

export const DeleteCanvasRequestSchema = z.object({})
	.describe('Delete canvas request schema');
export type DeleteCanvasRequest = z.infer<typeof DeleteCanvasRequestSchema>;
export const DeleteCanvasResponseSchema = z.object({})
	.describe('Delete canvas response schema');
export type DeleteCanvasResponse = z.infer<typeof DeleteCanvasResponseSchema>;

export const RecoverCanvasRequestSchema = z.object({})
	.describe('Recover canvas request schema');
export type RecoverCanvasRequest = z.infer<typeof RecoverCanvasRequestSchema>;
export const RecoverCanvasResponseSchema = CanvasSchema
	.describe('Recover canvas response schema');
export type RecoverCanvasResponse = z.infer<typeof RecoverCanvasResponseSchema>;

export const PatchCanvasRequestSchema = z.array(JsonPatchOperationSchema).max(50)
	.describe('Patch canvas request schema');
export type PatchCanvasRequest = z.infer<typeof PatchCanvasRequestSchema>;
export const PatchCanvasResponseSchema = CanvasSchema
	.describe('Patch canvas response schema');
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
])
	.describe('CanvasDB request schema');
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
])
	.describe('CanvasDB response schema');
export type CanvasDbResponse = z.infer<typeof CanvasDbResponseSchema>;
// #endregion
