import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations("Homepage");

  const { locale } = params;
  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Link href={`/${locale}/about-us`}>Go To ABOUT US</Link>
    </main>
  );
}
