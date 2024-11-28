import { t } from "../../i18n";
import { Section } from "../Section";
import { Stack } from "../Stack";
import { Tipography } from "../Tipography";

import "./Skills.css";

const classNames = {
  root: "Skills",
  list: "Skills__list",
  item: "Skills__item",
  itemGroup: "Skills__item-group",
};

const Skill = ({ name, img }) => {
  const src = new URL(`../../assets/skills/${img}.png`, import.meta.url).href;
  return (
    <Stack.Col
      className={classNames.item}
      justifyContent="center"
      alignItems="center"
    >
      <img src={src} alt={name} />
      <Tipography as="h5">{name}</Tipography>
    </Stack.Col>
  );
};

const Group = ({ children }) => (
  <Stack.Row className={classNames.itemGroup} justifyContent="center">
    {children}
  </Stack.Row>
);

export const Skills = () => (
  <Section className={classNames.root}>
    <Tipography as="h2" align="center">
      {t("skills.label")}
    </Tipography>
    <Stack.Col className={classNames.list}>
      <Group>
        <Skill name="JavaScript" img="javascript" />
        <Skill name="TypeScript" img="typescript" />
        <Skill name="Html & Css" img="html-css" />
        <Skill name="C#" img="csharp" />
      </Group>
      <Group>
        <Skill name="React" img="react" />
        <Skill name="Git Source Control" img="git" />
        <Skill name="SQL Server" img="sql" />
        <Skill name="Mongodb" img="mongo" />
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
