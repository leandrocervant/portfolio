import { t } from "../../i18n";
import { Section } from "../Section";
import { Stack } from "../Stack";
import { Typography } from "../Typography";

import classNames from "./Skills.module.css";

const Skill = ({ name, img }) => {
  const src = new URL(`../../assets/skills/${img}.png`, import.meta.url).href;
  return (
    <Stack.Col
      className={classNames.item}
      justifyContent="center"
      alignItems="center"
    >
      <img src={src} alt={name} />
      <Typography as="h5">{name}</Typography>
    </Stack.Col>
  );
};

const Group = ({ children }) => (
  <Stack.Row className={classNames["item-group"]} justifyContent="center">
    {children}
  </Stack.Row>
);

export const Skills = () => (
  <Section className={classNames.root}>
    <Typography as="h2" align="center">
      {t("skills.label")}
    </Typography>
    <Stack.Col className={classNames.list}>
      <Group>
        <Skill name="JavaScript" img="javascript" />
        <Skill name="TypeScript" img="typescript" />
        <Skill name="Html & CSS" img="html-css" />
        <Skill name="C#" img="csharp" />
      </Group>
      <Group>
        <Skill name="React" img="react" />
        <Skill name="SQL Server" img="sql" />
        <Skill name="Mongodb" img="mongo" />
        <Skill name="RabbitMQ" img="rabbitmq" />
      </Group>
      <Group>
        <Skill name=".NET Core" img="net" />
        <Skill name="Azure" img="azure" />
        <Skill name="AWS Server" img="aws" />
      </Group>
      <Group>
        <Skill name="Docker" img="docker" />
        <Skill name="Azure DevOps" img="devops" />
      </Group>
    </Stack.Col>
  </Section>
);
