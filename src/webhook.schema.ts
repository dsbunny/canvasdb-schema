// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import {
        WebhookProgressSchema,
        WebhookRequestSchema,
        WebhookResponseSchema,
} from "@dsbunny/webhook-schema";

export const CanvasDbWebhookClassSchema = z.enum(['canvas'])
        .describe('The class of the webhook event related to canvas operations');
export type CanvasDbWebhookClass = z.infer<typeof CanvasDbWebhookClassSchema>;

export const CanvasDbWebhookTypeSchema = z.enum(['new', 'change', 'delete'])
        .describe('The type of the webhook event related to canvas operations');
export type CanvasDbWebhookType = z.infer<typeof CanvasDbWebhookTypeSchema>;

export const CanvasDbWebhookRequestSchema = WebhookRequestSchema.extend({
        class: CanvasDbWebhookClassSchema,
        type: CanvasDbWebhookTypeSchema,
})
        .describe('The schema for webhook requests sent by the CanvasDB');
export type CanvasDbWebhookRequest = z.infer<typeof CanvasDbWebhookRequestSchema>;

export const CanvasDbWebhookProgressSchema = WebhookProgressSchema;
export type CanvasDbWebhookProgress = z.infer<typeof CanvasDbWebhookProgressSchema>;

export const CanvasDbWebhookResponseSchema = WebhookResponseSchema;
export type CanvasDbWebhookResponse = z.infer<typeof CanvasDbWebhookResponseSchema>;
