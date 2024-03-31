import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [stateMessage, setStateMessage] = useState(null);
//   const sendEmail = (e) => {
//     e.persist();
//     e.preventDefault();
//     setIsSubmitting(true);
//     emailjs
//       .sendForm(
//         "service_h8lx83o",
//         "template_stdvhy4",
//         e.target,
//         "I_nFBYPxbB4aAS082"
//       )
//       //   .sendForm(
//       //     process.env.REACT_APP_SERVICE_ID,
//       //     process.env.REACT_APP_TEMPLATE_ID,
//       //     e.target,
//       //     process.env.REACT_APP_PUBLIC_KEY
//       //   )
//       .then(
//         (result) => {
//           setStateMessage("Message sent!");
//           setIsSubmitting(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 5000); // hide message after 5 seconds
//         },
//         (error) => {
//           setStateMessage("Something went wrong, please try again later");
//           setIsSubmitting(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 5000); // hide message after 5 seconds
//         }
//       );

//     // Clears the form after sending the email
//     e.target.reset();
//   };
//   return (
//     <form onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" disabled={isSubmitting} />
//       {stateMessage && <p>{stateMessage}</p>}
//     </form>
//   );
// };
// export default ContactForm;

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
// import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.min.css";
import "./contact.css";
import MatrixBackground from "./matrix";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refId, setrefId] = useState(null);
  const [stateMessage, setStateMessage] = useState(null);

  const ref = useRef(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_h8lx83o",
        "template_stdvhy4",
        e.target,
        "I_nFBYPxbB4aAS082"
      )
      //   .sendForm(
      //     process.env.REACT_APP_SERVICE_ID,
      //     process.env.REACT_APP_TEMPLATE_ID,
      //     e.target,
      //     process.env.REACT_APP_PUBLIC_KEY
      //   )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (e, data) => {
    // Destrcture data object
    sendEmail();
    const { name, email, subject, message } = data;
    try {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
          "service_h8lx83o",
          "template_stdvhy4",
          e.target,
          "I_nFBYPxbB4aAS082"
        )
        //   .sendForm(
        //     process.env.REACT_APP_SERVICE_ID,
        //     process.env.REACT_APP_TEMPLATE_ID,
        //     e.target,
        //     process.env.REACT_APP_PUBLIC_KEY
        //   )
        .then(
          (result) => {
            setStateMessage("Message sent!");
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage("Something went wrong, please try again later");
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );

      // Clears the form after sending the email
      //   e.target.reset();

      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      //   await emailjs.send(
      //     process.env.REACT_APP_SERVICE_ID,
      //     process.env.REACT_APP_TEMPLATE_ID,
      //     templateParams,
      //     process.env.REACT_APP_USER_ID
      //   );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // const ref = document.querySelector(".card");
    setrefId(ref);

    return () => {};
  }, [ref.current]);

  return (
    <div
      className="ContactForm"
      style={{ marginBottom: "4%", borderRadius: "5%" }}
    >
      <div
        className="container card"
        ref={ref}
        style={{ padding: "3%", background: "#040d14" }}
      >
        <p style={{ margin: "auto 46%" }}>Gmail Me!</p>
        <div
          className="row"
          style={{
            margin: "auto 10%",
            width: "80%",
            paddingTop: "5%",
          }}
        >
          <div className="contactForm" style={{ paddingTop: "4%" }}>
            <form id="contact-form" onSubmit={sendEmail} noValidate>
              {/* Row 1 of form */}
              <MatrixBackground />

              <div className="row formRow">
                <div className="col-6">
                  <input
                    type="text"
                    name="user_name"
                    {...register("Name", {
                      required: {
                        value: true,
                        message: "Please enter your name",
                      },
                      maxLength: {
                        value: 30,
                        message: "Please use 30 characters or less",
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Name"
                    style={{ marginRight: "50px" }}
                  ></input>
                  {errors.name && (
                    <span className="errorMessage">{errors.name.message}</span>
                  )}
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    name="user_email"
                    {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className="form-control formInput"
                    placeholder="Email address"
                  ></input>
                  {errors.email && (
                    <span className="errorMessage">
                      Please enter a valid email address
                    </span>
                  )}
                </div>
              </div>
              {/* Row 2 of form */}
              <div className="row formRow">
                <div className="col">
                  <input
                    type="number"
                    name="phone"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Please enter mobile number",
                      },
                      maxLength: {
                        value: 75,
                        message: "Subject cannot exceed 75 characters",
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Phone number"
                  ></input>
                  {errors.subject && (
                    <span className="errorMessage">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
              </div>
              {/* Row 3 of form */}
              <div className="row formRow">
                <div className="col">
                  <textarea
                    rows={3}
                    name="message"
                    {...register("message", {
                      required: true,
                    })}
                    className="form-control formInput"
                    placeholder="please type your message here..."
                  ></textarea>
                  {errors.message && (
                    <span className="errorMessage">
                      Please enter delivery information
                    </span>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  className="submit-btn"
                  disabled={disabled}
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div>
                <marquee style={{ margin: "auto 20%" }}>
                  Note:- Message will be delivered to my email
                  rajnish.misraa@gmail.com
                </marquee>
              </div>
              <p> {stateMessage && <p>{stateMessage}</p>}</p>
            </form>
          </div>
          <ToastContainer />
        </div>

        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </div>
    </div>
  );
};

export default ContactForm;
