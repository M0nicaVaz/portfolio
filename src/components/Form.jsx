import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export function Form() {
  const { t } = useTranslation();
  const [result, setResult] = useState(false);

  const form = useRef();

  function Result() {
    const { t } = useTranslation();
    return (
      <div className="flex flex-col text-center">
        <span>{t('result.0')}</span>
        <span className="pb-8">{t('result.1')}</span>
      </div>
    );
  }

  function sendEmail(e) {
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
  }

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
        placeholder={t('form.0')}
        className="bg-gray-400/50 text-rose-500  dark:bg-gray-200  rounded p-2 w-72 lg:w-96 dark:text-rose-50 dark:text-blue-200 selection:bg-purple-100"
      />

      <input
        required
        type="email"
        name="user_email"
        placeholder="Email"
        className="bg-gray-400/50 text-rose-500 dark:bg-gray-200  rounded p-2 w-72 lg:w-96 dark:text-rose-50 dark:text-blue-200 selection:bg-purple-100"
      />

      <textarea
        required
        name="message"
        cols="30"
        rows="10"
        className="bg-gray-400/50 text-rose-500  dark:bg-gray-200 rounded p-2 w-72 lg:w-96 resize-none dark:text-rose-50 dark:text-blue-200 selection:bg-purple-100"
      />

      <button
        disabled={result}
        type="submit"
        className={classNames(
          'border-rose-500 text-rose-500  text-rose-500 hover:from-rose-500 hover:to-purple-200 hover:text-neutral-100  dark:border-blue-200 dark:text-blue-200 border hover:bg-gradient-to-r dark:hover:text-neutral-900 font-medium hover:dark:from-blue-200 hover:dark:to-purple-200 rounded p-2 w-72 mb-6 lg:w-96 transition-all duration-300 selection:text-yellow disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        {t('form.1')}
      </button>
      {result ? <Result /> : null}
    </form>
  );
}
