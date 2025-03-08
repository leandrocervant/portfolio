import { t } from "../../i18n";
import { LanguageSwitch } from "../LanguageSwitch";

import classNames from "./Header.module.css";

export const Header = () => (
  <header className={classNames.root}>
    <nav className={classNames.nav}>
      <a href="#about">{t("header.about")}</a>
      <a href="#experience">{t("header.experience")}</a>
      <a href="#contact">{t("header.contact")}</a>
    </nav>
    <LanguageSwitch />
  </header>
);
