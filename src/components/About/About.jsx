import { t } from "../../i18n";
import { Section } from "../Section";
import { Tipography } from "../Tipography";

import "./About.css";

const classNames = {
  root: "About",
};

export const About = () => (
  <Section id="about" className={classNames.root}>
    <Tipography as="h2">{t("about.label")}</Tipography>
    <Tipography as="p">
      {t("about.text1")}
      <Tipography as="span">{t("about.text2")}</Tipography>
      {t("about.text3")}
    </Tipography>
  </Section>
);
