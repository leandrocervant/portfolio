import { t } from "../../i18n";
import { Section } from "../Section";
import { Typography } from "../Typography";

import "./About.css";

const classNames = {
  root: "About",
};

export const About = () => (
  <Section id="about" className={classNames.root}>
    <Typography as="h2">{t("about.label")}</Typography>
    <Typography as="p">
      {t("about.text1")}
      <Typography as="span">{t("about.text2")}</Typography>
      {t("about.text3")}
    </Typography>
  </Section>
);
