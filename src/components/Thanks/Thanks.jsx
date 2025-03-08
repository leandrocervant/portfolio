import { t } from "../../i18n";
import { Section } from "../Section";
import { Typography } from "../Typography";

import classNames from "./Thanks.module.css";

export const Thanks = () => (
  <Section className={classNames.root}>
    <Typography as="h2" align="center">
      &quot;{t("thanks.label")}&quot;
    </Typography>
  </Section>
);
