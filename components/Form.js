import { useState, useRef, useEffect } from "react";

import Check from "./icons/Check";

export default function Form() {
  const refName = useRef(null);
  const refEmail = useRef(null);
  const refMessage = useRef(null);
  const refSubmit = useRef(null);

  const [name, setName] = useState("");
  const [checkName, setCheckName] = useState(false);
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [checkMessage, setCheckMessage] = useState(false);
  const [checkSubmit, setCheckSubmit] = useState(false);

  useEffect(() => {
    refSubmit.current.style.display = "none";
  }, [refSubmit]);

  const validateName = () => {
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)) {
      setCheckName(false);
      refName.current.querySelector("span").innerHTML = "Full name is required";
      return false;
    } else {
      refName.current.querySelector("span").innerHTML = "";
      setCheckName(true);
      setTimeout(() => {
        setCheckName(false);
      }, 3000);
      return true;
    }
  };

  const validateEmail = () => {
    if (email.length === 0) {
      setCheckEmail(false);
      refEmail.current.querySelector("span").innerHTML = "Email is required";
      return false;
    } else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      setCheckEmail(false);
      refEmail.current.querySelector("span").innerHTML = "Email is invalid";
      return false;
    } else {
      refEmail.current.querySelector("span").innerHTML = "";
      setCheckEmail(true);
      setTimeout(() => {
        setCheckEmail(false);
      }, 3000);
      return true;
    }
  };

  const validateMessage = () => {
    const requiredChar = 30;
    let leftChars = requiredChar - message.length;

    if (leftChars > 0) {
      setCheckMessage(false);
      refMessage.current.querySelector(
        "span"
      ).innerHTML = `${leftChars} more characters required`;
      return false;
    } else {
      refMessage.current.querySelector("span").innerHTML = "";
      setCheckMessage(true);
      setTimeout(() => {
        setCheckMessage(false);
      }, 3000);
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCheckSubmit(true);
    if (!validateName() || !validateEmail() || !validateMessage()) {
      refSubmit.current.innerHTML = "Please fix error to submit";
      refSubmit.current.style.display = "block";
      setTimeout(() => {
        // setCheckSubmit(false);
        refSubmit.current.style.display = "none";
      }, 3000);
      return false;
    } else {
      refSubmit.current.innerHTML = "Message submitted";
      refSubmit.current.style.display = "block";
      setTimeout(() => {
        // setCheckSubmit(false);
        refSubmit.current.style.display = "none";
      }, 3000);
    }
  };

  return (
    <section className='form__container'>
      <div className='form__title__container'>
        <h3>QUESTION? </h3>
        <h3>WE ARE HERE TO HELP!</h3>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__first__row'>
          <div className='input__group' ref={refName}>
            <label>Full name</label>
            <input
              type='text'
              placeholder=''
              onKeyUp={() => validateName()}
              onChange={(e) => setName(e.target.value)}
            />
            <span className='error__name'></span>
            {checkName && (
              <span className='check__name'>
                <Check />
              </span>
            )}
          </div>

          <div className='input__group' ref={refEmail}>
            <label>Email</label>
            <input
              type='email'
              placeholder=''
              onKeyUp={() => validateEmail()}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className='error__email'></span>
            {checkEmail && (
              <span className='check__name'>
                <Check />
              </span>
            )}
          </div>
        </div>

        <div className='form__second__row' ref={refMessage}>
          <div className='input__group'>
            <label>Message</label>
            <textarea
              rows='5'
              placeholder=''
              onKeyUp={() => validateMessage()}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <span className='error__message'></span>
            {checkMessage && (
              <span id='check__name'>
                <Check />
              </span>
            )}
          </div>
        </div>

        <button className='form__btn'>
          <p>SEND</p>
        </button>
        <span ref={refSubmit}></span>
      </form>
    </section>
  );
}
