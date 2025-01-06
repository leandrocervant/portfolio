import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import LinkedinIcon from "../../assets/links/linkedin.svg?react";
import GithubIcon from "../../assets/links/github.svg?react";
import WhatsAppIcon from "../../assets/links/whatsapp.svg?react";
import { t } from "../../i18n";
import { Stack } from "../Stack";
import { Section } from "../Section";
import { Button } from "../Button";
import { Link } from "../Link";
import { Typography } from "../Typography";

import "./WhoAmI.css";

const base = import.meta.env.BASE_URL;

const classNames = {
  root: "WhoAmI",
  content: "WhoAmI__content",
  presentation: "WhoAmI__presentation",
  links: "WhoAmI__links",
  link: "WhoAmI__link",
  buttons: "WhoAmI__buttons",
  code: "WhoAmI__code",
  macHeader: "WhoAmI__code__mac-header",
  macButton: "WhoAmI__code__mac-header__button",
};

const CODE_WRITE_INTERVAL = 15;
const CODE_SNIPPET = `import { Developer } from "professions";

export const WhoAmI = () => {
  const person = {
    name: "Leandro Cervantes",
    title: "Full Stack Developer",
    company: "Função Sistemas",
    location: "São Paulo, Brazil",
    skills: ['React', '.NET Core', 'C#', 'JavaScript'],
    passion: "Transforming ideas into solutions with clean and efficient code."
  };

  return <Developer {...person} />;
};`;

const Code = () => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const codeEmit = (callback) => {
      let index = 0;
      const interval = setInterval(() => {
        callback(CODE_SNIPPET.substring(0, index));
        index++;
        if (index >= CODE_SNIPPET.length) clearInterval(interval);
      }, CODE_WRITE_INTERVAL);
    };

    codeEmit((text) => setDisplayedText(text));
  }, []);

  return (
    <Stack.Col className={classNames.code}>
      <Stack.Row className={classNames.macHeader}>
        <div className={classNames.macButton} type="close"></div>
        <div className={classNames.macButton} type="minimize"></div>
        <div className={classNames.macButton} type="maximize"></div>
      </Stack.Row>
      <SyntaxHighlighter
        language="jsx"
        style={vscDarkPlus}
        wrapLines={true}
        lineProps={{
          style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
        }}
        customStyle={{ maxWidth: "100%" }}
      >
        {displayedText}
      </SyntaxHighlighter>
    </Stack.Col>
  );
};

const Presentation = () => {
  const handleContactMe = () => {
    const contact = document.getElementById("contact");
    contact.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetResume = () => {
    const link = document.createElement("a");
    link.href = `${base}/resume.pdf`;
    link.download = "Leandro Cervantes.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Stack.Col className={classNames.presentation}>
      <Typography as="h1">
        {t("whoAmI.hello")}
        <br />
        {t("whoAmI.thisIs")}{" "}
        <Typography as="span">{t("whoAmI.leandro")}</Typography>,{" "}
        {t("whoAmI.im")}
        <br />
        {t("whoAmI.professional")}
      </Typography>
      <Stack.Row className={classNames.links}>
        <Link
          appearance="primary"
          icon={LinkedinIcon}
          href="https://www.linkedin.com/in/leandro-cervantes/"
        />
        <Link
          appearance="primary"
          icon={GithubIcon}
          href="https://github.com/leandrocervant"
        />
        <Link
          appearance="primary"
          icon={WhatsAppIcon}
          href="whatsapp://send?phone=+5511941563822"
        />
      </Stack.Row>
      <Stack.Row className={classNames.buttons}>
        <Button appearance="outline" onClick={handleContactMe} size="large">
          {t("whoAmI.contactMe")}
        </Button>
        <Button onClick={handleGetResume} size="large">
          {t("whoAmI.getResume")}
        </Button>
      </Stack.Row>
    </Stack.Col>
  );
};

export const WhoAmI = () => {
  return (
    <Section className={classNames.root}>
      <Stack.Row className={classNames.content}>
        <Presentation />
        <Code />
      </Stack.Row>
    </Section>
  );
};
