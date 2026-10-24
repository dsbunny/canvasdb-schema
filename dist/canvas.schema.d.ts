import * as z from "zod";
export declare const ViewportSchema: z.ZodObject<{
    reference_id: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
}, z.core.$strip>;
export type Viewport = z.infer<typeof ViewportSchema>;
export declare const CanvasBaseSchema: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strip>>;
    capabilities: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">>;
}, z.core.$strip>;
export type CanvasBase = z.infer<typeof CanvasBaseSchema>;
export declare const CanvasRegistrationSchema: z.ZodObject<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CanvasRegistration = z.infer<typeof CanvasRegistrationSchema>;
export declare const CanvasMetadataSchema: z.ZodObject<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type CanvasMetadata = z.infer<typeof CanvasMetadataSchema>;
export declare const CanvasSchema: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strip>>;
    capabilities: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">>;
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type Canvas = z.infer<typeof CanvasSchema>;
