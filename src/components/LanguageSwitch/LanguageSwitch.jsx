import { useRef, useState } from "react";
import { useI18n } from "../../i18n";
import { mergeClasses } from "../../utilities";
import { useOutsideClick } from "../../hooks";
import { Button } from "../Button";
import { Stack } from "../Stack";

import "./LanguageSwitch.css";

const classNames = {
  root: "LanguageSwitch",
  button: "LanguageSwitch__button",
  menu: "LanguageSwitch__menu",
  option: "LanguageSwitch__option",
};

export const Option = ({ children, selected, className, ...rest }) => {
  return (
    <Stack.Row
      className={mergeClasses(
        classNames.option,
        selected && `${classNames.option}--selected`,
        className
      )}
      {...rest}
    >
      {children}
    </Stack.Row>
  );
};

export const LanguageSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { langCode, setLanguage, languages } = useI18n();

  const ref = useRef();

  useOutsideClick(ref, () => setIsOpen(false));

  const changeLanguage = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const langSrc = new URL(`../../assets/flags/${langCode}.svg`, import.meta.url)
    .href;

  const langs = languages.map(({ code, label }) => ({
    code,
    label,
    src: new URL(`../../assets/flags/${code}.svg`, import.meta.url).href,
  }));

  return (
    <Stack.Col ref={ref} className={classNames.root}>
      <Button
        className={classNames.button}
        shape="circular"
        appearance="transparent"
        size="medium"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img src={langSrc} />
      </Button>
      {isOpen && (
        <Stack.Col className={classNames.menu}>
          {langs.map(({ code, label, src }) => (
            <Option
              key={code}
              onClick={() => changeLanguage(code)}
              selected={langCode === code}
            >
              <img src={src} />
              {label}
            </Option>
          ))}
        </Stack.Col>
      )}
    </Stack.Col>
  );
};
