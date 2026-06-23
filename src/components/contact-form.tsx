"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setStatus("ありがとうございます。担当者より2営業日以内にご連絡します。");
  }

  return (
    <form className={`contact-form ${submitted ? "is-submitted" : ""}`} onSubmit={onSubmit}>
      <label>
        お名前
        <input className="input" type="text" name="name" placeholder="山田 太郎" required />
      </label>
      <label>
        メールアドレス
        <input className="input" type="email" name="email" placeholder="you@example.com" required />
      </label>
      <label>
        旅行予定時期
        <input className="input" type="text" name="season" placeholder="2026年4月、秋ごろ など" required />
      </label>
      <label>
        旅のスタイル
        <select className="input" name="style" required defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          <option>初めての日本旅行</option>
          <option>家族旅行</option>
          <option>ハネムーン・記念日</option>
          <option>アート・食・文化体験</option>
          <option>法人・VIP手配</option>
        </select>
      </label>
      <label>
        お問い合わせ内容
        <textarea className="input" name="message" placeholder="人数、行きたい地域、興味のある体験など" required />
      </label>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
      <button className="btn primary-cta" type="submit" disabled={submitted}>
        {submitted ? "送信済み" : "相談内容を送信"}
      </button>
    </form>
  );
}
