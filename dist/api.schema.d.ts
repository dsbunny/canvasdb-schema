import * as z from "zod";
export declare const ListCanvasesRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type ListCanvasesRequest = z.infer<typeof ListCanvasesRequestSchema>;
export declare const ListCanvasesResponseSchema: z.ZodObject<{
    canvases: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListCanvasesResponse = z.infer<typeof ListCanvasesResponseSchema>;
export declare const GetCanvasSuggestionsRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetCanvasSuggestionsRequest = z.infer<typeof GetCanvasSuggestionsRequestSchema>;
export declare const GetCanvasSuggestionsResponseSchema: z.ZodObject<{
    c: z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>;
    s: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>>;
}, z.core.$strip>;
export type GetCanvasSuggestionsResponse = z.infer<typeof GetCanvasSuggestionsResponseSchema>;
export declare const GetCanvasAvailabilityRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetCanvasAvailabilityRequest = z.infer<typeof GetCanvasAvailabilityRequestSchema>;
export declare const GetCanvasAvailabilityResponseSchema: z.ZodObject<{
    is_available: z.ZodBoolean;
}, z.core.$strip>;
export type GetCanvasAvailabilityResponse = z.infer<typeof GetCanvasAvailabilityResponseSchema>;
export declare const ListDeletedCanvasesRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type ListDeletedCanvasesRequest = z.infer<typeof ListDeletedCanvasesRequestSchema>;
export declare const ListDeletedCanvasesResponseSchema: z.ZodObject<{
    canvases: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListDeletedCanvasesResponse = z.infer<typeof ListDeletedCanvasesResponseSchema>;
export declare const CreateCanvasRequestSchema: z.ZodObject<{
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
export type CreateCanvasRequest = z.infer<typeof CreateCanvasRequestSchema>;
export declare const CreateCanvasResponseSchema: z.ZodObject<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CreateCanvasResponse = z.infer<typeof CreateCanvasResponseSchema>;
export declare const GetCanvasRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetCanvasRequest = z.infer<typeof GetCanvasRequestSchema>;
export declare const GetCanvasResponseSchema: z.ZodObject<{
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
export type GetCanvasResponse = z.infer<typeof GetCanvasResponseSchema>;
export declare const DeleteCanvasRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type DeleteCanvasRequest = z.infer<typeof DeleteCanvasRequestSchema>;
export declare const DeleteCanvasResponseSchema: z.ZodObject<{}, z.core.$strip>;
export type DeleteCanvasResponse = z.infer<typeof DeleteCanvasResponseSchema>;
export declare const RecoverCanvasRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type RecoverCanvasRequest = z.infer<typeof RecoverCanvasRequestSchema>;
export declare const RecoverCanvasResponseSchema: z.ZodObject<{
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
export type RecoverCanvasResponse = z.infer<typeof RecoverCanvasResponseSchema>;
export declare const PatchCanvasRequestSchema: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
    not: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>], "op">>;
export type PatchCanvasRequest = z.infer<typeof PatchCanvasRequestSchema>;
export declare const PatchCanvasResponseSchema: z.ZodObject<{
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
export type PatchCanvasResponse = z.infer<typeof PatchCanvasResponseSchema>;
export declare const CanvasDbRequestSchema: z.ZodUnion<readonly [z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
    not: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>], "op">>]>;
export type CanvasDbRequest = z.infer<typeof CanvasDbRequestSchema>;
export declare const CanvasDbResponseSchema: z.ZodUnion<readonly [z.ZodObject<{
    canvases: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    c: z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>;
    s: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>>;
}, z.core.$strip>, z.ZodObject<{
    is_available: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    canvases: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type CanvasDbResponse = z.infer<typeof CanvasDbResponseSchema>;
