import Image from "next/image";
import Link from "next/link";

const features = [
  ["季節で旅を編む", "桜、紅葉、雪景色、祭り、旬の食材。混雑を読みながら、その時期にしかない美しさへ案内します。", "✿"],
  ["案内人の質にこだわる", "通訳だけではなく、文化背景まで伝えられるガイド、職人、料理人との時間を手配します。", "人"],
  ["移動も体験にする", "新幹線、専用車、フェリー、徒歩ルートを無理なく接続。荷物配送や乗換案内も含めます。", "道"],
];

const plans = [
  {
    image: "/assets/images/home/forest.jpg",
    meta: "7 days / Kyoto, Nara",
    title: "京都・奈良 静かな寺社と茶の時間",
    text: "早朝の寺院、町家ステイ、茶道、精進料理。初めての日本にも、再訪にも。",
  },
  {
    image: "/assets/images/home/mountain.jpg",
    meta: "10 days / Hokkaido",
    title: "北海道 雪景色と温泉リトリート",
    text: "ニセコ、富良野、知床を結び、温泉宿と自然ガイドで冬の北海道を楽しみます。",
  },
  {
    image: "/assets/images/home/photography.jpg",
    meta: "9 days / Setouchi",
    title: "瀬戸内 アートと島時間",
    text: "直島、豊島、尾道、しまなみ海道。島の暮らしと現代アートをゆっくり巡ります。",
  },
];

const services = ["オーダーメイド旅程作成", "旅館・ホテル・一棟貸し手配", "英語・日本語ガイド同行", "体験、食事、チケット予約", "荷物配送・移動サポート", "旅行中のチャット相談"];
const places = ["東京", "京都", "奈良", "金沢", "北海道", "瀬戸内", "直島", "高野山", "屋久島", "富士山", "白川郷", "日光", "箱根", "熊野古道", "沖縄", "長野", "飛騨高山"];
const experiences = ["茶の湯体験", "町家ステイ", "温泉旅館", "寿司カウンター", "早朝寺院拝観", "酒蔵見学", "陶芸工房", "島サイクリング", "雪見露天風呂", "市場ツアー"];

