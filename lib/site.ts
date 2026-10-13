// Public URL of the ERP app (login lives there, not on this site). Baked in at
// build time, so rebuild after changing it.
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://mms.kapplabs.com").replace(/\/+$/, "");
