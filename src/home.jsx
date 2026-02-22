export default function HomePage({ onLogout }) {
  const menuItems = [
    {
      icon: "📚",
      title: "Khóa học",
      desc: "Học lập trình từ cơ bản đến nâng cao",
      tag: "12 khóa học",
    },
    {
      icon: "🗺️",
      title: "Lộ trình",
      desc: "Lộ trình học tập được thiết kế sẵn cho bạn",
      tag: "5 lộ trình",
    },
    {
      icon: "📊",
      title: "Dashboard",
      desc: "Theo dõi tiến độ học tập của bạn",
      tag: "Cập nhật hôm nay",
    },
    {
      icon: "👤",
      title: "Hồ sơ",
      desc: "Quản lý thông tin cá nhân và chứng chỉ",
      tag: "Chỉnh sửa",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}>
          <span style={styles.logoIcon}>&lt;/&gt;</span>
          <span style={styles.logoText}>DevLogin</span>
        </div>

        <div style={styles.navLinks}>
          {["Khóa học", "Lộ trình", "Dashboard", "Hồ sơ"].map((item) => (
            <a key={item} href="#" style={styles.navLink}>
              {item}
            </a>
          ))}
        </div>

        <div style={styles.navRight}>
          <div style={styles.avatar}>DV</div>
          <button onClick={onLogout} style={styles.logoutBtn}>
            Đăng xuất
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div style={styles.hero}>
        <p style={styles.heroSub}>// Chào mừng trở lại 👋</p>
        <h1 style={styles.heroTitle}>Học lập trình,<br />làm chủ tương lai.</h1>
        <p style={styles.heroDesc}>
          Nền tảng học lập trình với lộ trình rõ ràng, bài tập thực tế và cộng đồng hỗ trợ.
        </p>
        <button style={styles.heroBtn}>Bắt đầu học →</button>
      </div>

      {/* Cards */}
      <div style={styles.grid}>
        {menuItems.map((item) => (
          <div key={item.title} style={styles.card}>
            <div style={styles.cardIcon}>{item.icon}</div>
            <div style={styles.cardTag}>{item.tag}</div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardDesc}>{item.desc}</p>
            <a href="#" style={styles.cardLink}>Xem thêm →</a>
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; }
        a:hover { opacity: 0.8; }
        button:hover { opacity: 0.85; }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0d1117",
    fontFamily: "'Fira Code', monospace",
    color: "#e6edf3",
  },

  // Navbar
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    height: 60,
    borderBottom: "1px solid #30363d",
    background: "#161b22",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  navLogo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  logoIcon: {
    fontSize: 18,
    color: "#58a6ff",
    fontWeight: "bold",
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e6edf3",
  },
  navLinks: {
    display: "flex",
    gap: 28,
  },
  navLink: {
    fontSize: 13,
    color: "#8b949e",
    cursor: "pointer",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#1f6feb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid #30363d",
    borderRadius: 6,
    padding: "5px 12px",
    color: "#8b949e",
    fontSize: 12,
    fontFamily: "'Fira Code', monospace",
    cursor: "pointer",
  },

  // Hero
  hero: {
    padding: "80px 40px 60px",
    maxWidth: 700,
    margin: "0 auto",
    textAlign: "center",
  },
  heroSub: {
    fontSize: 13,
    color: "#58a6ff",
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#e6edf3",
    lineHeight: 1.3,
    marginBottom: 16,
  },
  heroDesc: {
    fontSize: 14,
    color: "#8b949e",
    lineHeight: 1.8,
    marginBottom: 28,
  },
  heroBtn: {
    background: "#1f6feb",
    border: "none",
    borderRadius: 6,
    padding: "12px 28px",
    color: "#fff",
    fontSize: 14,
    fontFamily: "'Fira Code', monospace",
    cursor: "pointer",
  },

  // Grid cards
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
    padding: "0 40px 60px",
    maxWidth: 1100,
    margin: "0 auto",
  },
  card: {
    background: "#161b22",
    border: "1px solid #30363d",
    borderRadius: 8,
    padding: "24px 20px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    cursor: "pointer",
    transition: "border-color 0.2s",
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 4,
  },
  cardTag: {
    fontSize: 11,
    color: "#58a6ff",
    background: "rgba(88,166,255,0.1)",
    padding: "2px 8px",
    borderRadius: 4,
    width: "fit-content",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#e6edf3",
  },
  cardDesc: {
    fontSize: 12,
    color: "#8b949e",
    lineHeight: 1.6,
    flex: 1,
  },
  cardLink: {
    fontSize: 12,
    color: "#58a6ff",
    marginTop: 4,
  },
};