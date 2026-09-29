import * as z from "zod";
export declare const CanvasDbWebhookClassSchema: z.ZodEnum<{
    canvas: "canvas";
}>;
export type CanvasDbWebhookClass = z.infer<typeof CanvasDbWebhookClassSchema>;
export declare const CanvasDbWebhookTypeSchema: z.ZodEnum<{
    new: "new";
    change: "change";
    delete: "delete";
}>;
export type CanvasDbWebhookType = z.infer<typeof CanvasDbWebhookTypeSchema>;
export declare const CanvasDbWebhookRequestSchema: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    class: z.ZodEnum<{
        canvas: "canvas";
    }>;
    type: z.ZodEnum<{
        new: "new";
        change: "change";
        delete: "delete";
    }>;
}, z.core.$strip>;
export type CanvasDbWebhookRequest = z.infer<typeof CanvasDbWebhookRequestSchema>;
export declare const CanvasDbWebhookProgressSchema: z.ZodNull;
export type CanvasDbWebhookProgress = z.infer<typeof CanvasDbWebhookProgressSchema>;
export declare const CanvasDbWebhookResponseSchema: z.ZodObject<{}, z.core.$strip>;
export type CanvasDbWebhookResponse = z.infer<typeof CanvasDbWebhookResponseSchema>;
