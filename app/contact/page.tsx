"use client"; // クライアントコンポーネントとして設定

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      // ダミー送信処理
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section
      style={{
        margin: "4rem auto",
        maxWidth: "600px",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "#002c5f",
          fontWeight: "bold",
        }}
      >
        お問い合わせ
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="名前を入力してください"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="メールアドレスを入力してください"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="message"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="メッセージを入力してください"
            required
            rows={5}
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={formStatus === "submitting"}
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#2c8cf3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            cursor: formStatus === "submitting" ? "not-allowed" : "pointer",
          }}
        >
          {formStatus === "submitting" ? "送信中..." : "送信"}
        </button>

        {formStatus === "success" && (
          <p style={{ color: "green", textAlign: "center", marginTop: "1rem" }}>
            送信が成功しました！
          </p>
        )}
        {formStatus === "error" && (
          <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>
            送信に失敗しました。再度お試しください。
          </p>
        )}
      </form>
    </section>
  );
};

const MainContent = () => (
  <main>
    <ContactPage />
  </main>
);

export default MainContent;
