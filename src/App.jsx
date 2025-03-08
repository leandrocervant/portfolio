import { useRef } from "react";
import { ChevronUp } from "lucide-react";
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

import classNames from "./App.module.css";

function App() {
  const ref = useRef();
  const { showButton: showTopButton, scrollToTop } = useScrollToTop(ref);

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
          showTopButton && classNames[`topButton--show`]
        )}
      >
        <ChevronUp />
      </Button>
      <Background />
    </Stack.Col>
  );
}

export default App;
