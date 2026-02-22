import { useState } from "react";

export default function RegisterPage({ onBackToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu nhập lại không khớp.");
      return;
    }

    setError("");
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>&lt;/&gt;</span>
          <span style={styles.logoText}>DevLogin</span>
        </div>

        <p style={styles.subtitle}>Tạo tài khoản mới 🚀</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Nhập lại mật khẩu</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                ...styles.input,
                borderColor:
                  confirmPassword && confirmPassword !== password
                    ? "#f85149"
                    : "#30363d",
              }}
            />
            {confirmPassword && confirmPassword !== password && (
              <span style={styles.hint}>Mật khẩu chưa khớp</span>
            )}
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.btn} disabled={loading}>
            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </button>
        </form>

        <p style={styles.footer}>
          Đã có tài khoản?{" "}
          <a href="#" style={styles.link} onClick={onBackToLogin}>
            Đăng nhập
          </a>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input:focus { outline: 2px solid #58a6ff; outline-offset: -1px; }
        button:hover:not(:disabled) { background: #388bfd !important; }
        button:disabled { opacity: 0.6; cursor: not-allowed; }
        a:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0d1117",
    fontFamily: "'Fira Code', monospace",
  },
  card: {
    width: 400,
    background: "#161b22",
    border: "1px solid #30363d",
    borderRadius: 8,
    padding: "36px 32px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
  },
  logoIcon: {
    fontSize: 22,
    color: "#58a6ff",
    fontWeight: "bold",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e6edf3",
  },
  subtitle: {
    fontSize: 13,
    color: "#8b949e",
    marginBottom: 24,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontSize: 13,
    color: "#cdd9e5",
  },
  input: {
    background: "#0d1117",
    border: "1px solid #30363d",
    borderRadius: 6,
    padding: "9px 12px",
    color: "#e6edf3",
    fontSize: 13,
    fontFamily: "'Fira Code', monospace",
  },
  hint: {
    fontSize: 11,
    color: "#f85149",
  },
  error: {
    fontSize: 12,
    color: "#f85149",
  },
  btn: {
    background: "#1f6feb",
    border: "none",
    borderRadius: 6,
    padding: "10px",
    color: "#fff",
    fontSize: 14,
    fontFamily: "'Fira Code', monospace",
    cursor: "pointer",
    transition: "background 0.15s",
    marginTop: 4,
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
    color: "#8b949e",
    textAlign: "center",
  },
  link: {
    color: "#58a6ff",
    fontSize: 12,
    textDecoration: "none",
  },
};