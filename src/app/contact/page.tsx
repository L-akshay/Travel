import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "TabiMichi Japanへの旅行相談、お見積もり、取材、法人のお問い合わせはこちら。",
};

export default function ContactPage() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <p className="eyebrow">Contact</p>
        <h1>旅の相談窓口</h1>
        <div className="legal-card contact-grid">
          <section className="contact-side-note">
            <h2>最初に聞かせてほしいこと</h2>
            <p>完璧に決まっていなくて大丈夫です。旅の好みや避けたいことまで含めて、余白のある初回提案に落とし込みます。</p>
            <ul>
              <li>旅行予定時期と日数</li>
              <li>人数、年齢層、移動の希望</li>
              <li>興味のある地域、食、文化体験</li>
              <li>おおよその予算感</li>
            </ul>
            <h2>返信目安</h2>
            <p>平日10:00-18:00 JSTに確認し、2営業日以内にご連絡します。</p>
          </section>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
