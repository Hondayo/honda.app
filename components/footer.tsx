const footerStyles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center" as const,
    padding: "1.5rem 1rem",
    fontSize: "0.9rem",
  },
  footerLinks: {
    marginBottom: "1rem",
  },
  footerLink: {
    color: "#ffffff",
    textDecoration: "none",
    margin: "0 1rem",
    fontSize: "1rem",
  },
  footerText: {
    margin: "0",
    fontSize: "0.8rem",
    color: "#ccc",
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.footerLinks}>
        <a
          href="https://jadohonda.netlify.app/terms.html"
          style={footerStyles.footerLink}
        >
          利用者情報の外部送信について
        </a>
        <a
          href="https://jadohonda.netlify.app/privacy-policy.html"
          style={footerStyles.footerLink}
        >
          プライバシーポリシー
        </a>
      </div>
      <p style={footerStyles.footerText}>&copy; 2024 JADO Inc.</p>
    </footer>
  );
};

export default Footer;
