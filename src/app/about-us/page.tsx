import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "About us",
  description: "TabiMichi Japanの考え方、旅づくりの姿勢、チームについて。",
};

export default function AboutUsPage() {
  return (
    <LegalPage eyebrow="About us" title="日本の旅を、静かに深く設計する。">
      <h2>TabiMichi Japanについて</h2>
      <p>TabiMichi Japanは、日本各地の宿、案内人、料理人、職人、交通手配パートナーと連携し、ひと組ごとに旅を設計するトラベルコンシェルジュです。</p>
      <p>私たちが大切にしているのは、予定を増やすことではなく、旅の密度を上げること。移動の余白、朝の静けさ、地域の人との対話、宿に戻る時間まで含めて、無理のない旅程に整えます。</p>
      <h2>大切にしていること</h2>
      <ul>
        <li>地域の文化や暮らしに敬意を払うこと</li>
        <li>旅行者と受け入れる地域の双方に心地よい設計であること</li>
        <li>混雑や移動負担を読み、旅の余白を残すこと</li>
        <li>表面的な観光ではなく、背景まで伝わる体験を届けること</li>
      </ul>
      <h2>対応する旅</h2>
      <p>家族旅行、ハネムーン、初めての日本旅行、再訪旅行、食や工芸をテーマにした旅、法人・VIP手配まで対応します。</p>
      <Link className="btn primary-cta inline-cta" href="/contact">旅を相談する</Link>
    </LegalPage>
  );
}
