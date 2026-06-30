"use client";

import { useId, useState } from "react";
import { useLocale } from "@/context/LocaleProvider";
import { Button } from "./Button";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-mps-blue/10 py-5 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-heading text-mps-h4 text-mps-navy transition-colors duration-300 hover:text-mps-blue"
      >
        <span>{question}</span>
        <span
          className={`shrink-0 text-mps-h3 text-mps-blue transition-transform duration-300 ease-in-out ${
            open ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-small pt-3 pr-8 text-mps-navy/75">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqList() {
  const { copy } = useLocale();

  return (
    <>
      <div className="mx-auto mt-12 max-w-3xl">
        {copy.faq.items.map((item) => (
          <FaqItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl text-center">
        <Button href="#contact-inquiry" variant="secondary">
          {copy.faq.cta}
        </Button>
      </div>
    </>
  );
}
