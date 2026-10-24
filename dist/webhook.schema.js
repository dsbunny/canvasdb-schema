// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { WebhookProgressSchema, WebhookRequestSchema, WebhookResponseSchema, } from "@dsbunny/webhook-schema";
export const CanvasDbWebhookClassSchema = z.enum(['canvas']).register(dsbunnyRegistry, {
    id: 'CanvasDbWebhookClassSchema',
    description: 'The class of the webhook event related to canvas operations',
});
export const CanvasDbWebhookTypeSchema = z.enum(['new', 'change', 'delete']).register(dsbunnyRegistry, {
    id: 'CanvasDbWebhookTypeSchema',
    description: 'The type of the webhook event related to canvas operations',
});
export const CanvasDbWebhookRequestSchema = WebhookRequestSchema.extend({
    class: CanvasDbWebhookClassSchema,
    type: CanvasDbWebhookTypeSchema,
}).register(dsbunnyRegistry, {
    id: 'CanvasDbWebhookRequestSchema',
    description: 'The schema for webhook requests sent by the CanvasDB',
});
export const CanvasDbWebhookProgressSchema = WebhookProgressSchema.register(dsbunnyRegistry, {
    id: 'CanvasDbWebhookProgressSchema',
    description: 'CanvasDB webhook progress schema',
});
export const CanvasDbWebhookResponseSchema = WebhookResponseSchema.register(dsbunnyRegistry, {
    id: 'CanvasDbWebhookResponseSchema',
    description: "CanvasDB webhook response schema",
});
//# sourceMappingURL=webhook.schema.js.map