/** MonGPT widget config — https://dev-mongpt.com/docs/install/ */
export const MONGPT_TENANT_ID = "df0b76c2-5800-4881-9193-02f83c6050d7";
export const MONGPT_CHATBOT_ID = "51f6eeec-c17a-4ad5-965f-3f83cbf3c486";

export const MONGPT_WIDGET_SRC = "https://cdn.dev-mongpt.com/mongpt-widget.iife.js";

/** Init snippet for next/script — language auto-detects from <html lang="en"> */
export const MONGPT_INIT_SCRIPT = `MonGPT.init({ tenantId: '${MONGPT_TENANT_ID}', chatbotId: '${MONGPT_CHATBOT_ID}' });`;
