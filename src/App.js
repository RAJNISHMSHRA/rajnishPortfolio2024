import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./portfolio";
import ReactGA from "react-ga";
import AnimatedCursor from "react-animated-cursor";
import MatrixBackground from "./components/contactForm/matrix";
import SimpleForm from "./components/chatbot/SimpleForm";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          {/* <AnimatedCursor /> */}
          <MatrixBackground />
          <SimpleForm />
          <AnimatedCursor
            innerSize={8}
            outerSize={30}
            color="54,186,1"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            outerStyle={{
              mixBlendMode: "exclusion",
            }}
            hasBlendMode={true}
            //            outerStyle={{
            //   border: '3px solid var(--cursor-color)'
            // }}
            // innerStyle={{
            //   backgroundColor: 'var(--cursor-color)'
            // }}
            clickables={[
              // "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",

              "p",
              // "button",
              "h1",
              // ".link",
              {
                target: ".custom",
                options: {
                  innerSize: 12,
                  outerSize: 24,
                  color: "255, 245, 238",
                  outerAlpha: 0.8,
                  innerScale: 0.7,
                  outerScale: 9,
                },
              },
            ]}
          />
          {useCursor ? (
            // <CursorProvider
            //   color={themes[theme].secondaryText}
            //   ringSize={25}
            //   transitionTime={75}
            // >

            <Main theme={themes[theme]} setTheme={setTheme} />
          ) : (
            // </CursorProvider>
            <Main theme={themes[theme]} setTheme={setTheme} />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
