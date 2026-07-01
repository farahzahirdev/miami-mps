"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";
import { Button } from "./Button";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-mps-navy/10 py-5 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-mps-navy transition-colors hover:text-mps-blue"
      >
        <span>{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mps-blue-light text-mps-blue transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-small pt-3 pr-10">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqList() {
  const { copy } = useLocale();

  return (
    <>
      {copy.faq.items.map((item) => (
        <FaqItem key={item.question} question={item.question} answer={item.answer} />
      ))}

      <div className="pt-8 text-center">
        <Button href="#contact-inquiry" variant="secondary">
          {copy.faq.cta}
        </Button>
      </div>
    </>
  );
}
