import { t } from "../../i18n";
import { Section } from "../Section";
import { Tipography } from "../Tipography";

export const About = () => (
  <Section id="about">
    <Tipography as="h2">{t("about.label")}</Tipography>
    <Tipography as="p">{t("about.text")}</Tipography>
  </Section>
);
