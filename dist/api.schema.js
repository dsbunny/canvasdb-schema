// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from "@dsbunny/patch-schema";
import { CanvasSchema, CanvasBaseSchema, CanvasRegistrationSchema, } from "./canvas.schema.js";
// #region Canvases
export const ListCanvasesRequestSchema = z.object({
    '@type': z.literal('ListCanvasesRequest')
        .describe('Type of the list canvases request'),
}).optional().register(dsbunnyRegistry, {
    id: 'ListCanvasesRequestSchema',
    description: 'List canvases request schema',
});
export const ListCanvasesResponseSchema = z.object({
    '@type': z.literal('ListCanvasesResponse')
        .describe('Type of the list canvases response'),
    canvases: z.array(CanvasSchema),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListCanvasesResponseSchema',
    description: 'List canvases response schema',
});
export const GetCanvasSuggestionsRequestSchema = z.object({
    '@type': z.literal('GetCanvasSuggestionsRequest')
        .describe('Type of the get canvas suggestions request'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetCanvasSuggestionsRequestSchema',
    description: 'Get canvas suggestions request schema',
});
export const GetCanvasSuggestionsResponseSchema = z.object({
    '@type': z.literal('GetCanvasSuggestionsResponse').optional()
        .describe('Type of the get canvas suggestions response'),
    c: z.tuple([z.string(), z.string().nullable()])
        .describe('Canvas name auto-complete for given prefix'),
    s: z.array(z.tuple([z.string(), z.string().nullable()]))
        .describe('Canvas name suggestions for given input'),
}).register(dsbunnyRegistry, {
    id: 'GetCanvasSuggestionsResponseSchema',
    description: 'Get canvas suggestions response schema',
});
export const GetCanvasAvailabilityRequestSchema = z.object({
    '@type': z.literal('GetCanvasAvailabilityRequest')
        .describe('Type of the get canvas availability request'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetCanvasAvailabilityRequestSchema',
    description: 'Get canvas availability request schema',
});
export const GetCanvasAvailabilityResponseSchema = z.object({
    '@type': z.literal('GetCanvasAvailabilityResponse')
        .describe('Type of the get canvas availability response'),
    is_available: z.boolean()
        .describe('Indicates if the canvas name is available'),
}).register(dsbunnyRegistry, {
    id: 'GetCanvasAvailabilityResponseSchema',
    description: 'Get canvas availability response schema',
});
export const ListDeletedCanvasesRequestSchema = z.object({
    '@type': z.literal('ListDeletedCanvasesRequest')
        .describe('Type of the list deleted canvases request'),
}).optional().register(dsbunnyRegistry, {
    id: 'ListDeletedCanvasesRequestSchema',
    description: 'List deleted canvases request schema',
});
export const ListDeletedCanvasesResponseSchema = z.object({
    '@type': z.literal('ListDeletedCanvasesResponse')
        .describe('Type of the list deleted canvases response'),
    canvases: z.array(CanvasSchema),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListDeletedCanvasesResponseSchema',
    description: 'List deleted canvases response schema',
});
export const CreateCanvasRequestSchema = z.object({
    '@type': z.literal('CreateCanvasRequest')
        .describe('Type of the create canvas request'),
    canvas_data: CanvasBaseSchema
        .describe('Data of the canvas to be created'),
}).register(dsbunnyRegistry, {
    id: 'CreateCanvasRequestSchema',
    description: 'Create canvas request schema',
});
export const CreateCanvasResponseSchema = z.object({
    '@type': z.literal('CreateCanvasResponse')
        .describe('Type of the create canvas response'),
    canvas_registration: CanvasRegistrationSchema
        .describe('Registration data of the created canvas'),
}).register(dsbunnyRegistry, {
    id: 'CreateCanvasResponseSchema',
    description: 'Create canvas response schema',
});
export const GetCanvasRequestSchema = z.object({
    '@type': z.literal('GetCanvasRequest')
        .describe('Type of the get canvas request'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetCanvasRequestSchema',
    description: 'Get canvas request schema',
});
export const GetCanvasResponseSchema = z.object({
    '@type': z.literal('GetCanvasResponse')
        .describe('Type of the get canvas response'),
    canvas: CanvasSchema
        .describe('Data of the retrieved canvas'),
}).register(dsbunnyRegistry, {
    id: 'GetCanvasResponseSchema',
    description: 'Get canvas response schema',
});
export const DeleteCanvasRequestSchema = z.object({
    '@type': z.literal('DeleteCanvasRequest')
        .describe('Type of the delete canvas request'),
}).optional().register(dsbunnyRegistry, {
    id: 'DeleteCanvasRequestSchema',
    description: 'Delete canvas request schema',
});
export const DeleteCanvasResponseSchema = z.object({
    '@type': z.literal('DeleteCanvasResponse')
        .describe('Type of the delete canvas response'),
}).register(dsbunnyRegistry, {
    id: 'DeleteCanvasResponseSchema',
    description: 'Delete canvas response schema',
});
export const RecoverCanvasRequestSchema = z.object({
    '@type': z.literal('RecoverCanvasRequest')
        .describe('Type of the recover canvas request'),
}).optional().register(dsbunnyRegistry, {
    id: 'RecoverCanvasRequestSchema',
    description: 'Recover canvas request schema',
});
export const RecoverCanvasResponseSchema = z.object({
    '@type': z.literal('RecoverCanvasResponse')
        .describe('Type of the recover canvas response'),
    canvas: CanvasSchema
        .describe('Data of the recovered canvas'),
}).register(dsbunnyRegistry, {
    id: 'RecoverCanvasResponseSchema',
    description: 'Recover canvas response schema',
});
export const PatchCanvasRequestSchema = z.object({
    '@type': z.literal('PatchCanvasRequest'),
    patch_operations: z.array(JsonPatchOperationSchema).max(50),
}).register(dsbunnyRegistry, {
    id: 'PatchCanvasRequestSchema',
    description: 'Patch canvas request schema',
});
export const PatchCanvasResponseSchema = z.object({
    '@type': z.literal('PatchCanvasResponse')
        .describe('Type of the patch canvas response'),
    canvas: CanvasSchema
        .describe('Data of the patched canvas'),
}).register(dsbunnyRegistry, {
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