import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-column">
        <Link className="brand-mark footer-brand" href="/">
          <Image src="/assets/logo/logo.png" width={42} height={42} alt="TabiMichi Japan" />
          <span>TabiMichi Japan</span>
        </Link>
        <p>
          東京都渋谷区神宮前 3-12-8
          <br />
          hello@tabimichi.jp
          <br />
          旅行企画・手配サポート
        </p>
        <div className="social-links">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="X">X</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </div>
      </div>
      <div>
        <h2>会社情報</h2>
        <Link href="/about-us">私たちについて</Link>
        <Link href="/#concept">旅の思想</Link>
        <Link href="/#plans">旅程</Link>
        <Link href="/#services">手配内容</Link>
        <Link href="/contact">お問い合わせ</Link>
      </div>
      <div>
        <h2>法務</h2>
        <Link href="/privacy-policy">プライバシーポリシー</Link>
        <Link href="/terms-of-service">利用規約</Link>
        <Link href="/legal-notice">特定商取引法に基づく表記</Link>
        <Link href="/contact">旅行相談窓口</Link>
      </div>
    </footer>
  );
}
