import Image from "next/image";

const HeroSection = () => (
  <div className="hero-section" style={heroSectionStyle}>
    <style>
      {`
        @keyframes slideup {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            transform: translate(-50%, -70%) scale(1);
          }
        }
      `}
    </style>
    <img
      src="/about.jpg"
      alt="背景画像"
      style={{
        width: "100%",
        height: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        filter: "brightness(60%)",
        transform: "translate(-50%, -70%) scale(1)",
        animation: "slideup 3s ease-in-out forwards", // アニメーション適用
      }}
    />
    <div className="hero-text" style={heroTextStyle}>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          margin: "0",
        }}
      >
        About Us
      </h1>
      <p
        style={{
          fontSize: "2.5rem",
          fontWeight: "normal",
          marginTop: "10px",
        }}
      >
        私たちは世界に目を向ける
        <br />
        スタートアップです
      </p>
    </div>
  </div>
);

const heroSectionStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "90vh",
  overflow: "hidden",
};

const heroTextStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#ffffff",
  fontSize: "2.2rem",
  padding: "20px",
  lineHeight: 1.5,
};

const MissionVisionValue = () => (
  <div>
    {/* Mission セクション */}
    <section
      style={{
        margin: "4rem auto",
        maxWidth: "1000px",
        padding: "2.5rem",
        background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
        borderRadius: "16px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          marginBottom: "2rem",
          color: "#002c5f",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Mission
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          lineHeight: 1.9,
          color: "#333",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        人々の課題を解決し、生活をより豊かにする。
      </h2>
    </section>

    {/* Vision セクション */}
    <section
      style={{
        margin: "4rem auto",
        maxWidth: "1000px",
        padding: "2.5rem",
        background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
        borderRadius: "16px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          marginBottom: "2rem",
          color: "#002c5f",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Vision
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          lineHeight: 1.9,
          color: "#333",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        世界中の人々に価値を提供する
      </h2>
    </section>

    {/* Value セクション */}
    <section
      style={{
        margin: "4rem auto",
        maxWidth: "1000px",
        padding: "2.5rem",
        background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
        borderRadius: "16px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          marginBottom: "2rem",
          color: "#002c5f",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Value
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          marginTop: "3rem",
        }}
      >
        {[
          {
            title: "大胆な挑戦をしよう",
            description: "常識にとらわれず、新しい可能性を積極的に模索しよう。",
          },
          {
            title: "人の課題を解決しよう",
            description:
              "人々のニーズを深く理解し、生活を豊かにするソリューションを追求しよう。",
          },
          {
            title: "テクノロジーで解決しよう",
            description:
              "多くの方々の課題を解決するために技術を活用し、具体的な価値を提供しよう。",
          },
          {
            title: "でかいことをやろう",
            description:
              "世界中の人々の心に届くプロダクトをつくり、社会にインパクトを生み出そう。",
          },
        ].map(({ title, description }, index) => (
          <article
            key={index}
            style={{
              background: "linear-gradient(145deg, #ffffff, #e9e9e9)",
              padding: "2rem",
              borderRadius: "16px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                marginBottom: "1rem",
                color: "#002c5f",
                textAlign: "center",
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.9,
                color: "#555",
                textAlign: "center",
              }}
            >
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  </div>
);

const CompanyOverview = () => (
  <section
    className="company-overview"
    style={{
      margin: "4rem auto",
      maxWidth: "1000px",
      padding: "2rem",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    }}
  >
    <h1
      style={{
        fontSize: "2.8rem",
        marginBottom: "2rem",
        color: "#002c5f",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      会社概要
    </h1>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <tbody>
        {[
          { label: "会社名", value: "JADO株式会社" },
          { label: "代表取締役", value: "本田 亮" },
          { label: "設立", value: "2024/3/25" },
          {
            label: "所在地",
            value: (
              <>
                〒010-0003
                <br />
                秋田県秋田市東通一丁目8-5
              </>
            ),
          },
          { label: "事業内容", value: "養育費管理アプリ事業" },
        ].map((row, index) => (
          <tr key={index}>
            <th
              style={{
                textAlign: "left",
                padding: "1.5rem",
                borderBottom: "2px solid #b1b1b1",
                backgroundColor: "#f9f9f9",
                color: "#555",
                fontWeight: "bold",
              }}
            >
              {row.label}
            </th>
            <td
              style={{
                textAlign: "left",
                padding: "1.5rem",
                borderBottom: "2px solid #b1b1b1",
                color: "#333",
              }}
            >
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

const MainContent = () => (
  <main>
    <HeroSection />
    <MissionVisionValue />
    <CompanyOverview />
  </main>
);

export default MainContent;
