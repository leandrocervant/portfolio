import { useRef } from "react";
import { ChevronUp } from "lucide-react";
import { I18nProvider } from "./i18n";
import { useScrollToTop } from "./hooks";
import { mergeClasses } from "./utilities";
import {
  About,
  Skills,
  Background,
  Experience,
  Stack,
  WhoAmI,
  Header,
  Contact,
  Thanks,
  Links,
  Button,
} from "./components";

import "./App.css";

const classNames = {
  root: "App",
  content: "App__content",
  topButton: "App__topButton",
};

const Main = () => {
  const ref = useRef();
  const { showButton, scrollToTop } = useScrollToTop(ref);

  return (
    <Stack.Col ref={ref} className={classNames.root} theme="dark">
      <Header />
      <Stack.Col className={classNames.content}>
        <WhoAmI />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Links />
        <Thanks />
      </Stack.Col>
      <Button
        shape="circular"
        onClick={scrollToTop}
        className={mergeClasses(
          classNames.topButton,
          showButton && `${classNames.topButton}--show`
        )}
      >
        <ChevronUp />
      </Button>

      <Background />
    </Stack.Col>
  );
};

function App() {
  return (
    <I18nProvider>
      <Main />
    </I18nProvider>
  );
}

export default App;
