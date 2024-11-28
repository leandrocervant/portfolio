import LinkedinIcon from "../../assets/links/linkedin.svg?react";
import GithubIcon from "../../assets/links/github.svg?react";
import WhatsAppIcon from "../../assets/links/whatsapp.svg?react";
import { Section } from "../Section";
import { Stack } from "../Stack";
import { Link } from "../Link";

import "./Links.css";

const classNames = {
  root: "Links",
  separator: "Links__separator",
};

const Separator = () => {
  return <Stack.Row className={classNames.separator} />;
};

export const Links = () => {
  return (
    <Section className={classNames.root}>
      <Separator />
      <Link
        icon={LinkedinIcon}
        href="https://www.linkedin.com/in/leandro-cervantes/"
      />
      <Link icon={GithubIcon} href="https://github.com/leandrocervant" />
      <Link icon={WhatsAppIcon} href="whatsapp://send?phone=+5511941563822" />
      <Separator />
    </Section>
  );
};
