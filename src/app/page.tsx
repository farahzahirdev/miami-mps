import { LocaleProvider } from "@/context/LocaleProvider";
import { HomePage } from "@/components/HomePage";
import { SkipLink } from "@/components/SkipLink";

export default function Page() {
  return (
    <LocaleProvider>
      <SkipLink />
      <HomePage />
    </LocaleProvider>
  );
}
