import { t } from "../../i18n";
import { Section } from "../Section";
import { Stack } from "../Stack";
import { Tipography } from "../Tipography";

import "./Experience.css";

const classNames = {
  root: "Experience",
  title: "Experience__title",
  list: "Experience__list",
  item: "Experience__item",
  year: "Experience__item__year",
  yearMb: "Experience__item__year__mb",
  timeline: "Experience__item__timeline",
  bullet: "Experience__item__timeline__bullet",
  line: "Experience__item__timeline__line",
  content: "Experience__item__content",
};

const ExperienceItem = ({ year, position, company, summary, summaryItems }) => {
  return (
    <Stack.Row className={classNames.item}>
      <Stack.Col className={classNames.year}>{year}</Stack.Col>
      <Stack.Col className={classNames.timeline}>
        <div className={classNames.bullet}></div>
        <div className={classNames.line}></div>
      </Stack.Col>
      <Stack.Col className={classNames.content}>
        <Tipography as="h3">{position}</Tipography>
        <Tipography as="h4">{company}</Tipography>
        <Tipography as="h5" className={classNames.yearMb}>
          {year}
        </Tipography>
        <Tipography as="p">{summary}</Tipography>
        {summaryItems && (
          <ul>
            {summaryItems.map((item, index) => (
              <li key={index}>{<Tipography as="p">{item}</Tipography>}</li>
            ))}
          </ul>
        )}
      </Stack.Col>
    </Stack.Row>
  );
};

export const Experience = () => {
  return (
    <Section className={classNames.root}>
      <Tipography as="h2" id="experience" className={classNames.title}>
        {t("experience.label")}
      </Tipography>
      <Stack.Col className={classNames.list}>
        <ExperienceItem
          year={t("experience.exp1.year")}
          position={t("experience.exp1.position")}
          company={t("experience.exp1.company")}
          summary={t("experience.exp1.summary")}
          summaryItems={[
            t("experience.exp1.summaryItem1"),
            t("experience.exp1.summaryItem2"),
            t("experience.exp1.summaryItem3"),
            t("experience.exp1.summaryItem4"),
            t("experience.exp1.summaryItem5"),
            t("experience.exp1.summaryItem6"),
            t("experience.exp1.summaryItem7"),
          ]}
        />
        <ExperienceItem
          year={t("experience.exp2.year")}
          position={t("experience.exp2.position")}
          company={t("experience.exp2.company")}
          summary={t("experience.exp2.summary")}
          summaryItems={[
            t("experience.exp2.summaryItem1"),
            t("experience.exp2.summaryItem2"),
            t("experience.exp2.summaryItem3"),
            t("experience.exp2.summaryItem4"),
            t("experience.exp2.summaryItem5"),
            t("experience.exp2.summaryItem6"),
            t("experience.exp2.summaryItem7"),
            t("experience.exp2.summaryItem8"),
          ]}
        />
      </Stack.Col>
    </Section>
  );
};
