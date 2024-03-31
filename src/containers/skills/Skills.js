import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { TypeAnimation } from "react-type-animation";

export default function Skills(props) {
  const theme = props.theme;
  const [textColor, setTextColor] = React.useState("red");

  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade
          bottom
          duration={2000}
          distance="20px"
          style={{
            color: textColor,
            /* when working without ref and classNames, the manipulated style needs to be
         applied to the parent element, because the TypeAnimation component is perma-memoized */
          }}
        >
          {/* <h1 className="skills-header" style={{ color: theme.text }}>
            Here's what I do
          </h1> */}
          <h1 className="skills-header" style={{ color: textColor }}>
            <TypeAnimation
              preRenderFirstString={true}
              deletionSpeed={60}
              sequence={[
                "Here's what I do",
                800,
                () => setTextColor("aqua"),
                "Here's what I Code",
                800,
                () => setTextColor("deeppink"),
                "Here's what I love to make ",
                1000,
                () => setTextColor("darkkhaki"),
                "",
              ]}
              repeat={Infinity}
            />
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
