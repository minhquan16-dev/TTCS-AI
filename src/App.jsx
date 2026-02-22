import { useState } from "react";
import RegisterPage from "./RegisterPage";
import "./App.css";
import Home from "./home";
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };
  const [page, setPage] = useState("login");

  if (page === "register") {
    return <RegisterPage onBackToLogin={() => setPage("login")} />;
  }
  if (page === "home"){
    return <Home onDangXuat={()=> setPage("home")} />;
  }
  return (
    <div className="page">
      <div className="card">
        {/* Logo / title */}
        <div className="logo">
          <span className="logoIcon">&lt;/&gt;</span>
          <span className="logoText">DevLogin</span>
        </div>

        <p className="subtitle">Chào mừng trở lại 👋</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form">
          <div className="field">
            <label className="label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="input"
            />
          </div>

          <div className="field">
            <label className="label">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="input"
            />
          </div>

          {error && <p className="error">{error}</p>}

          <div className="row">
            <label className="remember">
              <input type="checkbox" style={{ marginRight: 6 }} />
              Ghi nhớ đăng nhập
            </label>
            <a href="#" className="link">Quên mật khẩu?</a>
          </div>

          <button type="submit" className="btn" disabled={loading} onClick={()=>{setPage("home");}}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <p className="register">
          Chưa có tài khoản?{" "}
          <a href="#" className="link" onClick={(e) => { e.preventDefault(); setPage("register"); }}>
  Đăng ký ngay
</a>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d1117; }
        input:focus { outline: 2px solid #58a6ff; outline-offset: -1px; }
        button:hover:not(:disabled) { background: #388bfd !important; }
        button:disabled { opacity: 0.6; cursor: not-allowed; }
        a:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}

