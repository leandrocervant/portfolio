import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import { t } from "../../i18n";
import { Section } from "../Section";
import { Stack } from "../Stack";
import { Typography } from "../Typography";

import classNames from "./Contact.module.css";

const Card = ({ icon, text, href }) => {
  const Component = icon;

  const handleClick = () => {
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.click();
    anchor.remove();
  };

  return (
    <Stack.Row className={classNames.card} onClick={handleClick}>
      <Component />
      <Typography as="p">{text}</Typography>
    </Stack.Row>
  );
};

export const Contact = () => (
  <Section className={classNames.root}>
    <Typography id="contact" as="h2" align="center">
      {t("contact.label")}
    </Typography>
    <Stack.Row className={classNames.cards}>
      <Card
        icon={MailIcon}
        text="leandrocervant@gmail.com"
        href="mailto:leandrocervant@gmail.com"
      />
      <Card
        icon={PhoneIcon}
        text="(+55) 11 94156-3822"
        href="tel:+5511941563822"
      />
      <Card
        icon={MapPin}
        text={t("contact.address")}
        href="https://www.google.com.br/maps/place/Atibaia,+SP/@-23.1229725,-46.6000213,13z/data=!3m1!4b1!4m6!3m5!1s0x94cec11f46f1007d:0xc885a2d1bf078e37!8m2!3d-23.1155873!4d-46.5532067!16zL20vMDJ2X2N4?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
      />
    </Stack.Row>
  </Section>
);
