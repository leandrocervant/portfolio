import { t } from "../../i18n";
import { Section } from "../Section";
import { Tipography } from "../Tipography";

import "./Thanks.css";

const classNames = {
  root: "Thanks",
};

export const Thanks = () => (
  <Section className={classNames.root}>
    <Tipography as="h2" align="center">
      &quot;{t("thanks.label")}&quot;
    </Tipography>
  </Section>
);
