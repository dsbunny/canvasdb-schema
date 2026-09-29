// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { CanvasSchema, CanvasBaseSchema, CanvasRegistrationSchema, } from './canvas.schema.js';
import { JsonPatchOperationSchema } from './patch-operation.schema.js';
// #region Canvases
export const ListCanvasesRequestSchema = z.object({})
    .describe('List canvases request schema');
export const ListCanvasesResponseSchema = z.object({
    canvases: z.array(CanvasSchema),
    next_token: z.string().nullable(),
})
    .describe('List canvases response schema');
export const GetCanvasSuggestionsRequestSchema = z.object({})
    .describe('Get canvas suggestions request schema');
export const GetCanvasSuggestionsResponseSchema = z.object({
    c: z.tuple([z.string(), z.string().nullable()])
        .describe('Canvas name auto-complete for given prefix'),
    s: z.array(z.tuple([z.string(), z.string().nullable()]))
        .describe('Canvas name suggestions for given input'),
})
    .describe('Get canvas suggestions response schema');
export const GetCanvasAvailabilityRequestSchema = z.object({})
    .describe('Get canvas availability request schema');
export const GetCanvasAvailabilityResponseSchema = z.object({
    is_available: z.boolean()
        .describe('Indicates if the canvas name is available'),
})
    .describe('Get canvas availability response schema');
export const ListDeletedCanvasesRequestSchema = z.object({})
    .describe('List deleted canvases request schema');
export const ListDeletedCanvasesResponseSchema = z.object({
    canvases: z.array(CanvasSchema),
    next_token: z.string().nullable(),
})
    .describe('List deleted canvases response schema');
export const CreateCanvasRequestSchema = CanvasBaseSchema
    .describe('Create canvas request schema');
export const CreateCanvasResponseSchema = CanvasRegistrationSchema
    .describe('Create canvas response schema');
export const GetCanvasRequestSchema = z.object({})
    .describe('Get canvas request schema');
export const GetCanvasResponseSchema = CanvasSchema
    .describe('Get canvas response schema');
export const DeleteCanvasRequestSchema = z.object({})
    .describe('Delete canvas request schema');
export const DeleteCanvasResponseSchema = z.object({})
    .describe('Delete canvas response schema');
export const RecoverCanvasRequestSchema = z.object({})
    .describe('Recover canvas request schema');
export const RecoverCanvasResponseSchema = CanvasSchema
    .describe('Recover canvas response schema');
export const PatchCanvasRequestSchema = z.array(JsonPatchOperationSchema).max(50)
    .describe('Patch canvas request schema');
export const PatchCanvasResponseSchema = CanvasSchema
    .describe('Patch canvas response schema');
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
// #endregion
//# sourceMappingURL=api.schema.js.map