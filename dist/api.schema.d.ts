import * as z from "zod";
export declare const CanvasDbPingResponseSchema: z.ZodObject<{
    ping: z.ZodLiteral<"pong">;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CanvasDbPingResponse = z.infer<typeof CanvasDbPingResponseSchema>;
export declare const ListCanvasesQuerySchema: z.ZodObject<{
    canvas_type: z.ZodOptional<z.ZodString>;
    viewport_range: z.ZodOptional<z.ZodString>;
    sort_by: z.ZodOptional<z.ZodString>;
    sort_dir: z.ZodOptional<z.ZodString>;
    max_results: z.ZodOptional<z.ZodString>;
    next_token: z.ZodOptional<z.ZodString>;
    q: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodArray<z.ZodString>>>;
    tags: z.ZodOptional<z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
export type ListCanvasesQuery = z.infer<typeof ListCanvasesQuerySchema>;
export declare const GetCanvasSuggestionsQuerySchema: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    c: z.ZodOptional<z.ZodString>;
    t: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetCanvasSuggestionsQuery = z.infer<typeof GetCanvasSuggestionsQuerySchema>;
export declare const GetCanvasAvailabilityQuerySchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type GetCanvasAvailabilityQuery = z.infer<typeof GetCanvasAvailabilityQuerySchema>;
export declare const CanvasIdParamsSchema: z.ZodObject<{
    canvasId: z.ZodString;
}, z.core.$strip>;
export type CanvasIdParams = z.infer<typeof CanvasIdParamsSchema>;
export declare const ListCanvasesRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"ListCanvasesRequest">;
}, z.core.$strip>>;
export type ListCanvasesRequest = z.infer<typeof ListCanvasesRequestSchema>;
export declare const ListCanvasesResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ListCanvasesResponse">;
    canvases: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
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
        '@type': z.ZodLiteral<"Canvas">;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListCanvasesResponse = z.infer<typeof ListCanvasesResponseSchema>;
export declare const GetCanvasSuggestionsRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetCanvasSuggestionsRequest">;
}, z.core.$strip>>;
export type GetCanvasSuggestionsRequest = z.infer<typeof GetCanvasSuggestionsRequestSchema>;
export declare const GetCanvasSuggestionsResponseSchema: z.ZodObject<{
    '@type': z.ZodOptional<z.ZodLiteral<"GetCanvasSuggestionsResponse">>;
    c: z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>;
    s: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>>;
}, z.core.$strip>;
export type GetCanvasSuggestionsResponse = z.infer<typeof GetCanvasSuggestionsResponseSchema>;
export declare const GetCanvasAvailabilityRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetCanvasAvailabilityRequest">;
}, z.core.$strip>>;
export type GetCanvasAvailabilityRequest = z.infer<typeof GetCanvasAvailabilityRequestSchema>;
export declare const GetCanvasAvailabilityResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetCanvasAvailabilityResponse">;
    is_available: z.ZodBoolean;
}, z.core.$strip>;
export type GetCanvasAvailabilityResponse = z.infer<typeof GetCanvasAvailabilityResponseSchema>;
export declare const ListDeletedCanvasesRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"ListDeletedCanvasesRequest">;
}, z.core.$strip>>;
export type ListDeletedCanvasesRequest = z.infer<typeof ListDeletedCanvasesRequestSchema>;
export declare const ListDeletedCanvasesResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ListDeletedCanvasesResponse">;
    canvases: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
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
        '@type': z.ZodLiteral<"Canvas">;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListDeletedCanvasesResponse = z.infer<typeof ListDeletedCanvasesResponseSchema>;
export declare const CreateCanvasBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateCanvasRequest">;
    canvas_data: z.ZodObject<{
        '@type': z.ZodLiteral<"CanvasBase">;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }, z.core.$strip>], "mime_type">>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateCanvasBody = z.infer<typeof CreateCanvasBodySchema>;
