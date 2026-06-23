import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <article className="legal-card">{children}</article>
      </div>
    </main>
  );
}
