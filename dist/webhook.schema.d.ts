import * as z from "zod";
export declare const CanvasDbWebhookClassSchema: z.ZodEnum<{
    canvas: "canvas";
}>;
export type CanvasDbWebhookClass = z.infer<typeof CanvasDbWebhookClassSchema>;
export declare const CanvasDbWebhookRequestSchema: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    '@type': z.ZodLiteral<"CanvasDbWebhookRequest">;
    class: z.ZodEnum<{
        canvas: "canvas";
    }>;
}, z.core.$strip>;
export type CanvasDbWebhookRequest = z.infer<typeof CanvasDbWebhookRequestSchema>;
export declare const CanvasDbWebhookProgressSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CanvasDbWebhookProgress">;
}, z.core.$strip>;
export type CanvasDbWebhookProgress = z.infer<typeof CanvasDbWebhookProgressSchema>;
export declare const CanvasDbWebhookResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CanvasDbWebhookResponse">;
}, z.core.$strip>;
export type CanvasDbWebhookResponse = z.infer<typeof CanvasDbWebhookResponseSchema>;
//# sourceMappingURL=webhook.schema.d.ts.map