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
  const padding = compact ? "p-4 sm:p-5" : "p-5 sm:p-6 lg:p-7";
  const isContact = id === "contact-inquiry";
  const isHero = id === "hero-inquiry";
  const shellClasses = embedded
    ? padding
    : `${isContact ? "scroll-mt-24 " : ""}mps-card overflow-hidden shadow-card-hover ${padding}`;

  return (
    <div id={id} className={shellClasses}>
      <div
        className={`w-full ${
          compact
            ? isHero
              ? "min-h-[24rem] sm:min-h-[26rem]"
              : "min-h-[28rem] sm:min-h-[32rem]"
            : "min-h-[32rem] sm:min-h-[40rem] lg:min-h-[42rem]"
        }`}
      >
        <iframe
          src={GHL_FORM_SRC}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "12px",
            minHeight: compact ? (isHero ? "24rem" : "28rem") : isContact ? "42rem" : "40rem",
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
