// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { CapabilityTypesSchema } from "@dsbunny/capdb-schema";
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
}).register(dsbunnyRegistry, {
    id: 'ViewportSchema',
    description: 'The viewport',
});
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
}).register(dsbunnyRegistry, {
    id: 'CanvasBaseSchema',
    description: 'The base information of the canvas, including name, tags, dimensions, frame rate, viewports, and capabilities',
});
export const CanvasRegistrationSchema = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the canvas'),
    canvas_id: z.uuid()
        .describe('The UUID of the canvas'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the canvas creation'),
}).register(dsbunnyRegistry, {
    id: 'CanvasRegistrationSchema',
    description: 'The registration of the canvas',
});
export const CanvasMetadataSchema = CanvasRegistrationSchema.extend({
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of when the canvas was last modified'),
    is_deleted: z.boolean().default(false)
        .describe('Whether the canvas is deleted'),
}).register(dsbunnyRegistry, {
    id: 'CanvasMetadataSchema',
    description: 'The metadata of the canvas',
});
export const CanvasSchema = CanvasBaseSchema.extend(CanvasMetadataSchema.shape).register(dsbunnyRegistry, {
    id: 'CanvasSchema',
    description: 'The complete schema of the canvas, including base information and metadata',
});
//# sourceMappingURL=canvas.schema.js.map