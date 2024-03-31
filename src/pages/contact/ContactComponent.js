import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade, Bounce, Roll, Zoom, Rotate } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import Resume from "../../components/resume/Resume.js";
import pdf from "../../assests/pdf/Rajnish2024Resume.pdf";
import call from "../../assests/images/call.png";
import call1 from "./call1.webp";
import Tilt from "react-parallax-tilt";
import { Animate } from "react-simple-animate";
import TextFX from "txt-fx";
import { useRef } from "react";
import ContactForm from "../../components/contactForm/contact.jsx";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const [showResume, setShowResume] = React.useState(false);
  const theme = props.theme;
  const ref = useRef(null);

  const handleClick = () => {
    setShowResume((prev) => !prev);
  };

  React.useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [showResume]);

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const downloadTxtFile = () => {
    console.log("download logic goes here");
  };

  // const onHoverScramble = (title) => {
  //   const fx = new TextFX.Scrambler();
  //   const element = document.querySelector(title);
  //   fx.scramble(element, 200, 6, true, ["<", "/>"]);
  // };

  React.useEffect(() => {
    const fx = new TextFX.Scrambler();
    const element = document.querySelector(".contact-heading-text");
    fx.scramble(element, 200, 6, true, ["<", "/>"]);
  }, []);

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <Bounce>
                <Tilt>
                  <img
                    className="profile-pic"
                    src={require(`../../assests/images/rajnishmishra.jpg`)}
                    alt=""
                    width={"70%"}
                    style={{ borderRadius: "5%" }}
                  />
                </Tilt>
              </Bounce>
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
                // onMouseEnter={() => onHoverScramble(".contact-heading-text")}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              {/* <span>
                <img src={call1} width={"30px"} style={{ paddingTop: "5%" }} />{" "}
                <span>+91-7000593081</span>
              </span> */}

              <br />
              <br />
              <button
                {...styles}
                className="general-btn btn"
                // href={greeting.resumeLink}
                onClick={() => handleClick()}
              >
                {!showResume ? "View Resume" : "Mail Me"}
              </button>

              <a
                {...styles}
                className="general-btn btn"
                href={pdf}
                download="Rajnish2024Resume.pdf"
                style={{ marginLeft: "2%" }}
                onClick={downloadTxtFile}
              >
                {" "}
                Download Resume
              </a>
            </div>
          </div>
        </Fade>
        {showResume ? (
          <div ref={ref}>
            <Rotate bottom duration={1000} distance="40px">
              <Resume pdf={pdf} />
            </Rotate>
          </div>
        ) : (
          <Zoom bottom duration={1000} ref={ref}>
            <ContactForm />
          </Zoom>
        )}

        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <a
                  {...styles}
                  className="general-btn"
                  //  href={blogSection.link}
                >
                  My Medium Profile
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
