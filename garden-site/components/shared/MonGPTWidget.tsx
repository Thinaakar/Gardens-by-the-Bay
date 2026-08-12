"use client";

import { useEffect } from "react";
import {
  MONGPT_CHATBOT_ID,
  MONGPT_TENANT_ID,
  MONGPT_WIDGET_SRC,
} from "@/lib/mongpt";

const SCRIPT_ID = "mongpt-widget-script";

/**
 * Loads MonGPT after the widget script is ready (avoids init-before-load race).
 * Floating bubble appears bottom-right on every page.
 */
export default function MonGPTWidget() {
  useEffect(() => {
    let cancelled = false;

    function initWidget() {
      if (cancelled || typeof window === "undefined" || !window.MonGPT) return;
      try {
        window.MonGPT.init({
          tenantId: MONGPT_TENANT_ID,
          chatbotId: MONGPT_CHATBOT_ID,
        });
      } catch (err) {
        console.error("[MonGPT] init failed:", err);
      }
    }

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      if (window.MonGPT) {
        initWidget();
      } else {
        existing.addEventListener("load", initWidget);
      }
      return () => {
        cancelled = true;
        existing.removeEventListener("load", initWidget);
      };
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = MONGPT_WIDGET_SRC;
    script.async = true;
    script.onload = initWidget;
    script.onerror = () => {
      console.error("[MonGPT] Failed to load widget script:", MONGPT_WIDGET_SRC);
    };
    document.body.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
