import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";
import { Animation, Typer } from "react-easy-animations";
import Tilt from "react-parallax-tilt";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });
  const greet = greeting.title.split("");

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div" style={{ paddingTop: "6%" }}>
            <div>
              <h1>
                {greeting.title.split().map((text, index) => {
                  return (
                    <Animation
                      type="blur"
                      duration="1000ms"
                      delay="3000ms"
                      direction="reverse"
                      timing="ease"
                      iteration="2"
                      fillMode="none"
                    >
                      {text}{" "}
                    </Animation>
                  );
                })}
              </h1>

              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button btn"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div" > */}
          <Tilt>
            <FeelingProud theme={theme} />
          </Tilt>
          {/* </div> */}
        </div>
      </div>
    </Fade>
  );
}