/** @deprecated Use CreateCanvasBodySchema. */
export declare const CreateCanvasRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateCanvasRequest">;
    canvas_data: z.ZodObject<{
        '@type': z.ZodLiteral<"CanvasBase">;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }, z.core.$strip>], "mime_type">>;
    }, z.core.$strip>;
}, z.core.$strip>;
/** @deprecated Use CreateCanvasBody. */
export type CreateCanvasRequest = CreateCanvasBody;
export declare const CreateCanvasResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateCanvasResponse">;
    canvas_registration: z.ZodObject<{
        '@type': z.ZodLiteral<"CanvasRegistration">;
        tenant_id: z.ZodString;
        canvas_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateCanvasResponse = z.infer<typeof CreateCanvasResponseSchema>;
export declare const GetCanvasRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetCanvasRequest">;
}, z.core.$strip>>;
export type GetCanvasRequest = z.infer<typeof GetCanvasRequestSchema>;
export declare const GetCanvasResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetCanvasResponse">;
    canvas: z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
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
        '@type': z.ZodLiteral<"Canvas">;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetCanvasResponse = z.infer<typeof GetCanvasResponseSchema>;
export declare const DeleteCanvasRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"DeleteCanvasRequest">;
}, z.core.$strip>>;
export type DeleteCanvasRequest = z.infer<typeof DeleteCanvasRequestSchema>;
export declare const DeleteCanvasResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"DeleteCanvasResponse">;
}, z.core.$strip>;
export type DeleteCanvasResponse = z.infer<typeof DeleteCanvasResponseSchema>;
export declare const RecoverCanvasRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"RecoverCanvasRequest">;
}, z.core.$strip>>;
export type RecoverCanvasRequest = z.infer<typeof RecoverCanvasRequestSchema>;
export declare const RecoverCanvasResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"RecoverCanvasResponse">;
    canvas: z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
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
        '@type': z.ZodLiteral<"Canvas">;
    }, z.core.$strip>;
}, z.core.$strip>;
export type RecoverCanvasResponse = z.infer<typeof RecoverCanvasResponseSchema>;
export declare const PatchCanvasBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PatchCanvasRequest">;
    patch_operations: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>;
export type PatchCanvasBody = z.infer<typeof PatchCanvasBodySchema>;
/** @deprecated Use PatchCanvasBodySchema. */
export declare const PatchCanvasRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PatchCanvasRequest">;
    patch_operations: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>;
/** @deprecated Use PatchCanvasBody. */
export type PatchCanvasRequest = PatchCanvasBody;
export declare const PatchCanvasResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PatchCanvasResponse">;
    canvas: z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
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
        '@type': z.ZodLiteral<"Canvas">;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PatchCanvasResponse = z.infer<typeof PatchCanvasResponseSchema>;
export declare const CanvasDbRequestSchema: z.ZodUnion<readonly [z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"ListCanvasesRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetCanvasSuggestionsRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetCanvasAvailabilityRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"ListDeletedCanvasesRequest">;
}, z.core.$strip>>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreateCanvasRequest">;
    canvas_data: z.ZodObject<{
        '@type': z.ZodLiteral<"CanvasBase">;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }, z.core.$strip>], "mime_type">>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetCanvasRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"DeleteCanvasRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"RecoverCanvasRequest">;
}, z.core.$strip>>, z.ZodObject<{
    '@type': z.ZodLiteral<"PatchCanvasRequest">;
    patch_operations: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>]>;
export type CanvasDbRequest = z.infer<typeof CanvasDbRequestSchema>;
export declare const CanvasDbResponseSchema: z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"ListCanvasesResponse">;
    canvases: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
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
        '@type': z.ZodLiteral<"Canvas">;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodOptional<z.ZodLiteral<"GetCanvasSuggestionsResponse">>;
    c: z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>;
    s: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetCanvasAvailabilityResponse">;
    is_available: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ListDeletedCanvasesResponse">;
    canvases: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
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
        '@type': z.ZodLiteral<"Canvas">;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreateCanvasResponse">;
    canvas_registration: z.ZodObject<{
        '@type': z.ZodLiteral<"CanvasRegistration">;
        tenant_id: z.ZodString;
        canvas_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetCanvasResponse">;
    canvas: z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
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
        '@type': z.ZodLiteral<"Canvas">;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"DeleteCanvasResponse">;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"RecoverCanvasResponse">;
    canvas: z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
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
        '@type': z.ZodLiteral<"Canvas">;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"PatchCanvasResponse">;
    canvas: z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
        viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Viewport">;
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
            '@type': z.ZodLiteral<"CapabilityVideo">;
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
            '@type': z.ZodLiteral<"CapabilityAudio">;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            '@type': z.ZodLiteral<"CapabilityImage">;
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
        '@type': z.ZodLiteral<"Canvas">;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ErrorResponse">;
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type CanvasDbResponse = z.infer<typeof CanvasDbResponseSchema>;
//# sourceMappingURL=api.schema.d.ts.map