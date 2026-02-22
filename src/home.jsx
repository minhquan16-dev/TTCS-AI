import "./home.css";

export default function Home({ onLogout, onNavigate }) {
  const menuItems = [
    { icon: "📚", title: "Khóa học", desc: "Khám phá các khóa học lập trình được hỗ trợ bởi AI", page: "courses" },
    { icon: "🗺️", title: "Lộ trình", desc: "Lộ trình học tập được cá nhân hóa theo mục tiêu của bạn", page: "roadmap" },
    { icon: "📊", title: "Dashboard", desc: "Theo dõi tiến độ và thống kê quá trình học tập", page: "dashboard" },
    { icon: "👤", title: "Hồ sơ", desc: "Quản lý thông tin cá nhân và chứng chỉ của bạn", page: "profile" },
  ];

  return (
    <div className="page">
      <nav className="navbar">
        <div className="navLogo">
          <span className="logoIcon">&lt;/&gt;</span>
          <span className="logoText">DevLearn AI</span>
        </div>
        <div className="navRight">
          <div className="avatar">DV</div>
          <button onClick={onLogout} className="logoutBtn">Đăng xuất</button>
        </div>
      </nav>

      <div className="hero">
        <p className="heroSub">// Xin chào, Developer 👋</p>
        <h1 className="heroTitle">Bạn muốn làm gì hôm nay?</h1>
        <p className="heroDesc">Chọn một mục bên dưới để bắt đầu hành trình học lập trình cùng AI.</p>
      </div>

      <div className="divider">
        <div className="dividerLine" />
        <span className="dividerText">// chọn mục</span>
        <div className="dividerLine" />
      </div>

      <div className="grid">
        {menuItems.map((item) => (
          <div key={item.title} className="card" onClick={() => onNavigate(item.page)}>
            <div className="cardIcon">{item.icon}</div>
            <h3 className="cardTitle">{item.title}</h3>
            <p className="cardDesc">{item.desc}</p>
            <span className="cardArrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}