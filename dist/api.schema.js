// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from "@dsbunny/patch-schema";
import { CanvasSchema, CanvasBaseSchema, CanvasRegistrationSchema, } from "./canvas.schema.js";
// #region Canvases
export const ListCanvasesRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'ListCanvasesRequestSchema',
    description: 'List canvases request schema',
});
export const ListCanvasesResponseSchema = z.object({
    canvases: z.array(CanvasSchema),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListCanvasesResponseSchema',
    description: 'List canvases response schema',
});
export const GetCanvasSuggestionsRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetCanvasSuggestionsRequestSchema',
    description: 'Get canvas suggestions request schema',
});
export const GetCanvasSuggestionsResponseSchema = z.object({
    c: z.tuple([z.string(), z.string().nullable()])
        .describe('Canvas name auto-complete for given prefix'),
    s: z.array(z.tuple([z.string(), z.string().nullable()]))
        .describe('Canvas name suggestions for given input'),
}).register(dsbunnyRegistry, {
    id: 'GetCanvasSuggestionsResponseSchema',
    description: 'Get canvas suggestions response schema',
});
export const GetCanvasAvailabilityRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetCanvasAvailabilityRequestSchema',
    description: 'Get canvas availability request schema',
});
export const GetCanvasAvailabilityResponseSchema = z.object({
    is_available: z.boolean()
        .describe('Indicates if the canvas name is available'),
}).register(dsbunnyRegistry, {
    id: 'GetCanvasAvailabilityResponseSchema',
    description: 'Get canvas availability response schema',
});
export const ListDeletedCanvasesRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'ListDeletedCanvasesRequestSchema',
    description: 'List deleted canvases request schema',
});
export const ListDeletedCanvasesResponseSchema = z.object({
    canvases: z.array(CanvasSchema),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListDeletedCanvasesResponseSchema',
    description: 'List deleted canvases response schema',
});
export const CreateCanvasRequestSchema = CanvasBaseSchema.register(dsbunnyRegistry, {
    id: 'CreateCanvasRequestSchema',
    description: 'Create canvas request schema',
});
export const CreateCanvasResponseSchema = CanvasRegistrationSchema.register(dsbunnyRegistry, {
    id: 'CreateCanvasResponseSchema',
    description: 'Create canvas response schema',
});
export const GetCanvasRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetCanvasRequestSchema',
    description: 'Get canvas request schema',
});
export const GetCanvasResponseSchema = CanvasSchema.register(dsbunnyRegistry, {
    id: 'GetCanvasResponseSchema',
    description: 'Get canvas response schema',
});
export const DeleteCanvasRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'DeleteCanvasRequestSchema',
    description: 'Delete canvas request schema',
});
export const DeleteCanvasResponseSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'DeleteCanvasResponseSchema',
    description: 'Delete canvas response schema',
});
export const RecoverCanvasRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'RecoverCanvasRequestSchema',
    description: 'Recover canvas request schema',
});
export const RecoverCanvasResponseSchema = CanvasSchema.register(dsbunnyRegistry, {
    id: 'RecoverCanvasResponseSchema',
    description: 'Recover canvas response schema',
});
export const PatchCanvasRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
    id: 'PatchCanvasRequestSchema',
    description: 'Patch canvas request schema',
});
export const PatchCanvasResponseSchema = CanvasSchema.register(dsbunnyRegistry, {
    id: 'PatchCanvasResponseSchema',
    description: 'Patch canvas response schema',
});
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
// #endregion
//# sourceMappingURL=api.schema.js.map