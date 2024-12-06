import React from "react";
import Image from "next/image";

const IntroductionSection = () => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "60vh",
      overflow: "hidden", // 画面サイズを固定
    }}
  >
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        animation: "zoomEffect 5s infinite alternate", // 画像にアニメーションを適用
      }}
    >
      <Image
        src="/homepage.jpg"
        alt="背景画像"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "#fff",
        fontSize: "1.5rem",
        padding: "20px",
        borderRadius: "8px",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        fontFamily: "'Arial', sans-serif",
        fontWeight: "bold",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          margin: "0",
        }}
      >
        Who We Are
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          fontWeight: "normal",
          marginTop: "10px",
        }}
      >
        私たちは人々の課題を解決し、生活をより豊かにします。
      </p>
    </div>
    {/* アニメーションの定義をグローバルに追加 */}
    <style>{`
      @keyframes zoomEffect {
        0% {
          transform: scale(1); /* 初期サイズ */
        }
        100% {
          transform: scale(1.2); /* ズーム後のサイズ */
        }
      }
    `}</style>
  </div>
);

const ServicesSection = () => (
  <>
    <style>{`
      /* レスポンシブデザイン用のスタイル */
      @media (max-width: 768px) {
        .services-section {
          flex-direction: column;
          padding: 1rem;
        }

        .service-card {
          max-width: 100%;
          padding: 1rem;
        }

        .product-gallery {
          /* 横並びのまま維持 */
          flex-direction: row;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }
      }
    `}</style>
    <section
      className="services-section"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem auto",
        maxWidth: "1000px",
        gap: "2rem",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "8px",
      }}
    >
      <article
        className="service-card"
        style={{
          flex: 1,
          maxWidth: "400px",
          padding: "1.5rem",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#000",
            marginBottom: "1rem",
          }}
        >
          Our Services
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          養育費を可視化するSaaS
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#000",
            marginBottom: "1rem",
          }}
        >
          養育費で揉めないために可視化するWebサービスです。何年も向き合っていく養育費の取り決め、金額の変動を直接コミュニケーションをとることなくお子さんが成人するまでサポートいたします。
        </p>
        <a
          href="https://visualcs-qmmcsorxg-honda-ryos-projects.vercel.app/"
          style={{
            display: "inline-block",
            backgroundColor: "#2c8cf3",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "50px",
            textDecoration: "none",
            transition: "background-color 0.1s ease",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          サービスサイトへ
        </a>
      </article>
      <div
        className="product-gallery"
        style={{
          display: "flex",
          flexDirection: "row", // 常に横並び
          justifyContent: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <Image
          src="/image 31.png"
          alt="プロダクト概要 1"
          width={200}
          height={150}
        />
        <Image
          src="/image 42.png"
          alt="プロダクト概要 2"
          width={200}
          height={150}
        />
      </div>
    </section>
  </>
);

const MainContent = () => (
  <main>
    <IntroductionSection />
    <ServicesSection />
  </main>
);

export default MainContent;
