"use client";

import Script from "next/script";

const GHL_FORM_SRC = "https://go.4tms.com/widget/form/A0v4eTzVsNAMZGoRCfmK";
const GHL_SCRIPT_SRC = "https://go.4tms.com/js/form_embed.js";
const GHL_FORM_ID = "A0v4eTzVsNAMZGoRCfmK";
const GHL_FORM_NAME = "TMS: New Web Inquiry + Params - Miami Psychiatric Services";
const GHL_FORM_HEIGHT = "1338";

type InquiryFormProps = {
  id?: string;
  compact?: boolean;
  embedded?: boolean;
};

export function InquiryForm({
  id = "inquiry-form",
  compact = false,
  embedded = false,
}: InquiryFormProps) {
  const iframeId = `inline-${GHL_FORM_ID}${id === "hero-inquiry" ? "" : `-${id}`}`;
  const padding = compact ? "p-5 sm:p-6" : "p-6 sm:p-8";
  const shellClasses = embedded
    ? padding
    : `${id === "contact-inquiry" ? "scroll-mt-24 " : ""}overflow-hidden rounded-2xl border border-mps-blue/10 bg-white shadow-xl shadow-mps-blue/5 ${padding}`;

  return (
    <div id={id} className={shellClasses}>
      <div className="min-h-[32rem] w-full">
        <iframe
          src={GHL_FORM_SRC}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "4px",
            minHeight: compact ? "28rem" : "42rem",
          }}
          id={iframeId}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={GHL_FORM_NAME}
          data-height={GHL_FORM_HEIGHT}
          data-layout-iframe-id={iframeId}
          data-form-id={GHL_FORM_ID}
          title={GHL_FORM_NAME}
        />
      </div>
      <Script src={GHL_SCRIPT_SRC} strategy="lazyOnload" />
    </div>
  );
}
