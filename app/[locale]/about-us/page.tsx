import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("AboutUs");
  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}