export default function HomePage() {
  return (
    <main>
      <section className="hero-section" id="hero-section">
        <div className="hero-bg">
          <Image
            src="/assets/images/home/hiking2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-texture" />
        <div className="hero-layout">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">Private journeys across Japan</p>
            <h1>日本の静けさを、旅の中心に。</h1>
            <p className="hero-lead">
              TabiMichi Japanは、旅館、食、移動、現地ガイド、季節の体験を一つの流れに整えるプライベート旅行設計室です。混雑を避け、地域に敬意を払いながら、記憶に残る日本を案内します。
            </p>
            <div className="hero-actions">
              <Link className="btn primary-cta" href="#book">旅の相談をする</Link>
              <Link className="btn secondary-cta" href="#plans">モデル旅程を見る</Link>
            </div>
            <div className="hero-metrics">
              <div><strong>42</strong><span>地域パートナー</span></div>
              <div><strong>24h</strong><span>旅行中サポート</span></div>
              <div><strong>2日</strong><span>初回提案目安</span></div>
            </div>
          </div>
          <aside className="route-board reveal-up">
            <div className="route-board-top"><span>2026 Spring Route</span><span>✦</span></div>
            <h2>京都・奈良・瀬戸内<br />9日間の余白ある旅</h2>
            <ol>
              <li><span>01</span>早朝の東山と町家の朝食</li>
              <li><span>02</span>奈良の山辺道を現地ガイドと歩く</li>
              <li><span>03</span>瀬戸内の島で料理人と夕食</li>
            </ol>
            <Link href="#book">この旅を相談する →</Link>
          </aside>
        </div>
      </section>

      <section id="concept" className="section-band page-section">
        <p className="eyebrow">Our point of view</p>
        <h2 className="section-title">予定を詰め込むより、心に残る時間を残す。</h2>
        <div className="editorial-split">
          <p>有名な場所へ行くことと、よい旅になることは同じではありません。私たちは、朝の光、移動の余裕、食事の温度、宿に戻る時間まで含めて旅程をつくります。</p>
          <p>日本の文化に触れる体験は、見せ物ではなく対話です。地域の人、職人、宿、ガイドと丁寧につながり、旅行者にも受け入れる側にも心地よい旅を目指します。</p>
        </div>
        <div className="feature-grid">
          {features.map(([title, text, icon]) => (
            <article className="lift-card" key={title}>
              <span className="card-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="plans" className="plans-section page-section">
        <p className="eyebrow">Signature routes</p>
        <h2 className="section-title">土地の空気まで感じるモデル旅程</h2>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article className="plan-card lift-card" key={plan.title}>
              <Image src={plan.image} alt={plan.title} width={720} height={520} sizes="(max-width: 900px) 88vw, 31vw" />
              <div>
                <span>{plan.meta}</span>
                <h3>{plan.title}</h3>
                <p>{plan.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="service-section section-band page-section">
        <p className="eyebrow">Concierge service</p>
        <h2 className="section-title">旅の前後まで、ひとつの窓口で。</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div className="lift-card" key={service}><span>{String(index + 1).padStart(2, "0")}</span>{service}</div>
          ))}
        </div>
      </section>

      <section id="process" className="process-section page-section">
        <p className="eyebrow">How it works</p>
        <h2 className="section-title">相談から出発まで、迷わない進行。</h2>
        <div className="timeline">
          {[
            ["01", "旅の輪郭を聞く", "時期、人数、興味、苦手なこと、旅の温度感を伺います。"],
            ["02", "初回ルート提案", "2営業日以内に、地域、日数、移動、宿の方向性を提示します。"],
            ["03", "手配と調整", "宿、交通、ガイド、食事、体験を確定し、無理のない旅程表に整えます。"],
            ["04", "旅行中サポート", "急な変更、乗換、予約確認をチャットで支えます。"],
          ].map(([step, title, text]) => (
            <article key={step}><span>{step}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="ticker-section">
        <Ticker items={places} direction="right" />
        <Ticker items={experiences} />
      </section>

      <section className="testimonial-section page-section">
        <p className="eyebrow">Traveler notes</p>
        <h2 className="section-title">旅の後に残る言葉</h2>
        <div className="testimonial-grid">
          <blockquote className="lift-card">「有名店の予約より、朝の庭を一緒に歩いた時間が忘れられません。」<span>New York / family of 4</span></blockquote>
          <blockquote className="lift-card">「移動が驚くほど滑らかで、子ども連れでも余裕がありました。」<span>Singapore / couple</span></blockquote>
          <blockquote className="lift-card">「観光ではなく、土地の人に迎えられた感覚がありました。」<span>Melbourne / solo traveler</span></blockquote>
        </div>
      </section>

      <section id="book" className="booking-section page-section">
        <div className="booking-panel">
          <div>
            <p className="eyebrow">Start planning</p>
            <h2>まずは15分、旅の希望を聞かせてください。</h2>
            <p>行きたい地域、人数、時期、ご予算、旅の雰囲気を伺い、2営業日以内に初回提案をお送りします。</p>
          </div>
          <form className="contact-mini" action="/contact">
            <input className="input" type="email" placeholder="メールアドレス" aria-label="メールアドレス" />
            <button className="btn primary-cta" type="submit">相談を始める</button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Ticker({ items, direction }: { items: string[]; direction?: "right" }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="ticker-row">
      <div className="edge-gradient" />
      <div className={`scroller ${direction === "right" ? "reverse" : ""}`}>
        {repeated.map((item, index) => <span className="sliding-image" key={`${item}-${index}`}>{item}</span>)}
      </div>
    </div>
  );
}
