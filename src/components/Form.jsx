import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';

function Result() {
  return (
    <div className="flex flex-col text-center">
      <span>Thank you for reaching out to me!</span>
      <span className="pb-8"> I'll contact you soon 🤍</span>
    </div>
  );
}

export function Form() {
  const [result, setResult] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        form.current,
        'bxNj86Y-MJvFHss4P'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setResult(false);
    }, 5000);
  }, [result]);

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-2 items-center"
    >
      <input
        required
        type="text"
        name="user_name"
        placeholder="Name"
        className="bg-gray-400 dark:bg-gray-200  rounded p-2 w-72 lg:w-96 text-rose-50 dark:text-blue-200 selection:bg-purple-100"
      />

      <input
        required
        type="email"
        name="user_email"
        placeholder="Email"
        className="bg-gray-400 dark:bg-gray-200  rounded p-2 w-72 lg:w-96 text-rose-50 dark:text-blue-200 selection:bg-purple-100"
      />

      <textarea
        required
        name="message"
        cols="30"
        rows="10"
        className="bg-gray-400 dark:bg-gray-200 rounded p-2 w-72 lg:w-96 resize-none text-rose-50 dark:text-blue-200 selection:bg-purple-100"
      />

      <button
        disabled={result}
        type="submit"
        className={classNames(
          'border-rose-500 text-rose-500 hover:from-rose-500 hover:to-purple-200 hover:text-neutral-100  dark:border-blue-200 dark:text-blue-200 border hover:bg-gradient-to-r dark:hover:text-neutral-900 font-medium hover:dark:from-blue-200 hover:dark:to-purple-200 rounded p-2 w-72 mb-6 lg:w-96 transition-all duration-300 selection:text-yellow disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        Send
      </button>
      {result ? <Result /> : null}
    </form>
  );
}
