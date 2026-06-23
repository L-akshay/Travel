import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
};

export default function LegalNoticePage() {
  return (
    <LegalPage eyebrow="Legal Notice" title="特定商取引法に基づく表記">
      <h2>事業者名</h2>
      <p>TabiMichi Japan</p>
      <h2>所在地</h2>
      <p>〒150-0001 東京都渋谷区神宮前 3-12-8</p>
      <h2>お問い合わせ</h2>
      <p>hello@tabimichi.jp<br />電話番号はご請求があった場合、遅滞なく開示します。</p>
      <h2>販売価格</h2>
      <p>旅行企画料、手配料、宿泊・交通・体験費用は、個別見積書に税込価格で表示します。</p>
      <h2>商品代金以外の必要料金</h2>
      <p>振込手数料、通信費、現地で発生する追加飲食費、個人的費用、任意保険料などはお客様負担となります。</p>
      <h2>支払方法と支払時期</h2>
      <p>銀行振込またはオンライン決済。支払時期は見積書および予約確認書に記載します。</p>
      <h2>キャンセル・返金</h2>
      <p>予約確定後のキャンセルは、当社規定および各施設・交通機関・体験提供者の取消条件に従います。</p>
    </LegalPage>
  );
}
