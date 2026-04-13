(() => {
  // Dynamically inject styles into the HTML document
  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --navy: #1a2456;
      --navy-dark: #111840;
      --navy-mid: #243066;
      --blue: #2d3d9e;
      --blue-light: #3d52c4;
      --accent: #f0c43f;
      --accent-dark: #d4a820;
      --white: #ffffff;
      --off-white: #f4f6fb;
      --gray-50: #f8f9fc;
      --gray-100: #eef0f7;
      --gray-200: #dde1ef;
      --gray-300: #c3c9dd;
      --gray-500: #7a83a6;
      --gray-700: #3d4566;
      --green: #22c55e;
      --green-light: #dcfce7;
      --red: #ef4444;
      --red-light: #fee2e2;
      --orange: #f97316;
      --orange-light: #ffedd5;
      --purple: #8b5cf6;
      --shadow-sm: 0 1px 3px rgba(26,36,86,.08), 0 1px 2px rgba(26,36,86,.04);
      --shadow: 0 4px 16px rgba(26,36,86,.1), 0 1px 4px rgba(26,36,86,.06);
      --shadow-lg: 0 12px 40px rgba(26,36,86,.14), 0 4px 12px rgba(26,36,86,.08);
      --radius: 12px;
      --radius-sm: 8px;
      --radius-lg: 18px;
      --radius-xl: 24px;
      --font: 'DM Sans', sans-serif;
      --font-display: 'DM Serif Display', serif;
    }

    html, body { height: 100%; font-family: var(--font); background: var(--off-white); color: var(--navy-dark); }

    #app { display: flex; height: 100vh; overflow: hidden; }

    /* ── SIDEBAR ── */
    #sidebar {
      width: 240px; min-width: 240px; background: var(--navy-dark);
      display: flex; flex-direction: column; height: 100vh; overflow-y: auto;
      transition: width .25s; z-index: 100;
    }
    #sidebar::-webkit-scrollbar { width: 4px; }
    #sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,.15); border-radius: 4px; }
    .sidebar-logo {
      padding: 22px 20px 18px;
      border-bottom: 1px solid rgba(255,255,255,.08);
      display: flex; align-items: center; gap: 10px;
    }
    .sidebar-logo-icon {
      width: 36px; height: 36px; background: var(--accent);
      border-radius: 10px; display: flex; align-items: center; justify-content: center;
      font-size: 18px; flex-shrink: 0;
    }
    .sidebar-logo-text { color: var(--white); }
    .sidebar-logo-text strong { display: block; font-size: 14px; font-weight: 700; letter-spacing: .3px; }
    .sidebar-logo-text span { font-size: 10px; color: rgba(255,255,255,.45); letter-spacing: .5px; text-transform: uppercase; }

    .sidebar-section { padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,.06); }
    .sidebar-section:last-child { border-bottom: none; }
    .sidebar-section-label {
      padding: 4px 18px 8px; font-size: 9.5px; font-weight: 600;
      letter-spacing: 1.2px; text-transform: uppercase; color: rgba(255,255,255,.3);
    }
    .nav-item {
      display: flex; align-items: center; gap: 10px;
      padding: 9px 18px; margin: 1px 8px; border-radius: var(--radius-sm);
      cursor: pointer; color: rgba(255,255,255,.6); font-size: 13.5px; font-weight: 450;
      transition: all .18s; position: relative;
    }
    .nav-item:hover { background: rgba(255,255,255,.07); color: rgba(255,255,255,.9); }
    .nav-item.active { background: rgba(255,255,255,.12); color: var(--white); font-weight: 600; }
    .nav-item.active::before {
      content: ''; position: absolute; left: -8px; top: 50%; transform: translateY(-50%);
      width: 3px; height: 60%; background: var(--accent); border-radius: 2px;
    }
    .nav-icon { font-size: 16px; width: 20px; text-align: center; }
    .nav-badge {
      margin-left: auto; background: var(--accent); color: var(--navy-dark);
      font-size: 10px; font-weight: 700; padding: 1px 7px; border-radius: 20px; min-width: 20px; text-align: center;
    }

    .sidebar-user {
      margin-top: auto; padding: 14px 16px;
      border-top: 1px solid rgba(255,255,255,.08);
      display: flex; align-items: center; gap: 10px; cursor: pointer;
    }
    .sidebar-user:hover { background: rgba(255,255,255,.05); }
    .sidebar-avatar {
      width: 34px; height: 34px; border-radius: 50%;
      background: var(--blue-light); display: flex; align-items: center;
      justify-content: center; color: white; font-weight: 700; font-size: 13px;
      flex-shrink: 0; overflow: hidden;
    }
    .sidebar-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .sidebar-user-info { flex: 1; min-width: 0; }
    .sidebar-user-info strong { display: block; font-size: 12.5px; color: var(--white); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .sidebar-user-info span { font-size: 11px; color: rgba(255,255,255,.4); }

    /* ── MAIN CONTENT ── */
    #main {
      flex: 1; display: flex; flex-direction: column; overflow: hidden; min-width: 0;
    }

    /* ── TOP BAR ── */
    #topbar {
      height: 60px; background: var(--white); border-bottom: 1px solid var(--gray-100);
      display: flex; align-items: center; padding: 0 28px; gap: 16px; flex-shrink: 0;
      box-shadow: var(--shadow-sm);
    }
    .topbar-title { font-size: 18px; font-weight: 700; color: var(--navy-dark); font-family: var(--font-display); }
    .topbar-subtitle { font-size: 12px; color: var(--gray-500); margin-top: 1px; }
    .topbar-search {
      margin-left: auto; display: flex; align-items: center; gap: 8px;
      background: var(--gray-50); border: 1.5px solid var(--gray-100); border-radius: 30px;
      padding: 7px 14px; width: 220px; transition: all .2s;
    }
    .topbar-search:focus-within { border-color: var(--blue-light); background: white; width: 260px; }
    .topbar-search input { border: none; background: transparent; outline: none; font-family: var(--font); font-size: 13px; color: var(--navy-dark); width: 100%; }
    .topbar-search input::placeholder { color: var(--gray-500); }
    .topbar-actions { display: flex; align-items: center; gap: 8px; }
    .topbar-btn {
      width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center;
      justify-content: center; cursor: pointer; background: var(--gray-50);
      border: 1.5px solid var(--gray-100); font-size: 16px; position: relative;
      transition: all .18s; color: var(--gray-700);
    }
    .topbar-btn:hover { background: var(--gray-100); border-color: var(--gray-200); }
    .topbar-badge {
      position: absolute; top: 2px; right: 2px; width: 8px; height: 8px;
      background: var(--accent); border-radius: 50%; border: 2px solid white;
    }

    /* ── PAGE CONTENT ── */
    #page-content { flex: 1; overflow-y: auto; padding: 28px; }
    #page-content::-webkit-scrollbar { width: 6px; }
    #page-content::-webkit-scrollbar-thumb { background: var(--gray-200); border-radius: 4px; }

    .screen { display: none; animation: fadeIn .25s ease; }
    .screen.active { display: block; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    /* ── FULL PAGE SCREENS (login, verify) ── */
    .full-screen {
      position: fixed; inset: 0; z-index: 1000; display: none;
      background: linear-gradient(135deg, var(--navy-dark) 0%, var(--blue) 100%);
      align-items: center; justify-content: center;
    }
    .full-screen.active { display: flex; }

    /* ─── LOGIN ──────────────────────────────────────────────────────────────── */
    .login-card {
      background: white; border-radius: var(--radius-xl); padding: 44px 40px;
      width: 440px; max-width: calc(100vw - 40px); box-shadow: var(--shadow-lg);
      animation: cardSlide .35s cubic-bezier(.22,1,.36,1);
    }
    @keyframes cardSlide { from { opacity: 0; transform: translateY(20px) scale(.97); } to { opacity: 1; transform: none; } }
    .login-logo {
      width: 64px; height: 64px; background: linear-gradient(135deg, var(--blue), var(--navy));
      border-radius: 18px; margin: 0 auto 20px; display: flex; align-items: center;
      justify-content: center; font-size: 30px; box-shadow: 0 8px 24px rgba(45,61,158,.35);
    }
    .login-title { font-family: var(--font-display); font-size: 26px; color: var(--navy-dark); text-align: center; margin-bottom: 4px; }
    .login-sub { text-align: center; color: var(--gray-500); font-size: 13.5px; margin-bottom: 28px; }

    .form-group { margin-bottom: 18px; }
    .form-label { display: block; font-size: 12.5px; font-weight: 600; color: var(--navy-dark); margin-bottom: 7px; letter-spacing: .2px; }
    .form-control {
      width: 100%; border: 1.5px solid var(--gray-200); border-radius: var(--radius-sm);
      padding: 10px 14px; font-family: var(--font); font-size: 13.5px; color: var(--navy-dark);
      background: var(--gray-50); outline: none; transition: all .18s;
      display: flex; align-items: center; position: relative;
    }
    .form-control input { border: none; background: transparent; outline: none; font-family: var(--font); font-size: 13.5px; color: var(--navy-dark); width: 100%; }
    .form-control:focus-within { border-color: var(--blue-light); background: white; box-shadow: 0 0 0 3px rgba(45,61,158,.08); }
    .input-icon { color: var(--gray-500); margin-right: 8px; font-size: 15px; flex-shrink: 0; }
    .input-right { margin-left: auto; color: var(--gray-500); cursor: pointer; font-size: 15px; }
    .input-right.valid { color: var(--green); }
    .forgot-link { text-align: right; margin-top: -8px; margin-bottom: 20px; }
    .forgot-link a { font-size: 12.5px; color: var(--blue-light); text-decoration: none; font-weight: 500; }
    .forgot-link a:hover { text-decoration: underline; }

    .btn {
      width: 100%; padding: 12px; border: none; border-radius: var(--radius-sm);
      font-family: var(--font); font-size: 14px; font-weight: 600; cursor: pointer;
      transition: all .2s; display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    .btn-primary { background: var(--navy); color: white; }
    .btn-primary:hover { background: var(--navy-mid); box-shadow: 0 4px 14px rgba(26,36,86,.3); transform: translateY(-1px); }
    .btn-primary:active { transform: none; box-shadow: none; }
    .btn-outline { background: transparent; border: 1.5px solid var(--gray-200); color: var(--navy-dark); }
    .btn-outline:hover { border-color: var(--blue-light); background: var(--gray-50); }
    .btn-danger { background: var(--red); color: white; }
    .btn-success { background: var(--green); color: white; }

    .login-footer { text-align: center; margin-top: 22px; font-size: 13px; color: var(--gray-500); }
    .login-footer a { color: var(--blue-light); font-weight: 600; text-decoration: none; }

    /* ─── VERIFICATION ───────────────────────────────────────────────────────── */
    .verify-card {
      background: white; border-radius: var(--radius-xl); width: 560px;
      max-width: calc(100vw - 40px); max-height: calc(100vh - 40px);
      overflow-y: auto; box-shadow: var(--shadow-lg);
      animation: cardSlide .35s cubic-bezier(.22,1,.36,1);
    }
    .verify-header {
      background: var(--navy-dark); padding: 18px 28px;
      display: flex; align-items: center; gap: 12px; border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    }
    .verify-header h2 { color: white; font-size: 16px; font-weight: 700; }
    .back-btn { color: rgba(255,255,255,.7); cursor: pointer; font-size: 18px; padding: 2px; transition: color .15s; }
    .back-btn:hover { color: white; }
    .verify-body { padding: 28px; }

    .step-indicator { display: flex; align-items: center; gap: 0; margin-bottom: 24px; }
    .step-tab {
      flex: 1; text-align: center; font-size: 12.5px; font-weight: 600;
      padding-bottom: 10px; border-bottom: 2.5px solid var(--gray-200);
      color: var(--gray-500); transition: all .2s; cursor: default;
    }
    .step-tab.active { color: var(--blue); border-bottom-color: var(--blue); }
    .step-tab.done { color: var(--green); border-bottom-color: var(--green); }
    .step-label { font-size: 11px; color: var(--gray-500); text-align: center; margin-bottom: 18px; }
    .step-title { font-family: var(--font-display); font-size: 22px; color: var(--navy-dark); margin-bottom: 4px; }
    .step-desc { font-size: 13px; color: var(--gray-500); margin-bottom: 24px; line-height: 1.6; }

    .select-control {
      width: 100%; border: 1.5px solid var(--gray-200); border-radius: var(--radius-sm);
      padding: 10px 14px; font-family: var(--font); font-size: 13.5px; color: var(--navy-dark);
      background: var(--gray-50); outline: none; transition: all .18s; appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%237a83a6' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
      background-repeat: no-repeat; background-position: right 14px center;
    }
    .select-control:focus { border-color: var(--blue-light); background-color: white; box-shadow: 0 0 0 3px rgba(45,61,158,.08); }

    .upload-zone {
      border: 2px dashed var(--gray-200); border-radius: var(--radius);
      padding: 32px 20px; text-align: center; cursor: pointer; transition: all .2s;
      background: var(--gray-50);
    }
    .upload-zone:hover { border-color: var(--blue-light); background: #eef2ff; }
    .upload-icon { font-size: 28px; margin-bottom: 8px; }
    .upload-zone p { font-size: 13.5px; font-weight: 600; color: var(--navy-dark); }
    .upload-zone span { font-size: 12px; color: var(--gray-500); }

    .review-card { background: var(--gray-50); border-radius: var(--radius); padding: 18px; margin-bottom: 16px; border: 1px solid var(--gray-100); }
    .review-section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .review-section-label { font-size: 10.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--gray-500); }
    .review-edit-btn { font-size: 12.5px; color: var(--blue-light); cursor: pointer; font-weight: 600; background: none; border: none; }
    .review-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; font-size: 13px; border-bottom: 1px solid var(--gray-100); }
    .review-row:last-child { border-bottom: none; }
    .review-key { color: var(--gray-500); }
    .review-val { font-weight: 600; color: var(--navy-dark); }

    .file-preview {
      display: flex; align-items: center; gap: 12px; background: white;
      border: 1.5px dashed var(--gray-200); border-radius: var(--radius-sm);
      padding: 12px 16px; margin-top: 8px;
    }
    .file-icon { font-size: 22px; color: var(--blue); }
    .file-info { flex: 1; }
    .file-info strong { display: block; font-size: 13px; color: var(--navy-dark); }
    .file-info span { font-size: 11.5px; color: var(--gray-500); }
    .file-check { color: var(--green); font-size: 18px; }

    .confirm-check { display: flex; align-items: flex-start; gap: 10px; margin: 16px 0; }
    .confirm-check input[type=checkbox] { margin-top: 2px; accent-color: var(--blue); width: 15px; height: 15px; flex-shrink: 0; }
    .confirm-check label { font-size: 13px; color: var(--gray-700); line-height: 1.5; }

    /* ─── DASHBOARD ──────────────────────────────────────────────────────────── */
    .dash-hero {
      background: linear-gradient(135deg, var(--navy-dark) 0%, var(--blue) 100%);
      border-radius: var(--radius-lg); padding: 24px 28px; margin-bottom: 24px;
      display: flex; align-items: center; justify-content: space-between; color: white;
      position: relative; overflow: hidden;
    }
    .dash-hero::before {
      content: ''; position: absolute; right: -40px; top: -40px;
      width: 200px; height: 200px; background: rgba(255,255,255,.04);
      border-radius: 50%;
    }
    .dash-hero::after {
      content: ''; position: absolute; right: 60px; bottom: -60px;
      width: 150px; height: 150px; background: rgba(255,255,255,.03); border-radius: 50%;
    }
    .dash-welcome small { font-size: 12px; opacity: .65; display: block; margin-bottom: 2px; }
    .dash-welcome h2 { font-size: 22px; font-weight: 700; margin-bottom: 8px; }
    .dash-welcome p { font-size: 13px; opacity: .7; max-width: 360px; line-height: 1.5; }
    .dash-hero-avatar {
      width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,.15);
      display: flex; align-items: center; justify-content: center; font-size: 24px;
      border: 2.5px solid rgba(255,255,255,.3); flex-shrink: 0;
    }

    .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
    .section-title { font-size: 15px; font-weight: 700; color: var(--navy-dark); }
    .see-all { font-size: 12.5px; color: var(--blue-light); cursor: pointer; font-weight: 600; background: none; border: none; }
    .see-all:hover { text-decoration: underline; }

    .events-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; margin-bottom: 28px; }
    .event-card {
      background: white; border-radius: var(--radius); overflow: hidden;
      box-shadow: var(--shadow-sm); transition: all .2s; cursor: pointer; border: 1px solid var(--gray-100);
    }
    .event-card:hover { box-shadow: var(--shadow); transform: translateY(-2px); }
    .event-card-img {
      height: 130px; background: linear-gradient(135deg, var(--navy) 0%, var(--blue-light) 100%);
      position: relative; overflow: hidden; display: flex; align-items: flex-end; padding: 10px;
    }
    .event-date-badge {
      position: absolute; top: 10px; right: 10px; background: var(--accent);
      color: var(--navy-dark); border-radius: 8px; padding: 4px 8px; text-align: center;
      font-weight: 800; font-size: 13px; line-height: 1.1;
    }
    .event-date-badge span { display: block; font-size: 9.5px; font-weight: 600; text-transform: uppercase; }
    .event-seats-tag {
      background: rgba(239,68,68,.9); color: white; font-size: 10px; font-weight: 700;
      padding: 3px 8px; border-radius: 20px; display: flex; align-items: center; gap: 4px;
    }
    .event-card-body { padding: 14px; }
    .event-card-title { font-size: 13.5px; font-weight: 700; color: var(--navy-dark); margin-bottom: 6px; }
    .event-card-meta { display: flex; flex-direction: column; gap: 3px; }
    .event-meta-row { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--gray-500); }
    .event-card-footer {
      padding: 10px 14px; border-top: 1px solid var(--gray-100);
      display: flex; align-items: center; justify-content: space-between;
    }
    .attendee-stack { display: flex; }
    .attendee-dot {
      width: 22px; height: 22px; border-radius: 50%; border: 2px solid white;
      background: var(--blue-light); margin-left: -6px; font-size: 9px;
      display: flex; align-items: center; justify-content: center; color: white; font-weight: 700;
    }
    .attendee-dot:first-child { margin-left: 0; }
    .attendee-dot.count { background: var(--gray-200); color: var(--gray-700); font-size: 8px; }
    .book-btn {
      font-size: 12px; font-weight: 600; color: var(--blue); background: none;
      border: none; cursor: pointer; padding: 0;
    }
    .book-btn:hover { text-decoration: underline; }

    .quick-actions { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 12px; margin-bottom: 28px; }
    .quick-card {
      background: white; border-radius: var(--radius); padding: 18px 14px; text-align: center;
      cursor: pointer; border: 1.5px solid var(--gray-100); transition: all .2s;
    }
    .quick-card:hover { border-color: var(--blue-light); box-shadow: var(--shadow-sm); transform: translateY(-2px); }
    .quick-card-icon { font-size: 24px; margin-bottom: 8px; }
    .quick-card-label { font-size: 12.5px; font-weight: 600; color: var(--navy-dark); }

    .feed-list { display: flex; flex-direction: column; gap: 14px; }
    .feed-item {
      background: white; border-radius: var(--radius); padding: 18px;
      box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100);
    }
    .feed-header { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; }
    .feed-avatar {
      width: 38px; height: 38px; border-radius: 50%; background: var(--blue);
      display: flex; align-items: center; justify-content: center;
      color: white; font-size: 14px; font-weight: 700; flex-shrink: 0; overflow: hidden;
    }
    .feed-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .feed-meta strong { display: block; font-size: 13.5px; font-weight: 700; color: var(--navy-dark); }
    .feed-meta span { font-size: 11.5px; color: var(--gray-500); }
    .feed-dots { margin-left: auto; color: var(--gray-500); font-size: 18px; cursor: pointer; }
    .feed-verified { display: inline-block; width: 14px; height: 14px; background: var(--blue); border-radius: 50%; text-align: center; line-height: 14px; font-size: 8px; color: white; margin-left: 3px; }
    .feed-body { font-size: 13.5px; color: var(--gray-700); line-height: 1.6; margin-bottom: 10px; }
    .feed-img { width: 100%; height: 180px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 12px; background: linear-gradient(135deg, var(--navy) 0%, var(--blue-light) 100%); overflow: hidden; }
    .feed-img-placeholder { width: 100%; height: 180px; background: linear-gradient(135deg, #1a2456 0%, #3d52c4 100%); border-radius: var(--radius-sm); margin-bottom: 12px; display: flex; align-items: center; justify-content: center; font-size: 48px; }
    .feed-actions { display: flex; align-items: center; gap: 16px; padding-top: 10px; border-top: 1px solid var(--gray-100); }
    .feed-action-btn { display: flex; align-items: center; gap: 5px; font-size: 13px; color: var(--gray-500); cursor: pointer; background: none; border: none; font-family: var(--font); padding: 0; transition: color .15s; }
    .feed-action-btn:hover { color: var(--blue); }
    .cta-btn {
      display: inline-block; margin-top: 8px; background: var(--navy); color: white;
      padding: 8px 18px; border-radius: var(--radius-sm); font-size: 13px; font-weight: 600;
      cursor: pointer; border: none; font-family: var(--font); transition: background .2s;
    }
    .cta-btn:hover { background: var(--navy-mid); }

    /* ─── DIRECTORY ──────────────────────────────────────────────────────────── */
    .dir-toolbar {
      background: white; border-radius: var(--radius); padding: 16px;
      margin-bottom: 18px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100);
    }
    .dir-search {
      display: flex; align-items: center; gap: 10px; background: var(--gray-50);
      border: 1.5px solid var(--gray-200); border-radius: var(--radius-sm);
      padding: 10px 14px; margin-bottom: 12px; transition: all .2s;
    }
    .dir-search:focus-within { border-color: var(--blue-light); background: white; }
    .dir-search input { border: none; background: transparent; outline: none; font-family: var(--font); font-size: 13.5px; color: var(--navy-dark); width: 100%; }
    .dir-filters { display: flex; gap: 8px; flex-wrap: wrap; }
    .filter-chip {
      display: flex; align-items: center; gap: 6px; padding: 6px 12px;
      border: 1.5px solid var(--gray-200); border-radius: 20px; font-size: 12.5px;
      font-weight: 500; color: var(--gray-700); cursor: pointer; background: white;
      font-family: var(--font); transition: all .18s;
    }
    .filter-chip:hover { border-color: var(--blue); color: var(--blue); }
    .filter-chip.active { background: var(--navy); color: white; border-color: var(--navy); }
    .filter-chip .chip-x { font-size: 11px; opacity: .6; }
    .dir-count { font-size: 12.5px; color: var(--gray-500); margin-bottom: 14px; font-weight: 500; }

    .alumni-cards { display: flex; flex-direction: column; gap: 12px; }
    .alumni-card {
      background: white; border-radius: var(--radius); padding: 18px;
      box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); transition: all .2s;
    }
    .alumni-card:hover { box-shadow: var(--shadow); }
    .alumni-card-top { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 12px; }
    .alumni-photo {
      width: 52px; height: 52px; border-radius: 50%; background: var(--blue);
      flex-shrink: 0; overflow: hidden; display: flex; align-items: center;
      justify-content: center; color: white; font-weight: 700; font-size: 18px;
      position: relative;
    }
    .alumni-photo img { width: 100%; height: 100%; object-fit: cover; }
    .online-dot {
      position: absolute; bottom: 2px; right: 2px; width: 11px; height: 11px;
      background: var(--green); border-radius: 50%; border: 2px solid white;
    }
    .alumni-info { flex: 1; }
    .alumni-name { font-size: 15px; font-weight: 700; color: var(--navy-dark); display: flex; align-items: center; gap: 6px; }
    .alumni-class { font-size: 12px; color: var(--blue); font-weight: 600; }
    .verified-badge {
      background: var(--blue); color: white; font-size: 9px; font-weight: 700;
      padding: 2px 6px; border-radius: 20px; letter-spacing: .3px;
    }
    .save-btn { color: var(--gray-300); cursor: pointer; font-size: 18px; transition: color .15s; margin-left: auto; }
    .save-btn:hover { color: var(--navy); }
    .save-btn.saved { color: var(--navy); }
    .alumni-details { display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; }
    .alumni-detail-row { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--gray-500); }
    .alumni-detail-row span:first-child { font-size: 14px; }
    .alumni-card-actions { display: flex; gap: 8px; }
    .btn-sm {
      padding: 7px 16px; font-size: 12.5px; font-weight: 600; border-radius: var(--radius-sm);
      cursor: pointer; transition: all .18s; border: none; font-family: var(--font);
    }
    .btn-sm-primary { background: var(--navy); color: white; }
    .btn-sm-primary:hover { background: var(--navy-mid); }
    .btn-sm-outline { background: white; color: var(--navy-dark); border: 1.5px solid var(--gray-200); }
    .btn-sm-outline:hover { border-color: var(--navy); }
    .btn-sm-ghost { background: var(--gray-100); color: var(--gray-700); }
    .btn-sm-ghost:hover { background: var(--gray-200); }
    .btn-sm-pending { background: var(--gray-100); color: var(--gray-500); cursor: default; }

    /* ─── EVENTS LIST ────────────────────────────────────────────────────────── */
    .events-toolbar { background: white; border-radius: var(--radius); padding: 16px; margin-bottom: 18px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); }
    .event-filters { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; }
    .event-filter-btn {
      padding: 6px 14px; border-radius: 20px; font-size: 12.5px; font-weight: 600;
      cursor: pointer; border: 1.5px solid var(--gray-200); background: white;
      color: var(--gray-700); font-family: var(--font); transition: all .18s;
    }
    .event-filter-btn.active { background: var(--navy); color: white; border-color: var(--navy); }
    .time-group { margin-bottom: 24px; }
    .time-label { font-size: 10.5px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: var(--gray-500); margin-bottom: 12px; }
    .event-list-hero {
      background: white; border-radius: var(--radius-lg); overflow: hidden;
      margin-bottom: 12px; box-shadow: var(--shadow); cursor: pointer; border: 1px solid var(--gray-100);
      transition: all .2s;
    }
    .event-list-hero:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); }
    .event-hero-img {
      height: 160px; background: linear-gradient(135deg, var(--navy) 0%, var(--blue-light) 100%);
      position: relative; display: flex; align-items: flex-end; padding: 12px;
    }
    .event-compact {
      background: white; border-radius: var(--radius); padding: 14px 16px;
      display: flex; gap: 14px; align-items: flex-start; margin-bottom: 8px;
      box-shadow: var(--shadow-sm); cursor: pointer; border: 1px solid var(--gray-100);
      transition: all .2s;
    }
    .event-compact:hover { box-shadow: var(--shadow); }
    .event-compact-date {
      background: var(--navy); color: white; border-radius: 8px; padding: 6px 8px;
      text-align: center; min-width: 44px; flex-shrink: 0;
    }
    .event-compact-date .month { font-size: 10px; font-weight: 700; text-transform: uppercase; opacity: .8; }
    .event-compact-date .day { font-size: 18px; font-weight: 800; line-height: 1; }
    .event-compact-body { flex: 1; }
    .event-compact-title { font-size: 13.5px; font-weight: 700; color: var(--navy-dark); margin-bottom: 4px; }
    .event-compact-meta { font-size: 12px; color: var(--gray-500); display: flex; flex-direction: column; gap: 2px; }
    .event-tag { display: inline-flex; align-items: center; gap: 4px; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 600; }
    .tag-seats { background: rgba(249,115,22,.1); color: var(--orange); }
    .tag-online { background: var(--green-light); color: #16a34a; }
    .tag-waitlist { background: var(--red-light); color: var(--red); }
    .tag-match { background: rgba(249,115,22,.1); color: var(--orange); font-size: 10.5px; }

    /* ─── EVENT DETAIL ───────────────────────────────────────────────────────── */
    .event-detail-hero {
      border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 24px;
      box-shadow: var(--shadow); position: relative;
      background: linear-gradient(135deg, var(--navy) 0%, var(--blue-light) 100%);
      min-height: 200px; display: flex; flex-direction: column; justify-content: flex-end;
    }
    .event-detail-overlay { padding: 20px; background: linear-gradient(to top, rgba(0,0,0,.7), transparent); }
    .event-detail-tags { display: flex; gap: 6px; margin-bottom: 8px; }
    .event-detail-tag { background: rgba(255,255,255,.2); color: white; font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 20px; letter-spacing: .5px; text-transform: uppercase; }
    .event-detail-title { font-family: var(--font-display); font-size: 22px; color: white; }
    .event-detail-grid { display: grid; grid-template-columns: 1fr 320px; gap: 24px; align-items: start; }
    @media (max-width: 900px) { .event-detail-grid { grid-template-columns: 1fr; } }
    .detail-card { background: white; border-radius: var(--radius); padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); margin-bottom: 16px; }
    .detail-meta-item { display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--gray-100); }
    .detail-meta-item:last-child { border-bottom: none; }
    .detail-meta-icon { font-size: 18px; color: var(--blue); margin-top: 2px; }
    .detail-meta-text strong { display: block; font-size: 13.5px; color: var(--navy-dark); }
    .detail-meta-text span { font-size: 12.5px; color: var(--gray-500); }
    .detail-meta-link { font-size: 12.5px; color: var(--blue-light); cursor: pointer; }
    .about-text { font-size: 13.5px; color: var(--gray-700); line-height: 1.7; }
    .hashtag { color: var(--blue-light); font-weight: 500; }
    .speakers-row { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 12px; }
    .speaker-item { text-align: center; width: 65px; }
    .speaker-photo { width: 48px; height: 48px; border-radius: 50%; background: var(--blue); margin: 0 auto 6px; overflow: hidden; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 16px; }
    .speaker-name { font-size: 11px; font-weight: 600; color: var(--navy-dark); }
    .speaker-role { font-size: 10px; color: var(--gray-500); }
    .agenda-list { display: flex; flex-direction: column; gap: 0; position: relative; padding-left: 22px; }
    .agenda-list::before { content: ''; position: absolute; left: 7px; top: 10px; bottom: 10px; width: 2px; background: var(--gray-200); }
    .agenda-item { position: relative; padding: 10px 0 10px 12px; }
    .agenda-dot { position: absolute; left: -18px; top: 14px; width: 10px; height: 10px; border-radius: 50%; background: var(--blue); border: 2px solid white; box-shadow: 0 0 0 2px var(--blue); }
    .agenda-time { font-size: 12px; color: var(--blue); font-weight: 600; margin-bottom: 3px; }
    .agenda-title { font-size: 13.5px; font-weight: 700; color: var(--navy-dark); }
    .agenda-desc { font-size: 12px; color: var(--gray-500); margin-top: 2px; }
    .ticket-card {
      background: var(--navy-dark); color: white; border-radius: var(--radius);
      padding: 20px; text-align: center; position: sticky; top: 0;
    }
    .ticket-price { font-size: 28px; font-weight: 800; color: var(--accent); }
    .ticket-price small { font-size: 13px; color: rgba(255,255,255,.5); font-weight: 400; }
    .ticket-seats { font-size: 12.5px; color: rgba(255,255,255,.6); margin-bottom: 16px; }
    .btn-register {
      width: 100%; padding: 13px; background: var(--blue-light); color: white;
      border: none; border-radius: var(--radius-sm); font-family: var(--font);
      font-size: 14px; font-weight: 700; cursor: pointer; transition: all .2s;
    }
    .btn-register:hover { background: var(--blue); }
    .map-placeholder {
      width: 100%; height: 120px; background: var(--gray-100); border-radius: var(--radius-sm);
      display: flex; align-items: center; justify-content: center; font-size: 32px;
      margin-top: 12px; border: 1px solid var(--gray-200);
    }

    /* ─── TICKET CONFIRMATION ────────────────────────────────────────────────── */
    .ticket-confirm-wrap { max-width: 560px; margin: 0 auto; }
    .ticket-confirm-header { text-align: center; margin-bottom: 24px; }
    .success-circle {
      width: 64px; height: 64px; background: var(--green-light); border-radius: 50%;
      display: flex; align-items: center; justify-content: center; font-size: 28px;
      margin: 0 auto 14px; border: 2px solid rgba(34,197,94,.3);
    }
    .ticket-confirm-title { font-family: var(--font-display); font-size: 24px; color: var(--navy-dark); }
    .ticket-confirm-sub { color: var(--gray-500); font-size: 13.5px; margin-top: 4px; }
    .ticket-wrapper {
      background: white; border-radius: var(--radius-lg); overflow: hidden;
      box-shadow: var(--shadow-lg); border: 1px solid var(--gray-100); margin-bottom: 16px;
    }
    .ticket-event-banner {
      padding: 18px; background: linear-gradient(135deg, var(--navy) 0%, var(--blue-light) 100%);
      color: white; position: relative;
    }
    .ticket-confirmed-tag {
      background: var(--green); color: white; font-size: 10px; font-weight: 700;
      padding: 3px 9px; border-radius: 20px; display: inline-block; margin-bottom: 8px;
      letter-spacing: .5px;
    }
    .ticket-event-name { font-family: var(--font-display); font-size: 18px; }
    .ticket-event-venue { font-size: 12px; opacity: .75; margin-top: 3px; }
    .ticket-details-grid { padding: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .ticket-detail-item label { display: block; font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .8px; color: var(--gray-500); margin-bottom: 3px; }
    .ticket-detail-item strong { font-size: 14px; color: var(--navy-dark); display: flex; align-items: center; gap: 6px; }
    .qr-section {
      padding: 20px; border-top: 1px dashed var(--gray-200); text-align: center;
      background: var(--gray-50);
    }
    .qr-code {
      width: 120px; height: 120px; background: white; border-radius: var(--radius-sm);
      margin: 0 auto 10px; display: flex; align-items: center; justify-content: center;
      font-size: 8px; color: var(--navy-dark); border: 1px solid var(--gray-200);
      padding: 10px; overflow: hidden;
    }
    .qr-svg { width: 100%; height: 100%; }
    .qr-label { font-size: 12px; color: var(--gray-500); margin-bottom: 4px; }
    .qr-id { font-size: 11px; font-weight: 700; letter-spacing: 1px; color: var(--navy-dark); }
    .ticket-actions-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 14px 18px; border-top: 1px solid var(--gray-100); }
    .ticket-action-btn {
      padding: 10px 14px; border-radius: var(--radius-sm); display: flex;
      align-items: center; justify-content: center; gap: 8px; font-size: 13px;
      font-weight: 600; cursor: pointer; transition: all .18s; border: none; font-family: var(--font);
    }
    .ticket-action-btn.calendar { background: var(--gray-100); color: var(--navy-dark); }
    .ticket-action-btn.save { background: var(--navy); color: white; }
    .ticket-action-btn:hover { opacity: .9; }
    .ticket-notice {
      background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-sm);
      padding: 12px 16px; display: flex; gap: 10px; align-items: flex-start; font-size: 13px; color: var(--navy-dark);
    }
    .notice-icon { font-size: 16px; color: var(--blue); flex-shrink: 0; margin-top: 1px; }

    /* ─── CHECK-IN SUCCESS ───────────────────────────────────────────────────── */
    .checkin-wrap {
      max-width: 420px; margin: 0 auto; text-align: center;
      padding: 20px;
    }
    .checkin-icon {
      width: 80px; height: 80px; background: var(--navy); border-radius: 50%;
      display: flex; align-items: center; justify-content: center; font-size: 36px;
      margin: 0 auto 18px; box-shadow: 0 8px 24px rgba(26,36,86,.3);
      position: relative;
    }
    .checkin-star {
      position: absolute; top: -6px; right: -6px; width: 24px; height: 24px;
      background: var(--accent); border-radius: 50%; display: flex; align-items: center;
      justify-content: center; font-size: 12px; border: 2px solid white;
    }
    .checkin-title { font-family: var(--font-display); font-size: 26px; color: var(--navy-dark); margin-bottom: 6px; }
    .checkin-sub { color: var(--gray-500); font-size: 14px; line-height: 1.6; margin-bottom: 24px; }
    .badge-card {
      background: white; border-radius: var(--radius-lg); padding: 28px 20px;
      box-shadow: var(--shadow-lg); margin-bottom: 20px; position: relative; overflow: hidden;
      border: 1px solid var(--gray-100);
    }
    .badge-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, var(--accent), var(--orange));
    }
    .badge-unlocked-label { font-size: 10px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: var(--gray-500); margin-bottom: 14px; }
    .badge-icon-big {
      width: 80px; height: 80px; background: var(--accent); border-radius: 50%;
      display: flex; align-items: center; justify-content: center; font-size: 36px;
      margin: 0 auto 12px; box-shadow: 0 4px 20px rgba(240,196,63,.4);
      position: relative;
    }
    .badge-new-dot {
      position: absolute; top: 2px; right: 2px; background: var(--red);
      color: white; font-size: 8px; font-weight: 800; padding: 2px 5px;
      border-radius: 8px; border: 2px solid white; letter-spacing: .5px;
    }
    .badge-name { font-size: 17px; font-weight: 700; color: var(--navy-dark); margin-bottom: 4px; }
    .badge-points { font-size: 13px; color: var(--gray-500); }

    /* ─── PROFILE ────────────────────────────────────────────────────────────── */
    .profile-hero {
      background: linear-gradient(135deg, var(--navy-dark) 0%, var(--blue) 100%);
      border-radius: var(--radius-lg); padding: 28px; margin-bottom: 24px;
      text-align: center; color: white; position: relative;
    }
    .profile-settings-btn {
      position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,.15);
      border: none; color: white; width: 36px; height: 36px; border-radius: 50%;
      cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center;
      transition: background .2s;
    }
    .profile-settings-btn:hover { background: rgba(255,255,255,.25); }
    .profile-photo-wrap { position: relative; display: inline-block; margin-bottom: 12px; }
    .profile-photo {
      width: 90px; height: 90px; border-radius: 50%; background: rgba(255,255,255,.2);
      overflow: hidden; display: flex; align-items: center; justify-content: center;
      font-size: 36px; border: 3px solid rgba(255,255,255,.5);
      margin: 0 auto;
    }
    .profile-photo img { width: 100%; height: 100%; object-fit: cover; }
    .profile-edit-dot {
      position: absolute; bottom: 0; right: 0; width: 26px; height: 26px;
      background: var(--accent); border-radius: 50%; display: flex; align-items: center;
      justify-content: center; font-size: 13px; border: 2px solid white; cursor: pointer;
    }
    .profile-name { font-size: 22px; font-weight: 700; margin-bottom: 3px; }
    .profile-verified { display: inline-flex; align-items: center; gap: 5px; background: rgba(34,197,94,.2); color: #86efac; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; margin-bottom: 6px; }
    .profile-class { font-size: 13px; opacity: .7; }
    .profile-edit-btn {
      margin: 14px auto 0; display: inline-flex; align-items: center; gap: 7px;
      background: rgba(255,255,255,.15); color: white; border: none; border-radius: var(--radius-sm);
      padding: 9px 20px; font-family: var(--font); font-size: 13px; font-weight: 600;
      cursor: pointer; transition: background .2s;
    }
    .profile-edit-btn:hover { background: rgba(255,255,255,.25); }

    .info-card { background: white; border-radius: var(--radius); padding: 16px 18px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); margin-bottom: 14px; }
    .info-row { display: flex; align-items: center; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--gray-100); }
    .info-row:last-child { border-bottom: none; }
    .info-icon { font-size: 18px; color: var(--blue); flex-shrink: 0; }
    .info-content label { display: block; font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .8px; color: var(--gray-500); }
    .info-content span { font-size: 13.5px; font-weight: 600; color: var(--navy-dark); }

    .badges-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 12px; }
    .badge-item { background: white; border-radius: var(--radius); padding: 14px 10px; text-align: center; border: 1px solid var(--gray-100); box-shadow: var(--shadow-sm); }
    .badge-circle { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto 8px; }
    .badge-circle.blue { background: #dbeafe; }
    .badge-circle.purple { background: #ede9fe; }
    .badge-circle.yellow { background: #fef3c7; }
    .badge-circle.add { background: var(--gray-100); color: var(--gray-500); font-size: 20px; }
    .badge-label { font-size: 11.5px; font-weight: 600; color: var(--navy-dark); }
    .badge-year { font-size: 10px; color: var(--gray-500); }

    .stats-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
    .stat-card { background: white; border-radius: var(--radius); padding: 14px 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); display: flex; align-items: center; gap: 12px; }
    .stat-icon { font-size: 20px; color: var(--blue); }
    .stat-label { font-size: 12px; color: var(--gray-500); }
    .stat-val { font-size: 20px; font-weight: 800; color: var(--navy-dark); }

    /* ─── AI MATCHES ─────────────────────────────────────────────────────────── */
    .matches-tabs { display: grid; grid-template-columns: 1fr 1fr; background: var(--gray-100); border-radius: 10px; padding: 4px; margin-bottom: 20px; max-width: 300px; }
    .match-tab {
      text-align: center; padding: 8px; border-radius: 8px; font-size: 13px;
      font-weight: 600; cursor: pointer; color: var(--gray-500); transition: all .18s;
    }
    .match-tab.active { background: white; color: var(--navy-dark); box-shadow: var(--shadow-sm); }
    .match-section-title { font-size: 14px; font-weight: 700; color: var(--navy-dark); margin-bottom: 14px; display: flex; align-items: center; gap: 7px; }
    .match-cards { display: flex; flex-direction: column; gap: 16px; }
    .match-card {
      background: white; border-radius: var(--radius-lg); overflow: hidden;
      box-shadow: var(--shadow); border: 1px solid var(--gray-100); cursor: pointer; transition: all .2s;
    }
    .match-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); }
    .match-card-img {
      height: 180px; background: linear-gradient(135deg, #c9d6e8 0%, #e8edf5 100%);
      position: relative; display: flex; align-items: center; justify-content: center;
      font-size: 64px; overflow: hidden;
    }
    .match-pct {
      position: absolute; top: 12px; right: 12px; background: white;
      color: var(--green); font-size: 12.5px; font-weight: 700; padding: 5px 10px;
      border-radius: 20px; box-shadow: var(--shadow-sm); display: flex; align-items: center; gap: 4px;
    }
    .match-card-body { padding: 16px 18px; }
    .match-name { font-size: 17px; font-weight: 700; color: var(--navy-dark); margin-bottom: 2px; }
    .match-class-tag { font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .8px; color: var(--gray-500); }
    .match-role { font-size: 13px; color: var(--gray-700); margin-bottom: 10px; }
    .skill-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
    .skill-tag { background: var(--gray-100); color: var(--gray-700); font-size: 11.5px; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
    .match-location { font-size: 12.5px; color: var(--gray-500); display: flex; align-items: center; gap: 5px; }
    .connect-btn {
      width: 100%; padding: 11px; background: var(--navy); color: white;
      border: none; border-radius: var(--radius-sm); font-family: var(--font);
      font-size: 13.5px; font-weight: 700; cursor: pointer; transition: background .2s; margin-top: 12px;
    }
    .connect-btn:hover { background: var(--navy-mid); }

    /* ─── CALENDAR ───────────────────────────────────────────────────────────── */
    .calendar-grid { display: grid; grid-template-columns: 1fr 340px; gap: 24px; align-items: start; }
    @media (max-width: 900px) { .calendar-grid { grid-template-columns: 1fr; } }
    .view-toggle { display: grid; grid-template-columns: 1fr 1fr; background: var(--gray-100); border-radius: 10px; padding: 3px; max-width: 200px; margin-bottom: 18px; }
    .view-btn { text-align: center; padding: 7px 14px; border-radius: 8px; font-size: 12.5px; font-weight: 600; cursor: pointer; color: var(--gray-500); transition: all .18s; border: none; background: none; font-family: var(--font); display: flex; align-items: center; gap: 5px; justify-content: center; }
    .view-btn.active { background: white; color: var(--navy-dark); box-shadow: var(--shadow-sm); }
    .cal-widget { background: white; border-radius: var(--radius); padding: 18px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); }
    .cal-nav { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .cal-nav strong { font-size: 14px; color: var(--navy-dark); }
    .cal-arrow { background: none; border: none; color: var(--gray-500); cursor: pointer; font-size: 16px; padding: 2px 6px; border-radius: 4px; transition: background .15s; }
    .cal-arrow:hover { background: var(--gray-100); }
    .cal-days-header { display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; margin-bottom: 6px; }
    .cal-day-name { font-size: 10.5px; font-weight: 700; color: var(--gray-500); padding: 4px; }
    .cal-cells { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
    .cal-cell { aspect-ratio: 1; display: flex; align-items: center; justify-content: center; font-size: 13px; border-radius: 50%; cursor: pointer; color: var(--gray-700); position: relative; transition: all .15s; }
    .cal-cell:hover { background: var(--gray-100); }
    .cal-cell.today { background: var(--blue); color: white; font-weight: 700; }
    .cal-cell.has-event::after { content: ''; position: absolute; bottom: 3px; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; background: var(--accent); border-radius: 50%; }
    .cal-cell.today.has-event::after { background: white; }
    .cal-cell.selected { background: var(--navy-dark); color: white; }
    .cal-cell.other-month { color: var(--gray-300); }
    .cal-quick { display: flex; gap: 8px; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--gray-100); }
    .quick-add-btn { flex: 1; padding: 7px; border: 1.5px dashed var(--gray-200); border-radius: var(--radius-sm); text-align: center; font-size: 12px; color: var(--gray-500); cursor: pointer; transition: all .18s; background: none; font-family: var(--font); }
    .quick-add-btn:hover { border-color: var(--blue-light); color: var(--blue); }
    .sync-toggle { display: flex; align-items: center; gap: 10px; padding: 10px 14px; background: var(--gray-50); border-radius: var(--radius-sm); margin-bottom: 14px; border: 1px solid var(--gray-100); }
    .sync-toggle span { font-size: 13px; font-weight: 500; color: var(--navy-dark); flex: 1; }
    .toggle-switch { width: 44px; height: 24px; background: var(--blue); border-radius: 12px; position: relative; cursor: pointer; transition: background .2s; flex-shrink: 0; }
    .toggle-switch::after { content: ''; position: absolute; top: 3px; right: 3px; width: 18px; height: 18px; background: white; border-radius: 50%; transition: transform .2s; box-shadow: 0 1px 3px rgba(0,0,0,.2); }
    .toggle-switch.off { background: var(--gray-300); }
    .toggle-switch.off::after { transform: translateX(-20px); }
    .upcoming-cal-events { display: flex; flex-direction: column; gap: 10px; }
    .cal-event-card { background: white; border-radius: var(--radius); padding: 12px 14px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); display: flex; gap: 12px; cursor: pointer; transition: all .2s; }
    .cal-event-card:hover { box-shadow: var(--shadow); }
    .cal-event-date-box { background: var(--navy); color: white; border-radius: 8px; padding: 6px; min-width: 42px; text-align: center; flex-shrink: 0; }
    .cal-event-date-box .m { font-size: 9px; font-weight: 700; text-transform: uppercase; opacity: .7; }
    .cal-event-date-box .d { font-size: 17px; font-weight: 800; line-height: 1; }
    .cal-event-info { flex: 1; }
    .cal-event-title { font-size: 13px; font-weight: 700; color: var(--navy-dark); margin-bottom: 3px; }
    .cal-event-sub { font-size: 11.5px; color: var(--gray-500); }
    .rsvp-btn { align-self: center; padding: 5px 12px; background: var(--navy); color: white; border: none; border-radius: 6px; font-size: 11.5px; font-weight: 600; cursor: pointer; font-family: var(--font); transition: background .2s; white-space: nowrap; }
    .rsvp-btn:hover { background: var(--navy-mid); }
    .fab { position: fixed; bottom: 28px; right: 28px; width: 52px; height: 52px; background: var(--navy); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; cursor: pointer; box-shadow: var(--shadow-lg); border: none; transition: transform .2s, box-shadow .2s; z-index: 50; }
    .fab:hover { transform: scale(1.08); box-shadow: 0 12px 32px rgba(26,36,86,.3); }

    /* ─── NOTIFICATION SETTINGS ─────────────────────────────────────────────── */
    .notif-tabs { display: grid; grid-template-columns: 1fr 1fr; background: var(--gray-100); border-radius: 10px; padding: 3px; max-width: 280px; margin-bottom: 22px; }
    .notif-tab { text-align: center; padding: 8px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; color: var(--gray-500); transition: all .18s; }
    .notif-tab.active { background: white; color: var(--navy-dark); box-shadow: var(--shadow-sm); }
    .notif-section { margin-bottom: 22px; }
    .notif-section-label { font-size: 13px; font-weight: 700; color: var(--navy-dark); margin-bottom: 12px; }
    .notif-item { background: white; border-radius: var(--radius); padding: 14px 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); margin-bottom: 8px; }
    .notif-row { display: flex; align-items: center; gap: 12px; }
    .notif-icon { font-size: 18px; }
    .notif-text { flex: 1; }
    .notif-text strong { display: block; font-size: 13.5px; color: var(--navy-dark); }
    .notif-text span { font-size: 12px; color: var(--gray-500); }
    .notif-toggle { cursor: pointer; }
    .notif-sub-item { display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--gray-100); margin-top: 8px; }
    .notif-sub-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .notif-sub-label { flex: 1; font-size: 13px; color: var(--gray-700); }
    .reset-notif-btn { width: 100%; padding: 12px; border: 1.5px solid var(--red); background: none; border-radius: var(--radius-sm); color: var(--red); font-family: var(--font); font-size: 13.5px; font-weight: 600; cursor: pointer; transition: all .2s; }
    .reset-notif-btn:hover { background: var(--red-light); }

    /* ─── MENTORSHIP HUB ─────────────────────────────────────────────────────── */
    .mentor-filters { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
    .mentor-section { margin-bottom: 24px; }
    .mentor-section-title { font-size: 15px; font-weight: 700; color: var(--navy-dark); margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; }
    .mentor-cards { display: flex; flex-direction: column; gap: 12px; }
    .mentor-card { background: white; border-radius: var(--radius); padding: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); transition: all .2s; }
    .mentor-card:hover { box-shadow: var(--shadow); }
    .mentor-card-top { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 10px; }
    .mentor-photo { width: 48px; height: 48px; border-radius: 50%; background: var(--blue); overflow: hidden; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 18px; flex-shrink: 0; position: relative; }
    .mentor-online { position: absolute; bottom: 1px; right: 1px; width: 11px; height: 11px; background: var(--green); border-radius: 50%; border: 2px solid white; }
    .mentor-name { font-size: 14.5px; font-weight: 700; color: var(--navy-dark); margin-bottom: 2px; }
    .mentor-role { font-size: 12.5px; color: var(--gray-500); margin-bottom: 6px; }
    .match-pct-tag { display: inline-flex; align-items: center; gap: 3px; background: var(--green-light); color: #16a34a; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 20px; }
    .industry-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
    .industry-card { border-radius: var(--radius); padding: 24px 14px; text-align: center; font-size: 13px; font-weight: 700; color: white; cursor: pointer; transition: opacity .18s; }
    .industry-card:hover { opacity: .9; }
    .industry-card.tech { background: linear-gradient(135deg, #1e3a5f, #3b82f6); }
    .industry-card.finance { background: linear-gradient(135deg, #1a3a2a, #22c55e); }
    .industry-card.health { background: linear-gradient(135deg, #3a1a1a, #ef4444); }
    .industry-card.arts { background: linear-gradient(135deg, #3a1a3a, #a855f7); }
    .recently-active { display: flex; flex-direction: column; gap: 8px; }
    .recent-mentor { display: flex; align-items: center; gap: 12px; padding: 10px 14px; background: white; border-radius: var(--radius-sm); box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); }
    .recent-mentor-info { flex: 1; }
    .recent-mentor-name { font-size: 13.5px; font-weight: 600; color: var(--navy-dark); }
    .recent-mentor-role { font-size: 12px; color: var(--gray-500); }
    .add-mentor-btn { color: var(--blue-light); font-size: 20px; cursor: pointer; padding: 2px; }

    /* ─── REQUEST MENTORSHIP ─────────────────────────────────────────────────── */
    .request-mentor-wrap { max-width: 620px; margin: 0 auto; }
    .addu-badge { background: var(--blue); color: white; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; display: inline-flex; align-items: center; gap: 5px; margin-bottom: 18px; }
    .mentor-profile-card { background: white; border-radius: var(--radius); padding: 18px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); margin-bottom: 18px; display: flex; gap: 14px; align-items: flex-start; }
    .availability-box { background: var(--gray-50); border: 1px solid var(--gray-100); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; align-items: center; gap: 8px; margin-top: 8px; }
    .availability-box span { font-size: 12.5px; color: var(--gray-700); }
    .intro-section { background: white; border-radius: var(--radius); padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); margin-bottom: 16px; }
    .intro-section h3 { font-size: 14px; font-weight: 700; color: var(--navy-dark); margin-bottom: 4px; }
    .intro-desc { font-size: 12.5px; color: var(--gray-500); margin-bottom: 14px; line-height: 1.6; }
    .msg-area { width: 100%; border: 1.5px solid var(--gray-200); border-radius: var(--radius-sm); padding: 12px 14px; font-family: var(--font); font-size: 13.5px; color: var(--navy-dark); background: var(--gray-50); outline: none; resize: vertical; min-height: 100px; transition: all .18s; }
    .msg-area:focus { border-color: var(--blue-light); background: white; box-shadow: 0 0 0 3px rgba(45,61,158,.08); }
    .char-count { font-size: 11px; color: var(--gray-500); text-align: right; margin-top: 4px; }
    .quick-topics { display: flex; gap: 7px; flex-wrap: wrap; margin-top: 12px; }
    .topic-chip { padding: 5px 12px; border: 1.5px solid var(--gray-200); border-radius: 20px; font-size: 12px; font-weight: 500; color: var(--gray-700); cursor: pointer; background: white; font-family: var(--font); transition: all .18s; }
    .topic-chip:hover, .topic-chip.active { border-color: var(--blue); color: var(--blue); background: #eff6ff; }
    .focus-areas-box { background: #fefce8; border: 1px solid #fde68a; border-radius: var(--radius-sm); padding: 12px 16px; display: flex; gap: 10px; align-items: flex-start; margin-bottom: 16px; }
    .focus-icon { font-size: 16px; color: var(--orange); margin-top: 1px; }
    .focus-text { font-size: 13px; color: var(--gray-700); line-height: 1.6; }
    .send-request-btn { width: 100%; padding: 13px; background: var(--navy); color: white; border: none; border-radius: var(--radius-sm); font-family: var(--font); font-size: 14px; font-weight: 700; cursor: pointer; transition: background .2s; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .send-request-btn:hover { background: var(--navy-mid); }
    .agreement-text { text-align: center; font-size: 11.5px; color: var(--gray-500); margin-top: 8px; }
    .agreement-text a { color: var(--blue-light); }

    /* ─── ADMIN ──────────────────────────────────────────────────────────────── */
    .admin-hero { background: linear-gradient(135deg, var(--navy-dark) 0%, var(--blue) 100%); border-radius: var(--radius-lg); padding: 20px 24px; margin-bottom: 20px; color: white; display: flex; align-items: center; justify-content: space-between; }
    .admin-hero-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; opacity: .6; margin-bottom: 2px; }
    .admin-hero-name { font-size: 16px; font-weight: 700; }
    .admin-status { font-size: 12px; opacity: .7; display: flex; align-items: center; gap: 5px; }
    .status-dot { width: 7px; height: 7px; background: var(--green); border-radius: 50%; }
    .admin-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; }
    .metric-card-big { background: var(--navy-dark); color: white; border-radius: var(--radius-lg); padding: 20px; position: relative; overflow: hidden; box-shadow: var(--shadow); }
    .metric-card-big::after { content: ''; position: absolute; right: -20px; top: -20px; width: 90px; height: 90px; background: rgba(255,255,255,.05); border-radius: 50%; }
    .metric-label { font-size: 12px; opacity: .6; margin-bottom: 6px; display: flex; align-items: center; gap: 6px; }
    .metric-value { font-size: 28px; font-weight: 800; color: var(--accent); margin-bottom: 6px; }
    .metric-change { font-size: 11.5px; opacity: .7; display: flex; align-items: center; gap: 4px; }
    .change-up { color: var(--green); }
    .metric-card-sm { background: white; border-radius: var(--radius); padding: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); }
    .metric-sm-label { font-size: 11.5px; color: var(--gray-500); margin-bottom: 6px; }
    .metric-sm-val { font-size: 22px; font-weight: 800; color: var(--navy-dark); }
    .metric-sm-sub { font-size: 11px; color: var(--gray-500); margin-top: 3px; }
    .admin-actions-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px; }
    .admin-action-card { border-radius: var(--radius); overflow: hidden; cursor: pointer; position: relative; min-height: 100px; display: flex; flex-direction: column; justify-content: flex-end; transition: all .2s; }
    .admin-action-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); }
    .admin-action-bg { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 32px; }
    .admin-action-bg.verify { background: linear-gradient(135deg, #0f1a3a, #1a3a6b); }
    .admin-action-bg.create { background: linear-gradient(135deg, #1a2a1a, #2a5a2a); }
    .admin-action-bg.alert { background: linear-gradient(135deg, #1a1a3a, #3a3a8a); }
    .admin-action-bg.users { background: linear-gradient(135deg, #2a1a2a, #5a2a5a); }
    .admin-action-label { position: relative; padding: 12px 14px; background: linear-gradient(to top, rgba(0,0,0,.8), transparent); color: white; font-size: 13.5px; font-weight: 700; }
    .logs-list { display: flex; flex-direction: column; gap: 8px; }
    .log-item { background: white; border-radius: var(--radius-sm); padding: 12px 14px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); display: flex; gap: 10px; align-items: flex-start; }
    .log-avatar { width: 34px; height: 34px; border-radius: 50%; background: var(--blue); overflow: hidden; display: flex; align-items: center; justify-content: center; color: white; font-size: 13px; font-weight: 700; flex-shrink: 0; }
    .log-body { flex: 1; }
    .log-title { font-size: 13px; font-weight: 600; color: var(--navy-dark); }
    .log-sub { font-size: 11.5px; color: var(--gray-500); }
    .log-time { font-size: 11px; color: var(--gray-300); flex-shrink: 0; margin-top: 1px; }
    .log-icon { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
    .log-icon.event { background: var(--gray-100); }
    .log-icon.alert { background: var(--red-light); }

    /* ─── VERIFICATION QUEUE ─────────────────────────────────────────────────── */
    .vq-wrap { display: grid; grid-template-columns: 300px 1fr; gap: 20px; }
    @media (max-width: 900px) { .vq-wrap { grid-template-columns: 1fr; } }
    .vq-list-panel { background: white; border-radius: var(--radius); box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); overflow: hidden; }
    .vq-list-header { padding: 14px 16px; border-bottom: 1px solid var(--gray-100); display: flex; align-items: center; justify-content: space-between; }
    .vq-list-title { font-size: 13.5px; font-weight: 700; color: var(--navy-dark); }
    .vq-sort { font-size: 12px; color: var(--blue-light); cursor: pointer; }
    .vq-search { padding: 10px 14px; border-bottom: 1px solid var(--gray-100); }
    .vq-search input { width: 100%; border: 1.5px solid var(--gray-200); border-radius: var(--radius-sm); padding: 7px 12px; font-family: var(--font); font-size: 13px; outline: none; background: var(--gray-50); transition: border-color .18s; }
    .vq-search input:focus { border-color: var(--blue-light); }
    .vq-items { overflow-y: auto; max-height: 500px; }
    .vq-items::-webkit-scrollbar { width: 4px; }
    .vq-items::-webkit-scrollbar-thumb { background: var(--gray-200); border-radius: 4px; }
    .vq-item { padding: 12px 14px; border-bottom: 1px solid var(--gray-100); display: flex; gap: 10px; cursor: pointer; transition: background .15s; }
    .vq-item:hover { background: var(--gray-50); }
    .vq-item.selected { background: #eff6ff; }
    .vq-item-info { flex: 1; }
    .vq-item-name { font-size: 13.5px; font-weight: 600; color: var(--navy-dark); margin-bottom: 2px; }
    .vq-item-sub { font-size: 11.5px; color: var(--gray-500); }
    .status-pill { font-size: 10.5px; font-weight: 700; padding: 2px 8px; border-radius: 20px; }
    .pill-pending { background: var(--orange-light); color: var(--orange); }
    .pill-approved { background: var(--green-light); color: #16a34a; }
    .pill-rejected { background: var(--red-light); color: var(--red); }

    .vq-detail { background: white; border-radius: var(--radius); box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); overflow: hidden; }
    .vq-detail-header { padding: 14px 20px; background: var(--gray-50); border-bottom: 1px solid var(--gray-100); display: flex; align-items: center; justify-content: space-between; }
    .vq-progress { display: flex; align-items: center; gap: 10px; font-size: 12.5px; color: var(--gray-500); }
    .progress-bar-wrap { flex: 1; height: 5px; background: var(--gray-200); border-radius: 3px; max-width: 120px; }
    .progress-bar-fill { height: 100%; background: var(--blue); border-radius: 3px; }
    .vq-doc-section { padding: 20px; border-bottom: 1px solid var(--gray-100); }
    .vq-doc-label { font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--gray-500); margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; }
    .vq-doc-expand { font-size: 12.5px; color: var(--blue-light); cursor: pointer; font-weight: 600; }
    .vq-doc-img { border-radius: var(--radius); overflow: hidden; background: linear-gradient(135deg, #f0a070, #c07840); min-height: 130px; display: flex; align-items: center; justify-content: center; padding: 14px; position: relative; }
    .doc-card-mock { background: white; border-radius: 8px; padding: 12px 14px; width: 200px; box-shadow: var(--shadow); }
    .doc-card-title { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: var(--navy-dark); text-align: center; margin-bottom: 8px; }
    .doc-card-row { height: 7px; background: var(--gray-200); border-radius: 4px; margin-bottom: 5px; }
    .doc-card-row.short { width: 60%; }
    .doc-card-row.medium { width: 80%; }
    .vq-doc-filename { display: flex; align-items: center; gap: 7px; margin-top: 10px; font-size: 12px; color: var(--gray-700); }
    .vq-reg-section { padding: 20px; }
    .vq-reg-label { font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--gray-500); margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between; }
    .vq-reg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 20px; margin-bottom: 20px; }
    .vq-reg-item label { display: block; font-size: 11.5px; color: var(--gray-500); margin-bottom: 2px; }
    .vq-reg-item strong { font-size: 14px; color: var(--navy-dark); }
    .vq-actions { display: flex; flex-direction: column; gap: 10px; padding: 16px 20px; border-top: 1px solid var(--gray-100); background: var(--gray-50); }
    .approve-btn { width: 100%; padding: 12px; background: var(--navy); color: white; border: none; border-radius: var(--radius-sm); font-family: var(--font); font-size: 14px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: background .2s; }
    .approve-btn:hover { background: var(--blue); }
    .vq-secondary-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .req-info-btn { padding: 10px; background: white; color: var(--navy-dark); border: 1.5px solid var(--gray-200); border-radius: var(--radius-sm); font-family: var(--font); font-size: 13px; font-weight: 600; cursor: pointer; transition: all .2s; display: flex; align-items: center; justify-content: center; gap: 7px; }
    .req-info-btn:hover { border-color: var(--blue); color: var(--blue); }
    .reject-btn { padding: 10px; background: white; color: var(--red); border: 1.5px solid var(--red-light); border-radius: var(--radius-sm); font-family: var(--font); font-size: 13px; font-weight: 600; cursor: pointer; transition: all .2s; display: flex; align-items: center; justify-content: center; gap: 7px; }
    .reject-btn:hover { background: var(--red-light); }

    /* ─── ANALYTICS REPORT ───────────────────────────────────────────────────── */
    .report-header { background: white; border-radius: var(--radius-lg); padding: 20px 24px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); margin-bottom: 20px; display: flex; align-items: flex-start; justify-content: space-between; }
    .report-event-name { font-family: var(--font-display); font-size: 22px; color: var(--navy-dark); margin-bottom: 4px; }
    .report-event-sub { font-size: 13px; color: var(--gray-500); }
    .finalized-tag { background: var(--green-light); color: #16a34a; font-size: 11.5px; font-weight: 700; padding: 4px 12px; border-radius: 20px; }
    .export-btn { display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: var(--navy); color: white; border: none; border-radius: var(--radius-sm); font-family: var(--font); font-size: 13px; font-weight: 600; cursor: pointer; transition: background .2s; margin-top: 12px; }
    .export-btn:hover { background: var(--navy-mid); }
    .report-metrics { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 14px; margin-bottom: 22px; }
    .report-metric { background: white; border-radius: var(--radius); padding: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); }
    .r-metric-label { font-size: 11.5px; color: var(--gray-500); margin-bottom: 6px; display: flex; align-items: center; gap: 6px; }
    .r-metric-value { font-size: 24px; font-weight: 800; color: var(--navy-dark); }
    .r-metric-sub { font-size: 11.5px; margin-top: 3px; }
    .sub-green { color: var(--green); }
    .sub-red { color: var(--red); }
    .chart-card { background: white; border-radius: var(--radius); padding: 18px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); margin-bottom: 16px; }
    .chart-card h3 { font-size: 14px; font-weight: 700; color: var(--navy-dark); margin-bottom: 4px; }
    .chart-sub { font-size: 12px; color: var(--gray-500); margin-bottom: 14px; }
    .bar-chart { display: flex; align-items: flex-end; gap: 6px; height: 100px; padding: 0 4px; }
    .bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .bar { width: 100%; border-radius: 4px 4px 0 0; transition: opacity .2s; cursor: pointer; }
    .bar:hover { opacity: .8; }
    .bar-label { font-size: 10px; color: var(--gray-500); text-align: center; }
    .demo-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--gray-100); }
    .demo-row:last-child { border-bottom: none; }
    .demo-icon { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
    .demo-label { flex: 1; font-size: 13px; color: var(--navy-dark); font-weight: 500; }
    .demo-pct { font-size: 13px; font-weight: 700; color: var(--navy-dark); min-width: 40px; text-align: right; }
    .demo-bar { flex: 2; height: 7px; background: var(--gray-100); border-radius: 4px; overflow: hidden; }
    .demo-bar-fill { height: 100%; border-radius: 4px; }

    /* ─── EVENT MANAGER (Admin) ──────────────────────────────────────────────── */
    .event-mgr-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
    .emgr-stat { background: white; border-radius: var(--radius); padding: 14px 16px; text-align: center; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); }
    .emgr-stat-val { font-size: 24px; font-weight: 800; color: var(--navy-dark); }
    .emgr-stat-label { font-size: 11.5px; color: var(--gray-500); margin-top: 3px; }
    .emgr-stat.pending .emgr-stat-val { color: var(--orange); }
    .emgr-actions { display: flex; flex-direction: column; gap: 12px; margin-bottom: 22px; }
    .emgr-action-card { background: white; border-radius: var(--radius); padding: 16px 18px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); cursor: pointer; display: flex; align-items: center; gap: 14px; transition: all .2s; }
    .emgr-action-card:hover { box-shadow: var(--shadow); transform: translateX(3px); }
    .emgr-action-icon { width: 42px; height: 42px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
    .icon-bg-blue { background: #dbeafe; }
    .icon-bg-orange { background: var(--orange-light); }
    .icon-bg-green { background: var(--green-light); }
    .emgr-action-text strong { display: block; font-size: 13.5px; color: var(--navy-dark); margin-bottom: 2px; }
    .emgr-action-text span { font-size: 12px; color: var(--gray-500); }
    .emgr-action-arrow { margin-left: auto; color: var(--gray-300); font-size: 16px; }
    .recent-events-list { display: flex; flex-direction: column; gap: 8px; }
    .recent-event-item { background: white; border-radius: var(--radius-sm); padding: 12px 14px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); display: flex; gap: 12px; align-items: center; cursor: pointer; transition: background .15s; }
    .recent-event-item:hover { background: var(--gray-50); }
    .re-date { background: var(--navy); color: white; border-radius: 6px; padding: 5px 7px; text-align: center; min-width: 40px; }
    .re-date .mon { font-size: 9px; font-weight: 700; text-transform: uppercase; opacity: .7; }
    .re-date .day { font-size: 16px; font-weight: 800; line-height: 1; }
    .re-info { flex: 1; }
    .re-title { font-size: 13px; font-weight: 700; color: var(--navy-dark); margin-bottom: 2px; }
    .re-sub { font-size: 11.5px; color: var(--gray-500); }
    .re-status { font-size: 10.5px; font-weight: 700; padding: 2px 8px; border-radius: 20px; }
    .status-live { background: var(--green-light); color: #16a34a; }
    .status-draft { background: var(--gray-100); color: var(--gray-500); }
    .status-done { background: var(--blue); color: white; }
    .re-arrow { color: var(--gray-300); font-size: 14px; }

    /* ─── INVITATION BUILDER ─────────────────────────────────────────────────── */
    .inv-builder-wrap { max-width: 700px; margin: 0 auto; }
    .inv-section { background: white; border-radius: var(--radius); padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); margin-bottom: 16px; }
    .inv-section-title { font-size: 14px; font-weight: 700; color: var(--navy-dark); margin-bottom: 4px; display: flex; align-items: center; justify-content: space-between; }
    .inv-step-tag { font-size: 11px; color: var(--gray-500); font-weight: 500; }
    .inv-section-sub { font-size: 12.5px; color: var(--gray-500); margin-bottom: 16px; }
    .filter-select-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
    .filter-select { border: 1.5px solid var(--gray-200); border-radius: 20px; padding: 6px 12px; font-family: var(--font); font-size: 12.5px; color: var(--gray-700); background: white; cursor: pointer; outline: none; display: flex; align-items: center; gap: 5px; }
    .criteria-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px; }
    .criteria-tag { background: var(--gray-100); color: var(--navy-dark); font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; display: flex; align-items: center; gap: 5px; }
    .criteria-tag button { background: none; border: none; cursor: pointer; color: var(--gray-500); font-size: 14px; line-height: 1; padding: 0; }
    .reach-counter { background: var(--gray-50); border-radius: var(--radius-sm); padding: 14px 16px; display: flex; align-items: center; gap: 12px; border: 1px solid var(--gray-100); }
    .reach-num { font-size: 24px; font-weight: 800; color: var(--navy-dark); }
    .reach-label { font-size: 12.5px; color: var(--gray-500); }
    .inv-preview-card { background: var(--gray-50); border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--gray-200); }
    .inv-preview-banner { height: 90px; background: linear-gradient(135deg, var(--navy) 0%, var(--blue-light) 100%); display: flex; align-items: center; justify-content: center; padding: 16px; }
    .inv-preview-banner-text { color: white; }
    .inv-preview-banner-text .label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; opacity: .7; }
    .inv-preview-banner-text .title { font-family: var(--font-display); font-size: 16px; }
    .inv-preview-body { padding: 14px; }
    .inv-preview-meta { font-size: 12.5px; color: var(--gray-700); margin-bottom: 8px; display: flex; gap: 12px; }
    .inv-preview-desc { font-size: 12.5px; color: var(--gray-500); line-height: 1.6; }
    .send-bulk-btn { width: 100%; padding: 14px; background: var(--navy); color: white; border: none; border-radius: var(--radius-sm); font-family: var(--font); font-size: 15px; font-weight: 700; cursor: pointer; transition: background .2s; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 18px; }
    .send-bulk-btn:hover { background: var(--blue); }

    /* ─── FORGOT PASSWORD ────────────────────────────────────────────────────── */
    .forgot-card { background: white; border-radius: var(--radius-xl); padding: 40px; width: 420px; max-width: calc(100vw - 40px); box-shadow: var(--shadow-lg); animation: cardSlide .35s cubic-bezier(.22,1,.36,1); }
    .forgot-icon { width: 56px; height: 56px; background: #dbeafe; border-radius: 50%; margin: 0 auto 18px; display: flex; align-items: center; justify-content: center; font-size: 24px; }
    .forgot-title { font-family: var(--font-display); font-size: 22px; text-align: center; margin-bottom: 6px; color: var(--navy-dark); }
    .forgot-sub { text-align: center; color: var(--gray-500); font-size: 13.5px; margin-bottom: 24px; }
    .back-to-login { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 16px; font-size: 13px; color: var(--gray-500); cursor: pointer; background: none; border: none; font-family: var(--font); width: 100%; }
    .back-to-login:hover { color: var(--blue); }

    /* ─── TOAST ──────────────────────────────────────────────────────────────── */
    #toast-container { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; gap: 8px; pointer-events: none; }
    .toast { background: var(--navy-dark); color: white; padding: 12px 20px; border-radius: 30px; font-size: 13.5px; font-weight: 500; box-shadow: var(--shadow-lg); animation: toastIn .3s cubic-bezier(.22,1,.36,1); display: flex; align-items: center; gap: 8px; }
    .toast.success { background: #166534; }
    .toast.error { background: #7f1d1d; }
    @keyframes toastIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }

    /* ─── MODAL OVERLAY ──────────────────────────────────────────────────────── */
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 500; display: none; align-items: center; justify-content: center; backdrop-filter: blur(2px); }
    .modal-overlay.open { display: flex; }
    .modal-box { background: white; border-radius: var(--radius-xl); padding: 28px; max-width: 440px; width: calc(100vw - 40px); box-shadow: var(--shadow-lg); animation: cardSlide .25s ease; }
    .modal-title { font-size: 17px; font-weight: 700; color: var(--navy-dark); margin-bottom: 10px; }
    .modal-body { font-size: 13.5px; color: var(--gray-700); line-height: 1.6; margin-bottom: 20px; }
    .modal-actions { display: flex; gap: 10px; justify-content: flex-end; }

    /* scrollbar global */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--gray-200); border-radius: 4px; }
  `;
  document.head.appendChild(style);

  // ─── APP STATE ───────────────────────────────────────────────────────────────
  const state = {
    currentScreen: 'login',
    isLoggedIn: false,
    isAdmin: false,
    verifyStep: 1,
    verifyData: { fullName: '', dob: '', gender: '', mobile: '', studentId: '', course: '', batch: '', file: null },
    passwordVisible: false,
    calView: 'month',
    notifSettings: { push: true, email: false, eventUpcoming: true, eventNearby: true, connections: true, profileViews: false, mentorMatches: true, sessionReminders: true, feedbackRequests: false },
    saveStates: {},
    connectStates: {},
    calSynced: true,
    selectedVqItem: 0,
    msgText: '',
    topicChips: [],
    currentCalMonth: new Date(2023, 9, 1),
  };

  // ─── BUILD HTML ──────────────────────────────────────────────────────────────
  document.body.innerHTML = '';
  document.body.style.margin = '0';

  const app = document.createElement('div');
  app.id = 'app';
  document.body.appendChild(app);

  // Toast container
  const toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  document.body.appendChild(toastContainer);

  // ─── SIDEBAR ─────────────────────────────────────────────────────────────────
  const sidebar = document.createElement('nav');
  sidebar.id = 'sidebar';
  sidebar.innerHTML = `
    <div class="sidebar-logo">
      <div class="sidebar-logo-icon">🎓</div>
      <div class="sidebar-logo-text">
        <strong>AdDU Alumni</strong>
        <span>Blue Knight Hub</span>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Main</div>
      <div class="nav-item active" data-screen="dashboard"><span class="nav-icon">🏠</span> Home Dashboard</div>
      <div class="nav-item" data-screen="directory"><span class="nav-icon">📋</span> Alumni Directory</div>
      <div class="nav-item" data-screen="events"><span class="nav-icon">📅</span> Events <span class="nav-badge">3</span></div>
      <div class="nav-item" data-screen="calendar"><span class="nav-icon">🗓️</span> My Calendar</div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Networking</div>
      <div class="nav-item" data-screen="matches"><span class="nav-icon">🤝</span> AI Matches</div>
      <div class="nav-item" data-screen="mentorship"><span class="nav-icon">🌱</span> Mentorship Hub</div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">My Account</div>
      <div class="nav-item" data-screen="profile"><span class="nav-icon">👤</span> My Profile</div>
      <div class="nav-item" data-screen="notifications"><span class="nav-icon">🔔</span> Notifications</div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Admin</div>
      <div class="nav-item" data-screen="admin"><span class="nav-icon">⚙️</span> Command Center</div>
      <div class="nav-item" data-screen="vqueue"><span class="nav-icon">✅</span> Verification Queue <span class="nav-badge" style="background:var(--orange);color:white">48</span></div>
      <div class="nav-item" data-screen="eventmgr"><span class="nav-icon">🗂️</span> Event Manager</div>
      <div class="nav-item" data-screen="analytics"><span class="nav-icon">📊</span> Analytics</div>
    </div>

    <div class="sidebar-user" id="sidebar-user-btn">
      <div class="sidebar-avatar">AJ</div>
      <div class="sidebar-user-info">
        <strong>Alex Johnson</strong>
        <span>BS CS '18 · Verified</span>
      </div>
      <span style="color:rgba(255,255,255,.3);font-size:14px">⚡</span>
    </div>
  `;

  // ─── MAIN ─────────────────────────────────────────────────────────────────────
  const main = document.createElement('div');
  main.id = 'main';

  const topbar = document.createElement('div');
  topbar.id = 'topbar';
  topbar.innerHTML = `
    <div>
      <div class="topbar-title" id="topbar-title">Home Dashboard</div>
    </div>
    <div class="topbar-search">
      <span style="color:var(--gray-500);font-size:15px">🔍</span>
      <input type="text" placeholder="Search alumni, events...">
    </div>
    <div class="topbar-actions">
      <div class="topbar-btn" id="notif-topbar-btn" title="Notifications">
        🔔 <div class="topbar-badge"></div>
      </div>
      <div class="topbar-btn" id="profile-topbar-btn" title="Profile">👤</div>
      <div class="topbar-btn" id="logout-btn" title="Logout" style="color:var(--red)">🚪</div>
    </div>
  `;

  const pageContent = document.createElement('div');
  pageContent.id = 'page-content';

  main.appendChild(topbar);
  main.appendChild(pageContent);
  app.appendChild(sidebar);
  app.appendChild(main);
  
  function initializeSidebar() {
  const sidebarItems = document.querySelectorAll('.nav-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const screen = item.getAttribute('data-screen');
      if (screen) {
        navigateTo(screen); // Function to handle screen navigation
      }
    });
  });
}

// Call this function after the sidebar is rendered
initializeSidebar();

  

  // ─── FULL-PAGE SCREENS ───────────────────────────────────────────────────────
  function renderLoginScreen() {
    const el = document.createElement('div');
    el.className = 'full-screen';
    el.id = 'screen-login';
    el.innerHTML = `
      <div class="login-card">
        <div class="login-logo">🎓</div>
        <h1 class="login-title">Welcome Back</h1>
        <p class="login-sub">Sign in to access your exclusive alumni network and events.</p>
        <div class="form-group">
          <label class="form-label">University Email</label>
          <div class="form-control">
            <span class="input-icon">✉️</span>
            <input type="email" id="login-email" placeholder="jane.doe@addu.edu.ph" value="alex.johnson@addu.edu.ph">
            <span class="input-right valid" id="email-valid">✔</span>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <div class="form-control">
            <span class="input-icon">🔒</span>
            <input type="password" id="login-pass" placeholder="••••••••" value="password123">
            <span class="input-right" id="toggle-pass">👁</span>
          </div>
        </div>
        <div class="forgot-link"><a href="#" id="forgot-pwd-link">Forgot Password?</a></div>
        <button class="btn btn-primary" id="login-btn">Sign In →</button>
        <div class="login-footer">Don't have an account? <a href="#" id="register-link">Register ›</a></div>
      </div>
    `;
    document.body.appendChild(el);

    el.querySelector('#toggle-pass').addEventListener('click', () => {
      const inp = el.querySelector('#login-pass');
      inp.type = inp.type === 'password' ? 'text' : 'password';
    });
    el.querySelector('#login-btn').addEventListener('click', () => {
      const email = el.querySelector('#login-email').value;
      const pass = el.querySelector('#login-pass').value;
      if (!email || !pass) { showToast('Please enter email and password', 'error'); return; }
      state.isLoggedIn = true;
      state.isAdmin = email.includes('admin') || email.includes('staff');
      navigateTo('dashboard');
      showToast('✅ Signed in successfully! Welcome back, Alex.', 'success');
    });
    el.querySelector('#forgot-pwd-link').addEventListener('click', (e) => { e.preventDefault(); showForgotPassword(); });
    el.querySelector('#register-link').addEventListener('click', (e) => { e.preventDefault(); showVerification(); });
    return el;
  }

  function renderForgotScreen() {
    const el = document.createElement('div');
    el.className = 'full-screen';
    el.id = 'screen-forgot';
    el.innerHTML = `
      <div class="forgot-card">
        <div class="forgot-icon">📧</div>
        <h2 class="forgot-title">Reset Password</h2>
        <p class="forgot-sub">Enter your university email and we'll send you a reset link.</p>
        <div class="form-group">
          <label class="form-label">University Email</label>
          <div class="form-control">
            <span class="input-icon">✉️</span>
            <input type="email" id="forgot-email" placeholder="your.email@addu.edu.ph">
          </div>
        </div>
        <button class="btn btn-primary" id="send-reset-btn">Send Reset Link</button>
        <button class="back-to-login" id="back-login-btn">← Back to Login</button>
      </div>
    `;
    document.body.appendChild(el);
    el.querySelector('#send-reset-btn').addEventListener('click', () => {
      const email = el.querySelector('#forgot-email').value;
      if (!email) { showToast('Please enter your email', 'error'); return; }
      showToast('📧 Reset link sent! Check your inbox.', 'success');
      el.classList.remove('active');
      document.getElementById('screen-login').classList.add('active');
    });
    el.querySelector('#back-login-btn').addEventListener('click', () => {
      el.classList.remove('active');
      document.getElementById('screen-login').classList.add('active');
    });
    return el;
  }

  function renderVerifyScreen() {
    const el = document.createElement('div');
    el.className = 'full-screen';
    el.id = 'screen-verify';
    el.innerHTML = `<div class="verify-card" id="verify-card-inner"></div>`;
    document.body.appendChild(el);
    renderVerifyStep(el.querySelector('#verify-card-inner'));
    return el;
  }

  function renderVerifyStep(container) {
    const s = state.verifyStep;
    const steps = ['Personal', 'Academic', 'Verify'];
    container.innerHTML = `
      <div class="verify-header">
        <span class="back-btn" id="verify-back">←</span>
        <h2>AdDU Alumni Verification</h2>
      </div>
      <div class="verify-body">
        <div class="step-indicator">
          ${steps.map((t, i) => `<div class="step-tab ${i + 1 < s ? 'done' : i + 1 === s ? 'active' : ''}">${i + 1 < s ? '✓ ' : ''}${t}</div>`).join('')}
        </div>
        <div class="step-label">Step ${s} of 3</div>
        ${s === 1 ? renderVerifyStep1() : s === 2 ? renderVerifyStep2() : renderVerifyStep3()}
      </div>
    `;
    container.querySelector('#verify-back').addEventListener('click', () => {
      if (s === 1) { document.getElementById('screen-verify').classList.remove('active'); document.getElementById('screen-login').classList.add('active'); }
      else { state.verifyStep--; renderVerifyStep(container); }
    });
    const nextBtn = container.querySelector('#verify-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (s < 3) { state.verifyStep++; renderVerifyStep(container); }
        else {
          document.getElementById('screen-verify').classList.remove('active');
         
          navigateTo('dashboard');
          showToast('🎉 Verification submitted! You\'ll be notified once approved.', 'success');
        }
      });
    }
    const uploadZone = container.querySelector('#upload-zone');
    if (uploadZone) { uploadZone.addEventListener('click', () => showToast('📂 File browser opened (demo)', '')); }
  }

  function renderVerifyStep1() {
    return `
      <h2 class="step-title">Personal Details</h2>
      <p class="step-desc">Let's start with your basic information to begin the verification process.</p>
      <div class="form-group"><label class="form-label">Full Name</label><div class="form-control"><span class="input-icon">👤</span><input type="text" placeholder="e.g. Juan Dela Cruz" value="${state.verifyData.fullName}" id="vfy-name"></div></div>
      <div class="form-group"><label class="form-label">Date of Birth</label><div class="form-control"><span class="input-icon">📅</span><input type="date" id="vfy-dob" value="${state.verifyData.dob}"></div></div>
      <div class="form-group"><label class="form-label">Gender</label><select class="select-control" id="vfy-gender"><option value="">Select Gender</option><option value="male">Male</option><option value="female">Female</option><option value="other">Prefer not to say</option></select></div>
      <div class="form-group"><label class="form-label">Mobile Number</label><div class="form-control"><span class="input-icon">📱</span><input type="tel" placeholder="e.g. 0917 123 4567" id="vfy-mobile" value="${state.verifyData.mobile}"></div></div>
      <button class="btn btn-primary" style="margin-top:8px" id="verify-next-btn">Next Step →</button>
    `;
  }

  function renderVerifyStep2() {
    return `
      <h2 class="step-title">Verify Your Profile</h2>
      <p class="step-desc">Please provide your AdDU academic details to ensure you are verified as an alumnus.</p>
      <div class="form-group"><label class="form-label">Student ID / Roll Number</label><div class="form-control"><span class="input-icon">🏫</span><input type="text" placeholder="e.g. 2018-0045" id="vfy-id" value="${state.verifyData.studentId}"></div></div>
      <div class="form-group"><label class="form-label">Course / Major</label><div class="form-control"><span class="input-icon">🎓</span><input type="text" placeholder="e.g. BS Computer Science" id="vfy-course" value="${state.verifyData.course}"></div></div>
      <div class="form-group"><label class="form-label">Graduation Batch</label><select class="select-control" id="vfy-batch"><option value="">Select Year</option>${Array.from({length:30},(_,i)=>2024-i).map(y=>`<option value="${y}" ${state.verifyData.batch==y?'selected':''}>${y}</option>`).join('')}</select></div>
      <div class="form-group">
        <label class="form-label" style="display:flex;align-items:center;justify-content:space-between">Proof of Education <a href="#" style="font-size:12px;color:var(--blue-light);text-decoration:none;font-weight:500">Why do we need this?</a></label>
        <div class="upload-zone" id="upload-zone">
          <div class="upload-icon">⬆️</div>
          <p>Tap to upload</p>
          <span>Diploma, Transcript, or AdDU ID (Max 5MB)</span>
        </div>
      </div>
      <button class="btn btn-primary" style="margin-top:8px" id="verify-next-btn">Next Step →</button>
    `;
  }

  function renderVerifyStep3() {
    return `
      <h2 class="step-title">Review & Submit</h2>
      <p class="step-desc">Please review your information carefully. Ensure all details are accurate before submitting for verification.</p>
      <div class="review-card">
        <div class="review-section-header"><span class="review-section-label">Personal Info</span><button class="review-edit-btn" onclick="state.verifyStep=1;document.getElementById('verify-card-inner')&&renderVerifyStep(document.getElementById('verify-card-inner'))">Edit</button></div>
        <div class="review-row"><span class="review-key">Full Name</span><span class="review-val">Maria Clara Santos</span></div>
        <div class="review-row"><span class="review-key">Email</span><span class="review-val">maria.santos@addu.edu.ph</span></div>
        <div class="review-row"><span class="review-key">Phone</span><span class="review-val">+63 917 123 4567</span></div>
      </div>
      <div class="review-card">
        <div class="review-section-header"><span class="review-section-label">Academic Info</span><button class="review-edit-btn">Edit</button></div>
        <div class="review-row"><span class="review-key">Student ID</span><span class="review-val">2018-0045</span></div>
        <div class="review-row"><span class="review-key">Course</span><span class="review-val">BS Computer Science</span></div>
        <div class="review-row"><span class="review-key">Batch</span><span class="review-val">2022</span></div>
        <div class="file-preview"><span class="file-icon">📄</span><div class="file-info"><strong>diploma_scan.pdf</strong><span>2.4 MB</span></div><span class="file-check">✅</span></div>
      </div>
      <div class="confirm-check">
        <input type="checkbox" id="confirm-check">
        <label for="confirm-check">I confirm that the information provided is accurate and I agree to the <a href="#" style="color:var(--blue-light)">Terms of Service</a> and <a href="#" style="color:var(--blue-light)">Privacy Policy</a>.</label>
      </div>
      <button class="btn btn-primary" style="margin-top:8px" id="verify-next-btn">Submit for Verification ✓</button>
    `;
  }

  // ─── SCREENS ─────────────────────────────────────────────────────────────────
  function renderDashboard() {
    return `
      <div class="dash-hero">
        <div class="dash-welcome">
          <small>Welcome back,</small>
          <h2>Alex Morgan</h2>
          <p>Stay connected with your Blue Knight community. You have 3 upcoming events this week.</p>
        </div>
        <div class="dash-hero-avatar">🧑‍💼</div>
      </div>

      <div class="section-header"><span class="section-title">Featured Events</span><button class="see-all" onclick="navigateTo('events')">See All</button></div>
      <div class="events-grid">
        ${[
          {title:'Annual AdDU Gala',time:'7:00 PM – 11:00 PM',month:'OCT',day:'24',seats:false,emoji:'🏛️'},
          {title:'Blue Knights Reunion',time:'5:30 PM – 9:00 PM',month:'NOV',day:'02',seats:false,emoji:'🤝'},
          {title:'Alumni Tech Summit',time:'9:00 AM – 5:00 PM',month:'NOV',day:'15',seats:true,emoji:'💻'},
        ].map(ev => `
          <div class="event-card" onclick="navigateTo('event-detail')">
            <div class="event-card-img">
              <div style="font-size:48px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">${ev.emoji}</div>
              <div class="event-date-badge"><span>${ev.month}</span>${ev.day}</div>
              ${ev.seats ? '<div class="event-seats-tag">🔥 Only 5 seats left</div>' : ''}
            </div>
            <div class="event-card-body">
              <div class="event-card-title">${ev.title}</div>
              <div class="event-card-meta">
                <div class="event-meta-row">⏰ <span>${ev.time}</span></div>
                <div class="event-meta-row">📍 <span>Grand Hall, Main Campus</span></div>
              </div>
            </div>
            <div class="event-card-footer">
              <div class="attendee-stack">
                <div class="attendee-dot">A</div><div class="attendee-dot">B</div><div class="attendee-dot">C</div>
                <div class="attendee-dot count">+142</div>
              </div>
              <button class="book-btn">Book Now →</button>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="section-header"><span class="section-title">Quick Access</span></div>
      <div class="quick-actions">
        <div class="quick-card" onclick="navigateTo('directory')"><div class="quick-card-icon">🔍</div><div class="quick-card-label">Find Alumni</div></div>
        <div class="quick-card" onclick="navigateTo('admin')"><div class="quick-card-icon">📢</div><div class="quick-card-label">Announcements</div></div>
        <div class="quick-card" onclick="navigateTo('mentorship')"><div class="quick-card-icon">🌱</div><div class="quick-card-label">Mentorship</div></div>
        <div class="quick-card" onclick="navigateTo('matches')"><div class="quick-card-icon">🤝</div><div class="quick-card-label">AI Matches</div></div>
      </div>

      <div class="section-header"><span class="section-title">Blue Knight Feed</span></div>
      <div class="feed-list">
        <div class="feed-item">
          <div class="feed-header">
            <div class="feed-avatar">🏫</div>
            <div class="feed-meta">
              <strong>Ateneo de Davao <span class="feed-verified">✓</span></strong>
              <span>2 hours ago</span>
            </div>
            <span class="feed-dots">⋯</span>
          </div>
          <div class="feed-img-placeholder">🏢</div>
          <div class="feed-body">We are proud to announce that AdDU has been ranked #1 in Innovation for the third consecutive year! 🏆 This achievement reflects the hard work of our students and faculty. <span class="hashtag">#AdDU #BlueKnights</span></div>
          <div class="feed-actions">
            <button class="feed-action-btn">👍 <span>245</span></button>
            <button class="feed-action-btn">💬 <span>42</span></button>
            <button class="feed-action-btn">↗ <span>Share</span></button>
          </div>
        </div>

        <div class="feed-item">
          <div class="feed-header">
            <div class="feed-avatar">JD</div>
            <div class="feed-meta">
              <strong>John Doe <span class="feed-verified">✓</span></strong>
              <span>BS IT '18 • Product Manager</span>
            </div>
            <span class="feed-dots">⋯</span>
          </div>
          <div class="feed-body">Looking for mentorship opportunities in the Fintech space here in Davao. If anyone is available for a quick coffee chat downtown next week, let me know! ☕ <span class="hashtag">#Networking</span></div>
          <div class="feed-actions">
            <button class="feed-action-btn">👍 <span>12</span></button>
            <button class="feed-action-btn">💬 <span>8</span></button>
            <button class="feed-action-btn">↗ <span>Share</span></button>
          </div>
        </div>

        <div class="feed-item">
          <div class="feed-header">
            <div class="feed-avatar" style="background:var(--navy)">🗓️</div>
            <div class="feed-meta"><strong>Homecoming Registration</strong><span>Just now</span></div>
          </div>
          <div class="feed-body">Registration is closing soon for the Grand Alumni Homecoming weekend! Don't miss out on the early bird pricing.</div>
          <button class="cta-btn" onclick="navigateTo('event-detail')">Register Now</button>
        </div>
      </div>
    `;
  }

  function renderDirectory() {
    return `
      <div class="dir-toolbar">
        <div class="dir-search">
          <span>🔍</span>
          <input type="text" placeholder="Search alumni by name or company...">
        </div>
        <div class="dir-filters">
          <button class="filter-chip"><span>🎓</span> Course <span>▾</span></button>
          <button class="filter-chip active"><span>📅</span> Batch: 2018-2022 <span class="chip-x">×</span></button>
          <button class="filter-chip"><span>💼</span> Industry <span>▾</span></button>
          <button class="filter-chip"><span>📍</span> Location <span>▾</span></button>
        </div>
      </div>
      <div class="dir-count">Showing 142 Alumni</div>
      <div class="alumni-cards">
        ${[
          {name:'Sarah Jenkins',cls:'2018',role:'Senior UX Designer',company:'Adobe',course:'B.Sc. Computer Science',loc:'San Francisco, CA',online:true,connected:false,saved:false,initials:'SJ',color:'#e91e8c'},
          {name:'Michael Chen',cls:'2019',role:'Product Manager',company:'Google',course:'MBA, Business Administration',loc:'New York, NY',online:false,connected:'pending',saved:false,initials:'MC',color:'#4285f4'},
          {name:'Emily Rodriguez',cls:'2020',role:'Software Engineer',company:'Spotify',course:'M.Sc. Data Science',loc:'London, UK',online:true,connected:false,saved:true,initials:'ER',color:'#1db954'},
          {name:'James Park',cls:'2017',role:'Data Scientist',company:'Netflix',course:'B.Sc. Statistics',loc:'Los Angeles, CA',online:false,connected:false,saved:false,initials:'JP',color:'#e50914'},
        ].map((a,i) => `
          <div class="alumni-card">
            <div class="alumni-card-top">
              <div class="alumni-photo" style="background:${a.color}">
                ${a.initials}
                ${a.online ? '<div class="online-dot"></div>' : ''}
              </div>
              <div class="alumni-info">
                <div class="alumni-name">${a.name} <span class="verified-badge">✓ VERIFIED</span></div>
                <div class="alumni-class">Class of ${a.cls}</div>
              </div>
              <span class="save-btn ${a.saved ? 'saved' : ''}" onclick="this.classList.toggle('saved');showToast(this.classList.contains('saved')?'Saved to connections':'Removed from saved','')">🔖</span>
            </div>
            <div class="alumni-details">
              <div class="alumni-detail-row"><span>💼</span><span>${a.role} at <strong>${a.company}</strong></span></div>
              <div class="alumni-detail-row"><span>🎓</span><span>${a.course}</span></div>
              <div class="alumni-detail-row"><span>📍</span><span>${a.loc}</span></div>
            </div>
            <div class="alumni-card-actions">
              ${a.connected === 'pending'
                ? `<button class="btn-sm btn-sm-pending">✓ Pending</button><button class="btn-sm btn-sm-outline" onclick="navigateTo('profile')">Message</button>`
                : `<button class="btn-sm btn-sm-primary" onclick="this.textContent='✓ Sent';this.classList.remove('btn-sm-primary');this.classList.add('btn-sm-ghost');showToast('Connection request sent to ${a.name}!','success')">Connect</button><button class="btn-sm btn-sm-outline" onclick="navigateTo('profile')">View Profile</button>`
              }
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderEvents() {
    return `
      <div class="events-toolbar">
        <div class="dir-search">
          <span>🔍</span><input type="text" placeholder="Search events, topics, or venues...">
        </div>
        <div class="event-filters">
          <button class="event-filter-btn active">All</button>
          <button class="event-filter-btn">Workshops</button>
          <button class="event-filter-btn">Reunions</button>
          <button class="event-filter-btn">Webinars</button>
          <button class="event-filter-btn">Gala</button>
        </div>
      </div>

      <div class="time-group">
        <div class="time-label">This Week</div>
        <div class="event-list-hero" onclick="navigateTo('event-detail')">
          <div class="event-hero-img">
            <div style="font-size:64px;position:absolute;inset:0;display:flex;align-items:center;justify-content:center">🎭</div>
            <div class="event-date-badge" style="position:absolute;top:12px;right:12px"><span>OCT</span>12</div>
            <div class="event-seats-tag">🔥 Only 5 seats left</div>
          </div>
          <div style="padding:16px;background:white;border-radius:0 0 var(--radius-lg) var(--radius-lg)">
            <div style="font-size:15px;font-weight:700;color:var(--navy-dark);margin-bottom:6px">Class of 2014 – 10 Year Reunion Gala</div>
            <div style="display:flex;flex-direction:column;gap:3px;margin-bottom:10px">
              <div class="event-meta-row">⏰ <span>7:00 PM – 11:00 PM</span></div>
              <div class="event-meta-row">📍 <span>Grand Hall, Main Campus</span></div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between">
              <div class="attendee-stack"><div class="attendee-dot">A</div><div class="attendee-dot">B</div><div class="attendee-dot">C</div><div class="attendee-dot count">+142</div></div>
              <button class="btn-sm btn-sm-primary" onclick="event.stopPropagation();navigateTo('event-detail')">Book Now →</button>
            </div>
          </div>
        </div>
      </div>

      <div class="time-group">
        <div class="time-label">November</div>
        ${[
          {mon:'NOV',day:'05',title:'AI in Finance: Alumni Workshop',sub:'Online (Zoom) • 2:00 PM EST',tag:'tag-online',tagText:'45 seats available',bell:false},
          {mon:'NOV',day:'18',title:'Regional Meetup: London Chapter',sub:'The Shard, London • 6:30 PM GMT',tag:'tag-waitlist',tagText:'Waitlist only',bell:true},
          {mon:'NOV',day:'25',title:'Career & Networking Night',sub:'AdDU Main Campus • 5:00 PM PHT',tag:'tag-online',tagText:'Open registration',bell:false},
        ].map(ev => `
          <div class="event-compact" onclick="navigateTo('event-detail')">
            <div class="event-compact-date"><div class="month">${ev.mon}</div><div class="day">${ev.day}</div></div>
            <div class="event-compact-body">
              <div class="event-compact-title">${ev.title}</div>
              <div class="event-compact-meta"><span>${ev.sub}</span><span class="event-tag ${ev.tag}">● ${ev.tagText}</span></div>
            </div>
            ${ev.bell ? '<span style="font-size:18px;color:var(--gray-300);align-self:center">🔔</span>' : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderEventDetail() {
    return `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px">
        <button onclick="navigateTo('events')" style="background:var(--gray-100);border:none;border-radius:var(--radius-sm);padding:8px 12px;cursor:pointer;font-family:var(--font);color:var(--navy-dark);font-weight:600">← Back</button>
        <span style="font-size:13px;color:var(--gray-500)">Events / Annual Gala</span>
      </div>

      <div class="event-detail-hero">
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:80px;opacity:.3">🏛️</div>
        <div class="event-detail-overlay">
          <div class="event-detail-tags"><span class="event-detail-tag">GALA</span><span class="event-detail-tag">NETWORKING</span></div>
          <div class="event-detail-title">AdDU Annual Alumni Gala 2024</div>
        </div>
      </div>

      <div class="event-detail-grid">
        <div>
          <div class="detail-card">
            <div class="detail-meta-item"><span class="detail-meta-icon">📅</span><div class="detail-meta-text"><strong>Friday, October 15, 2024 &nbsp; 6:00 PM – 9:00 PM</strong><div class="detail-meta-link">Add to calendar</div></div></div>
            <div class="detail-meta-item"><span class="detail-meta-icon">📍</span><div class="detail-meta-text"><strong>Finster Hall, AdDU Jacinto</strong><span>E. Jacinto St, Davao City, Philippines</span><div class="detail-meta-link">View on map</div></div></div>
          </div>

          <div class="detail-card">
            <div style="font-size:14px;font-weight:700;color:var(--navy-dark);margin-bottom:10px">About Event</div>
            <div class="about-text">Join us for an evening of networking, reconnecting with fellow Blue Knights, and celebrating our university's achievements. The gala will feature a keynote address by the University President and exclusive opportunities to meet distinguished alumni in a relaxed, elegant setting.</div>
            <div style="margin-top:10px"><span class="hashtag">#AdDUAlumni2024</span> <span class="hashtag">#BlueKnights</span> <span class="hashtag">#Networking</span></div>
          </div>

          <div class="detail-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span style="font-size:14px;font-weight:700;color:var(--navy-dark)">Speakers & Guests</span><a href="#" style="font-size:12.5px;color:var(--blue-light);text-decoration:none;font-weight:500">See all</a></div>
            <div class="speakers-row">
              ${[{n:'Fr. Cruz SJ',r:'President',i:'👨‍🏫'},{n:'Maria Santos',r:'Civ. TechCo',i:'👩‍💼'},{n:'James Lee',r:'Alumni Rep',i:'👨‍💻'},{n:'Atty. Rey',r:'Legal Team',i:'👨‍⚖️'}].map(s=>`
                <div class="speaker-item"><div class="speaker-photo">${s.i}</div><div class="speaker-name">${s.n}</div><div class="speaker-role">${s.r}</div></div>
              `).join('')}
            </div>
          </div>

          <div class="detail-card">
            <div style="font-size:14px;font-weight:700;color:var(--navy-dark);margin-bottom:14px">Agenda</div>
            <div class="agenda-list">
              ${[{t:'Welcome Reception',time:'6:00 PM',d:'Registration and welcome drinks at the Finster Lobby.'},{t:"President's Address",time:'7:00 PM',d:'State of the University Address by Fr. Cruz SJ.'},{t:'Networking Dinner',time:'8:00 PM',d:'Buffet dinner featuring local Davao delicacies.'}].map(a=>`
                <div class="agenda-item"><div class="agenda-dot"></div><div class="agenda-time">${a.time}</div><div class="agenda-title">${a.t}</div><div class="agenda-desc">${a.d}</div></div>
              `).join('')}
            </div>
          </div>

          <div class="detail-card">
            <div style="font-size:14px;font-weight:700;color:var(--navy-dark);margin-bottom:10px">Location</div>
            <div class="map-placeholder">🗺️</div>
          </div>
        </div>

        <div>
          <div class="ticket-card">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;opacity:.6;margin-bottom:4px">Ticket Price</div>
            <div class="ticket-price">₱1,500 <small>per person</small></div>
            <div class="ticket-seats">145 seats remaining · 405 registered</div>
            <button class="btn-register" onclick="navigateTo('ticket-confirm')">Register Now →</button>
            <div style="margin-top:12px;font-size:12px;opacity:.5;text-align:center">Secure payment via Finance Office</div>
          </div>
        </div>
      </div>
    `;
  }

  function renderTicketConfirm() {
    const qrSvg = generateQRSvg();
    return `
      <div class="ticket-confirm-wrap">
        <div class="ticket-confirm-header">
          <div class="success-circle">✅</div>
          <div class="ticket-confirm-title">Registration Confirmed</div>
          <div class="ticket-confirm-sub">AdDU Alumni Homecoming 2024</div>
        </div>

        <div class="ticket-wrapper">
          <div class="ticket-event-banner">
            <div class="ticket-confirmed-tag">CONFIRMED</div>
            <div class="ticket-event-name">Blue & Gold Gala Night</div>
            <div class="ticket-event-venue">Finster Hall Auditorium</div>
          </div>

          <div class="ticket-details-grid">
            <div class="ticket-detail-item"><label>Date</label><strong>📅 Dec 08, 2024</strong></div>
            <div class="ticket-detail-item"><label>Time</label><strong>⏰ 6:00 PM</strong></div>
            <div class="ticket-detail-item" style="grid-column:span 2"><label>Guest Name</label><strong>👤 Maria Dela Cruz (BS Bio '15)</strong></div>
          </div>

          <div class="qr-section">
            <div class="qr-code">${qrSvg}</div>
            <div class="qr-label">Present this QR code at the entrance</div>
            <div class="qr-id">TID: ADDU-GALA-8392</div>
          </div>

          <div class="ticket-actions-row">
            <button class="ticket-action-btn calendar" onclick="showToast('📅 Added to calendar!','success')">📅 Add to Calendar</button>
            <button class="ticket-action-btn save" onclick="showToast('💾 Ticket saved!','success')">⬇ Save Ticket</button>
          </div>
        </div>

        <div class="ticket-notice">
          <span class="notice-icon">ℹ️</span>
          <div><strong>Dress Code: Formal Filipiniana</strong><br>Please bring your Alumni ID for verification. Gates open at 5:00 PM.</div>
        </div>
      </div>
    `;
  }

  function generateQRSvg() {
    const size = 100;
    const cells = 10;
    const cellSize = size / cells;
    const pattern = Array.from({length: cells}, (_, r) => Array.from({length: cells}, (_, c) => {
      if (r < 3 && c < 3) return true; if (r < 3 && c > 6) return true;
      if (r > 6 && c < 3) return true; if (r === 1 && c === 1) return false;
      if (r === 1 && c === 8) return false; if (r === 8 && c === 1) return false;
      return Math.random() > 0.55;
    }));
    const rects = pattern.flatMap((row, r) => row.map((on, c) => on ? `<rect x="${c * cellSize}" y="${r * cellSize}" width="${cellSize - 1}" height="${cellSize - 1}" fill="${on ? '#1a2456' : 'transparent'}"/>` : '')).join('');
    return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" class="qr-svg">${rects}<rect x="0" y="0" width="${3*cellSize}" height="${3*cellSize}" fill="none" stroke="#1a2456" stroke-width="1.5"/><rect x="${7*cellSize}" y="0" width="${3*cellSize}" height="${3*cellSize}" fill="none" stroke="#1a2456" stroke-width="1.5"/><rect x="0" y="${7*cellSize}" width="${3*cellSize}" height="${3*cellSize}" fill="none" stroke="#1a2456" stroke-width="1.5"/></svg>`;
  }

  function renderCheckinSuccess() {
    return `
      <div class="checkin-wrap">
        <div class="checkin-icon">
          ✅
          <div class="checkin-star">⭐</div>
        </div>
        <div class="checkin-title">Check-in Success!</div>
        <div class="checkin-sub">You have successfully checked in to the <strong>Alumni Homecoming 2024.</strong></div>

        <div class="badge-card">
          <div class="badge-unlocked-label">🎖 Badge Unlocked</div>
          <div class="badge-icon-big">
            ⭐
            <div class="badge-new-dot">NEW</div>
          </div>
          <div class="badge-name">Blue Knight Spirit</div>
          <div class="badge-points">Earned +100 Blue Points</div>
        </div>

        <button class="btn btn-primary" onclick="navigateTo('profile')">View Badge on Profile</button>
      </div>
    `;
  }

  function renderProfile() {
    return `
      <div class="profile-hero">
        <button class="profile-settings-btn" onclick="navigateTo('notifications')">⚙️</button>
        <div class="profile-photo-wrap">
          <div class="profile-photo">🧑‍💼</div>
          <div class="profile-edit-dot">📷</div>
        </div>
        <div class="profile-name">Alex Johnson</div>
        <div class="profile-verified">✔ VERIFIED</div>
        <div class="profile-class">Class of 2018 • B.S. Computer Science</div>
        <button class="profile-edit-btn">✏️ Edit Profile</button>
      </div>

      <div class="stats-row">
        <div class="stat-card"><span class="stat-icon">📅</span><div><div class="stat-label">Events Attended</div><div class="stat-val">12</div></div></div>
        <div class="stat-card"><span class="stat-icon">👥</span><div><div class="stat-label">Network Size</div><div class="stat-val">584</div></div></div>
      </div>

      <div class="info-card">
        <div class="info-row"><span class="info-icon">💼</span><div class="info-content"><label>Current Position</label><span>Senior Product Designer</span><span style="font-size:12px;color:var(--gray-500)">TechFlow Inc.</span></div></div>
        <div class="info-row"><span class="info-icon">📍</span><div class="info-content"><label>Location</label><span>San Francisco, CA</span></div></div>
        <div class="info-row"><span class="info-icon">✉️</span><div class="info-content"><label>Email</label><span>alex.j@addu.edu.ph</span></div></div>
      </div>

      <div class="section-header"><span class="section-title">Badges & Events</span><button class="see-all">View All</button></div>
      <div class="badges-grid">
        <div class="badge-item"><div class="badge-circle blue">🎓</div><div class="badge-label">Verified Alumni</div><div class="badge-year">Awarded 2018</div></div>
        <div class="badge-item"><div class="badge-circle purple">🏆</div><div class="badge-label">Mentor 2023</div><div class="badge-year">Awarded 2023</div></div>
        <div class="badge-item"><div class="badge-circle yellow">⭐</div><div class="badge-label">Summit Attendee</div><div class="badge-year">Awarded 2022</div></div>
        <div class="badge-item" style="cursor:pointer" onclick="navigateTo('events')"><div class="badge-circle add">+</div><div class="badge-label" style="color:var(--gray-500)">Join events to earn more badges</div></div>
      </div>
    `;
  }

  function renderMatches() {
    return `
      <div class="matches-tabs" id="match-tabs">
        <div class="match-tab active" onclick="this.parentNode.querySelectorAll('.match-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active')">Career Goals</div>
        <div class="match-tab" onclick="this.parentNode.querySelectorAll('.match-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active')">Social</div>
      </div>
      <div class="match-section-title">🏠 Your Top AI Picks</div>
      <div class="match-cards">
        ${[
          {name:'Sarah Jenkins',cls:'ALUMNI \'18',role:'Product Manager @ TechFlow',match:95,skills:['Product Strategy','UX Research','Leadership'],loc:'San Francisco',emoji:'👩‍💼',bg:'linear-gradient(135deg,#c9d6e8,#e8edf5)'},
          {name:'Marcus Williams',cls:'ALUMNI \'19',role:'Engineering Lead @ Meta',match:88,skills:['System Design','Leadership'],loc:'Seattle',emoji:'👨‍💻',bg:'linear-gradient(135deg,#d6c9e8,#ede8f5)'},
          {name:'Ana Reyes',cls:'ALUMNI \'20',role:'Data Scientist @ Stripe',match:81,skills:['Machine Learning','Analytics'],loc:'New York',emoji:'👩‍🔬',bg:'linear-gradient(135deg,#c9e8d6,#e8f5ed)'},
        ].map(m=>`
          <div class="match-card" onclick="navigateTo('request-mentor')">
            <div class="match-card-img" style="background:${m.bg}">
              <div style="font-size:72px">${m.emoji}</div>
              <div class="match-pct">✅ ${m.match}% Match</div>
            </div>
            <div class="match-card-body">
              <div style="display:flex;align-items:flex-start;justify-content:space-between">
                <div>
                  <div class="match-name">${m.name}</div>
                  <div class="match-class-tag">${m.cls}</div>
                  <div class="match-role">${m.role}</div>
                </div>
                <span style="color:var(--gray-300);cursor:pointer;font-size:18px">🔖</span>
              </div>
              <div class="skill-tags">${m.skills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>
              <div class="match-location">📍 ${m.loc}</div>
              <button class="connect-btn" onclick="event.stopPropagation();this.textContent='✓ Request Sent';this.style.background='var(--green)';showToast('Connection request sent!','success')">Connect</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderCalendar() {
    const year = state.currentCalMonth.getFullYear();
    const month = state.currentCalMonth.getMonth();
    const monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'][month];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const eventDays = [5, 8, 12, 18, 24];

    let calCells = '';
    for (let i = 0; i < firstDay; i++) calCells += `<div class="cal-cell other-month">${new Date(year, month, -firstDay + i + 1).getDate()}</div>`;
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = d === 5 && month === 9;
      const hasEvent = eventDays.includes(d);
      calCells += `<div class="cal-cell ${isToday?'today':''} ${hasEvent?'has-event':''}" onclick="showToast('Oct ${d} - Blue Knight event','')">  ${d}</div>`;
    }

    return `
      <div class="calendar-grid">
        <div>
          <div class="view-toggle">
            <button class="view-btn ${state.calView==='month'?'active':''}" onclick="state.calView='month';navigateTo('calendar')">📅 Month</button>
            <button class="view-btn ${state.calView==='list'?'active':''}" onclick="state.calView='list';navigateTo('calendar')">☰ List</button>
          </div>
          <div class="sync-toggle">
            <span>🔄 Sync to Phone</span>
            <div class="toggle-switch ${state.calSynced?'':'off'}" onclick="state.calSynced=!state.calSynced;navigateTo('calendar');showToast(state.calSynced?'Synced to phone calendar':'Sync disabled','')"></div>
          </div>
          <div class="cal-widget">
            <div class="cal-nav">
              <strong>${monthName} ${year}</strong>
              <div style="display:flex;gap:4px">
                <button class="cal-arrow" onclick="state.currentCalMonth=new Date(${year},${month}-1,1);navigateTo('calendar')">‹</button>
                <button class="cal-arrow" onclick="state.currentCalMonth=new Date(${year},${month}+1,1);navigateTo('calendar')">›</button>
              </div>
            </div>
            <div class="cal-days-header">
              ${['S','M','T','W','T','F','S'].map(d=>`<div class="cal-day-name">${d}</div>`).join('')}
            </div>
            <div class="cal-cells">${calCells}</div>
            <div class="cal-quick">
              <button class="quick-add-btn">+ Meeting</button>
              <button class="quick-add-btn">+ Reminder</button>
            </div>
          </div>
        </div>

        <div>
          <div class="section-title" style="margin-bottom:14px">Upcoming Events</div>
          <div class="upcoming-cal-events">
            ${[
              {m:'OCT',d:'08',title:'AI in Education...',sub:'Tech Hall A • 10:00 AM',tag:'MATCH ON',rsvp:true},
              {m:'OCT',d:'12',title:'Alumni Coffee Mixer',sub:'Campus Cafe • 09:30 AM',tag:'',rsvp:false},
              {m:'OCT',d:'18',title:'Career Fair 2023',sub:'Grand Hall • 11:00 AM',tag:'MATCH ON',rsvp:true},
            ].map(ev=>`
              <div class="cal-event-card" onclick="navigateTo('event-detail')">
                <div class="cal-event-date-box"><div class="m">${ev.m}</div><div class="d">${ev.d}</div></div>
                <div class="cal-event-info">
                  <div class="cal-event-title">${ev.title}</div>
                  <div class="cal-event-sub">${ev.sub}</div>
                  ${ev.tag ? `<span class="event-tag tag-match" style="display:inline-flex;margin-top:4px">${ev.tag}</span>` : ''}
                </div>
                ${ev.rsvp ? '<button class="rsvp-btn" onclick="event.stopPropagation();this.textContent=\'✓ RSVPed\';this.style.background=\'var(--green)\';showToast(\'RSVP confirmed!\',\'success\')">RSVP Now</button>' : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <button class="fab" onclick="showToast('➕ Create new event (demo)','')">+</button>
    `;
  }

  function renderNotifications() {
    const N = state.notifSettings;
    const toggle = (key, el) => {
      N[key] = !N[key];
      const sw = el.querySelector('.toggle-switch');
      if (sw) { if (N[key]) sw.classList.remove('off'); else sw.classList.add('off'); }
    };
    return `
      <div class="notif-tabs">
        <div class="notif-tab">History</div>
        <div class="notif-tab active">Settings</div>
      </div>

      <div class="notif-section">
        <div class="notif-section-label">Channels</div>
        <div class="notif-item">
          <div class="notif-row">
            <span class="notif-icon">📲</span>
            <div class="notif-text"><strong>Push Notifications</strong><span>Instant alerts on your device</span></div>
            <div class="notif-toggle" onclick="state.notifSettings.push=!state.notifSettings.push;navigateTo('notifications')">
              <div class="toggle-switch ${N.push?'':'off'}"></div>
            </div>
          </div>
        </div>
        <div class="notif-item">
          <div class="notif-row">
            <span class="notif-icon">✉️</span>
            <div class="notif-text"><strong>Email Digest</strong><span>Daily summary of activity</span></div>
            <div class="notif-toggle" onclick="state.notifSettings.email=!state.notifSettings.email;navigateTo('notifications')">
              <div class="toggle-switch ${N.email?'':'off'}"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="notif-section">
        <div class="notif-section-label">Preferences</div>
        ${[
          {icon:'📅',label:'Event Reminders',subs:[{key:'eventUpcoming',label:'Upcoming events'},{key:'eventNearby',label:'New events near me'}]},
          {icon:'👥',label:'Networking',subs:[{key:'connections',label:'Connection requests'},{key:'profileViews',label:'Profile views'}]},
          {icon:'🎓',label:'Mentorship',subs:[{key:'mentorMatches',label:'New mentor matches'},{key:'sessionReminders',label:'Session reminders'},{key:'feedbackRequests',label:'Feedback requests'}]},
        ].map(sec=>`
          <div class="notif-item">
            <div style="font-size:13.5px;font-weight:700;color:var(--navy-dark);display:flex;align-items:center;gap:8px;margin-bottom:6px"><span>${sec.icon}</span>${sec.label}</div>
            ${sec.subs.map(sub=>`
              <div class="notif-sub-item">
                <span class="notif-sub-label">${sub.label}</span>
                <div onclick="state.notifSettings['${sub.key}']=!state.notifSettings['${sub.key}'];navigateTo('notifications')">
                  <div class="toggle-switch ${N[sub.key]?'':'off'}" style="width:36px;height:20px"></div>
                </div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>

      <button class="reset-notif-btn" onclick="Object.keys(state.notifSettings).forEach(k=>state.notifSettings[k]=false);navigateTo('notifications');showToast('Notification settings reset','')">Reset all notification settings</button>
    `;
  }

  function renderMentorship() {
    return `
      <div class="mentor-filters">
        <button class="filter-chip active">✔ Open to Mentor</button>
        <button class="filter-chip">💼 Industry ▾</button>
        <button class="filter-chip">📍 Location ▾</button>
      </div>

      <div class="mentor-section">
        <div class="mentor-section-title">Recommended for You <button class="see-all" style="font-size:13px">See All</button></div>
        <div class="mentor-cards">
          ${[
            {name:'Sarah Jenkins',role:'Senior Product Manager at Google',match:98,skills:['Product Strategy','UX Research','Leadership'],batch:'BS CS \'15',emoji:'👩‍💼',bg:'linear-gradient(135deg,#c9d6e8,#e8edf5)'},
            {name:'Michael Chen',role:'Director of Engineering at Stripe',match:95,skills:['System Design','Scalability','FinTech'],batch:'BS IT \'12',emoji:'👨‍💻',bg:'linear-gradient(135deg,#d6c9e8,#ede8f5)'},
          ].map(m=>`
            <div class="mentor-card">
              <div class="mentor-card-top">
                <div class="mentor-photo" style="background:var(--blue)">${m.emoji}<div class="mentor-online"></div></div>
                <div style="flex:1">
                  <div class="mentor-name">${m.name} <span style="color:var(--gray-300);cursor:pointer;float:right;font-size:16px">🔖</span></div>
                  <div class="mentor-role">${m.role}</div>
                  <div><span class="match-pct-tag">✅ ${m.match}% Match</span></div>
                </div>
              </div>
              <div class="skill-tags">${m.skills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>
              <div style="font-size:12px;color:var(--gray-500);margin:8px 0">🎓 ${m.batch}</div>
              <button class="connect-btn" onclick="navigateTo('request-mentor')">Connect</button>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="mentor-section">
        <div class="mentor-section-title">Recently Active</div>
        <div class="recently-active">
          ${[
            {n:'Emily Zhang',r:'Marketing Lead at Spotify',e:'👩'},
            {n:'David Kim',r:'Founder at Stealth Startup',e:'👨'},
            {n:'Lisa Wong',r:'Senior Data Scientist at Uber',e:'👩‍🔬'},
          ].map(m=>`
            <div class="recent-mentor">
              <div class="mentor-photo" style="background:var(--navy-mid);width:40px;height:40px;font-size:18px">${m.e}</div>
              <div class="recent-mentor-info"><div class="recent-mentor-name">${m.n}</div><div class="recent-mentor-role">${m.r}</div></div>
              <span class="add-mentor-btn" onclick="showToast('Connection request sent!','success')">➕</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="mentor-section">
        <div class="mentor-section-title">Explore by Industry</div>
        <div class="industry-grid">
          <div class="industry-card tech" onclick="showToast('Browsing Technology mentors...','')">💻 Technology</div>
          <div class="industry-card finance" onclick="showToast('Browsing Finance mentors...','')">💰 Finance</div>
          <div class="industry-card health" onclick="showToast('Browsing Healthcare mentors...','')">🏥 Healthcare</div>
          <div class="industry-card arts" onclick="showToast('Browsing Creative Arts mentors...','')">🎨 Creative Arts</div>
        </div>
      </div>
    `;
  }

  function renderRequestMentor() {
    return `
      <div class="request-mentor-wrap">
        <button onclick="navigateTo('mentorship')" style="background:var(--gray-100);border:none;border-radius:var(--radius-sm);padding:8px 12px;cursor:pointer;font-family:var(--font);color:var(--navy-dark);font-weight:600;margin-bottom:18px">← Request Mentorship</button>
        <div class="addu-badge">🎓 ATENEO DE DAVAO ALUMNI</div>

        <div class="mentor-profile-card">
          <div class="mentor-photo" style="background:var(--blue);width:56px;height:56px;font-size:24px">👩‍🔬</div>
          <div style="flex:1">
            <div style="font-size:16px;font-weight:700;color:var(--navy-dark)">Dr. Emily Chen</div>
            <div style="font-size:13px;color:var(--gray-500)">Senior Research Scientist</div>
            <div style="font-size:12.5px;color:var(--gray-500)">BioTech • Class of 2010</div>
            <div class="availability-box"><span>📅</span><span>Usually responds within 2 days</span></div>
          </div>
        </div>

        <div class="intro-section">
          <h3>Warm Introduction</h3>
          <div class="intro-desc">Introduce yourself and explain why you're interested in mentorship. As a fellow Atenean, a personalized message helps build a strong connection.</div>
          <label class="form-label" style="display:flex;justify-content:space-between">Your Message <span style="font-size:11px;color:var(--gray-500)">Max 500 chars</span></label>
          <textarea class="msg-area" id="mentor-msg" placeholder="Hi Dr. Chen, I'm a recent AdDU grad interested in your work...." oninput="document.getElementById('char-count').textContent=this.value.length+'/500'">${state.msgText}</textarea>
          <div class="char-count" id="char-count">${state.msgText.length}/500</div>
          <div style="font-size:12.5px;font-weight:600;color:var(--navy-dark);margin:12px 0 6px">QUICK TOPICS</div>
          <div class="quick-topics">
            ${['Research Advice','Career Pivot','Resume Review','Industry Insights','Grad School'].map(t=>`
              <button class="topic-chip ${state.topicChips.includes(t)?'active':''}" onclick="state.topicChips.includes('${t}')?state.topicChips.splice(state.topicChips.indexOf('${t}'),1):state.topicChips.push('${t}');state.msgText=document.getElementById('mentor-msg').value;navigateTo('request-mentor')">${t}</button>
            `).join('')}
          </div>
        </div>

        <div class="focus-areas-box">
          <span class="focus-icon">💡</span>
          <div class="focus-text">Dr. Chen specializes in <strong>Biotechnology</strong>, <strong>Data Science</strong>, and <strong>Career Development</strong>.</div>
        </div>

        <button class="send-request-btn" onclick="showToast('✅ Mentorship request sent to Dr. Chen!','success');navigateTo('mentorship')">➤ Send Request</button>
        <div class="agreement-text">By sending, you agree to the <a href="#">AdDU Alumni Mentorship Guidelines</a>.</div>
      </div>
    `;
  }

  function renderAdmin() {
    return `
      <div class="admin-hero">
        <div>
          <div class="admin-hero-title">Staff Command Center · ADDU ALUMNI ADMIN</div>
          <div class="admin-hero-name">Welcome back, Sarah</div>
          <div class="admin-status"><span class="status-dot"></span> System Status: Operational</div>
        </div>
        <div style="display:flex;gap:10px">
          <div class="topbar-btn" style="background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.2);color:white">🔔</div>
          <div class="topbar-btn" style="background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.2);color:white">👤</div>
        </div>
      </div>

      <div class="admin-metrics">
        <div class="metric-card-big" style="grid-column:span 2">
          <div class="metric-label">👥 Total Active Users</div>
          <div class="metric-value">12,432</div>
          <div class="metric-change change-up">↗ 5.2% from last month</div>
        </div>
        <div class="metric-card-sm"><div class="metric-sm-label" style="display:flex;align-items:center;gap:6px"><span style="color:var(--green)">✔</span> +12%</div><div class="metric-sm-val">48</div><div class="metric-sm-sub">Pending Verifications</div></div>
        <div class="metric-card-sm"><div class="metric-sm-label" style="display:flex;align-items:center;gap:6px"><span>📊</span> YTD</div><div class="metric-sm-val" style="font-size:18px">$42.3k</div><div class="metric-sm-sub">Total Event Revenue</div></div>
      </div>

      <div class="section-header"><span class="section-title">Admin Actions</span><button class="see-all">Customize</button></div>
      <div class="admin-actions-grid">
        <div class="admin-action-card" onclick="navigateTo('vqueue')"><div class="admin-action-bg verify">🎓</div><div class="admin-action-label">Verify Alumni</div></div>
        <div class="admin-action-card" onclick="navigateTo('eventmgr')"><div class="admin-action-bg create">🗓️</div><div class="admin-action-label">Create Event</div></div>
        <div class="admin-action-card" onclick="showToast('Send alert feature opened','')"><div class="admin-action-bg alert">📢</div><div class="admin-action-label">Send Alert</div></div>
        <div class="admin-action-card" onclick="navigateTo('analytics')"><div class="admin-action-bg users">👥</div><div class="admin-action-label">Manage Users</div></div>
      </div>

      <div class="section-header"><span class="section-title">Recent Logs</span><button class="see-all">View Log</button></div>
      <div class="logs-list">
        <div class="log-item">
          <div class="log-avatar">MC</div>
          <div class="log-body"><div class="log-title">Michael Chen applied for ve...</div><div class="log-sub">Class of 2019 • BS Engineering</div></div>
          <div class="log-time">2m ago</div>
        </div>
        <div class="log-item">
          <div class="log-icon event">🗓️</div>
          <div class="log-body"><div class="log-title">New Event Created</div><div class="log-sub">"Alumni Tech Summit 2024"</div></div>
          <div class="log-time">1h ago</div>
        </div>
        <div class="log-item">
          <div class="log-icon alert">⚠️</div>
          <div class="log-body"><div class="log-title">System Alert</div><div class="log-sub">High traffic detected on registration</div></div>
          <div class="log-time">3h ago</div>
        </div>
      </div>
    `;
  }

  function renderVQueue() {
    const items = [
      {name:'Juan Dela Cruz',sub:'BS Computer Science • Class of 2021',status:'pending'},
      {name:'Maria Clara',sub:'AB International Studies • Class of 2019',status:'pending'},
      {name:'Antonone L.',sub:'Bachelor of Laws • Class of 2018',status:'approved'},
      {name:'Antonone L.',sub:'Bachelor of Laws • Class of 2018',status:'approved'},
      {name:'Juan Protasi...',sub:'BS Architecture • Class of 2020',status:'pending'},
    ];
    return `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px">
        <h2 style="font-family:var(--font-display);font-size:20px;color:var(--navy-dark)">Verification Queue</h2>
        <span style="font-size:13px;color:var(--gray-500);margin-left:8px">Application 8 of 10 · <span style="color:var(--blue);font-weight:600">80% Reviewed</span></span>
      </div>
      <div class="vq-wrap">
        <div class="vq-list-panel">
          <div class="vq-list-header"><span class="vq-list-title">Alumni Requests (10)</span><span class="vq-sort">▼ Sort by Date</span></div>
          <div class="vq-search"><input type="text" placeholder="Search alumni applications..."></div>
          <div class="vq-items">
            ${items.map((item, i) => `
              <div class="vq-item ${state.selectedVqItem === i ? 'selected' : ''}" onclick="state.selectedVqItem=${i};navigateTo('vqueue')">
                <div class="log-avatar" style="width:36px;height:36px;font-size:13px">${item.name.slice(0,2).toUpperCase()}</div>
                <div class="vq-item-info"><div class="vq-item-name">${item.name}</div><div class="vq-item-sub">${item.sub}</div></div>
                <span class="status-pill ${item.status==='pending'?'pill-pending':'pill-approved'}">${item.status==='pending'?'Pending':'Approved'}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="vq-detail">
          <div class="vq-detail-header">
            <div class="vq-progress">
              <span>Application 8 of 10</span>
              <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:80%"></div></div>
              <span>80% Reviewed</span>
            </div>
            <button style="background:none;border:none;color:var(--blue-light);font-size:13px;cursor:pointer;font-family:var(--font);font-weight:600">Help</button>
          </div>

          <div class="vq-doc-section">
            <div class="vq-doc-label">SUBMITTED DOCUMENT <span class="vq-doc-expand">↗ Expand</span></div>
            <div class="vq-doc-img">
              <div class="doc-card-mock">
                <div class="doc-card-title">University<br>Student I.A.D.</div>
                <div style="display:flex;justify-content:center;margin:8px 0;font-size:28px">🧑</div>
                <div class="doc-card-row"></div><div class="doc-card-row medium"></div><div class="doc-card-row short"></div><div class="doc-card-row"></div>
              </div>
            </div>
            <div class="vq-doc-filename">🔍 Identity Proof &nbsp;|&nbsp; Student_ID_Front.jpg</div>
          </div>

          <div class="vq-reg-section">
            <div class="vq-reg-label">Registration Details <span class="status-pill pill-pending">⏳ Pending Review</span></div>
            <div class="vq-reg-grid">
              <div class="vq-reg-item"><label>Full Name</label><strong>Alex Knight</strong></div>
              <div class="vq-reg-item"><label>Student ID</label><strong>9021045</strong></div>
              <div class="vq-reg-item"><label>Major</label><strong>Computer Science</strong></div>
              <div class="vq-reg-item"><label>Graduation Year</label><strong>2023</strong></div>
              <div class="vq-reg-item"><label>Email</label><strong style="color:var(--blue-light)">alex.k@addu.edu.ph</strong></div>
              <div class="vq-reg-item"><label>Status</label><strong>Alumni</strong></div>
            </div>
          </div>

          <div class="vq-actions">
            <button class="approve-btn" onclick="showToast('✅ Alex Knight approved as Blue Knight!','success');navigateTo('vqueue')">✅ Approve (Blue Knight)</button>
            <div class="vq-secondary-actions">
              <button class="req-info-btn" onclick="showToast('📧 Info request sent','')">❓ Request Info</button>
              <button class="reject-btn" onclick="showToast('❌ Application rejected','error')">✕ Reject</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderAnalytics() {
    const bars = [20, 60, 80, 100, 70, 45, 30];
    const labels = ['4PM', '5PM', '6PM', '7PM', '7:30PM', '8PM', '9PM'];
    return `
      <div class="report-header">
        <div>
          <div class="report-event-name">AdDU Grand Alumni Homecoming</div>
          <div class="report-event-sub">Martin Hall • Dec 12, 2023</div>
          <button class="export-btn">⬆ Export to Spreadsheet</button>
        </div>
        <span class="finalized-tag">Finalized</span>
      </div>

      <div class="report-metrics">
        <div class="report-metric"><div class="r-metric-label">💰 Total Revenue</div><div class="r-metric-value" style="color:var(--navy-dark)">₱842,450</div><div class="r-metric-sub sub-green">↗ +15% vs 2022</div></div>
        <div class="report-metric"><div class="r-metric-label">👥 Registrants</div><div class="r-metric-value">1,250</div><div class="r-metric-sub sub-red">↗ Sold Out</div></div>
        <div class="report-metric"><div class="r-metric-label">✅ Actual Check-ins</div><div class="r-metric-value">1,108</div><div class="r-metric-sub" style="color:var(--gray-500)">88.6% Attendance Rate</div></div>
        <div class="report-metric"><div class="r-metric-label">💝 Donations</div><div class="r-metric-value" style="font-size:20px">₱125k</div><div class="r-metric-sub" style="color:var(--gray-500)">Scholarship Fund</div></div>
      </div>

      <div class="chart-card">
        <h3>Arrival Times</h3>
        <div class="chart-sub">Peak entry: 5:30 PM – 6:30 PM &nbsp;|&nbsp; Post-Event</div>
        <div class="bar-chart">
          ${bars.map((h,i)=>`
            <div class="bar-col">
              <div class="bar" style="height:${h}px;background:${h===100?'var(--navy)':'var(--blue-light)'}"></div>
              <div class="bar-label">${labels[i]}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="chart-card">
        <h3>Demographics Breakdown</h3>
        ${[{label:'Alumni (College)',pct:72,color:'var(--navy)',icon:'🎓'},{label:'Alumni (High School)',pct:18,color:'var(--orange)',icon:'🏫'},{label:'Faculty & Guests',pct:10,color:'var(--gray-300)',icon:'👤'}].map(d=>`
          <div class="demo-row">
            <div class="demo-icon">${d.icon}</div>
            <div class="demo-label">${d.label}</div>
            <div class="demo-bar"><div class="demo-bar-fill" style="width:${d.pct}%;background:${d.color}"></div></div>
            <div class="demo-pct">${d.pct}%</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderEventMgr() {
    return `
      <div class="event-mgr-stats">
        <div class="emgr-stat"><div class="emgr-stat-val">12</div><div class="emgr-stat-label">Active</div></div>
        <div class="emgr-stat pending"><div class="emgr-stat-val">5</div><div class="emgr-stat-label">Pending</div></div>
        <div class="emgr-stat"><div class="emgr-stat-val">48</div><div class="emgr-stat-label">Done</div></div>
      </div>

      <div class="section-title" style="margin-bottom:14px">⚡ Quick Actions</div>
      <div class="emgr-actions">
        <div class="emgr-action-card" onclick="showToast('Opening Create Event form...','')">
          <div class="emgr-action-icon icon-bg-blue">➕</div>
          <div class="emgr-action-text"><strong>Create New Event</strong><span>Draft a new campus activity or webinar</span></div>
          <span class="emgr-action-arrow">›</span>
        </div>
        <div class="emgr-action-card" onclick="navigateTo('inv-builder')">
          <div class="emgr-action-icon icon-bg-orange">✉️</div>
          <div class="emgr-action-text"><strong>Targeted Invitations</strong><span>Send personalized invites to cohorts</span></div>
          <span class="emgr-action-arrow">›</span>
        </div>
        <div class="emgr-action-card" onclick="navigateTo('analytics')">
          <div class="emgr-action-icon icon-bg-green">📊</div>
          <div class="emgr-action-text"><strong>Attendance Reports</strong><span>Analyze participation and feedback</span></div>
          <span class="emgr-action-arrow">›</span>
        </div>
      </div>

      <div class="section-header"><span class="section-title">📅 Recent & Upcoming</span><button class="see-all">See All</button></div>
      <div class="recent-events-list">
        ${[
          {mon:'Oct',day:'24',title:'Ignatian Leaders...',sub:'Finster Auditorium',status:'live',statusLabel:'Live'},
          {mon:'Nov',day:'02',title:'Tech Career Expo:...',sub:'Not scheduled yet',status:'draft',statusLabel:'Draft'},
          {mon:'Oct',day:'15',title:'Mental Health Aw...',sub:'450 Attendees',status:'done',statusLabel:'Completed'},
        ].map(ev=>`
          <div class="recent-event-item" onclick="navigateTo('event-detail')">
            <div class="re-date"><div class="mon">${ev.mon}</div><div class="day">${ev.day}</div></div>
            <div class="re-info">
              <div style="display:flex;align-items:center;gap:6px"><span class="re-status status-${ev.status}">${ev.statusLabel}</span>${ev.status==='live'?'<span style="font-size:11px;color:var(--gray-500)">→ Hybrid Event</span>':''}</div>
              <div class="re-title">${ev.title}</div>
              <div class="re-sub">📍 ${ev.sub}</div>
            </div>
            <span class="re-arrow">›</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderInvBuilder() {
    return `
      <div class="inv-builder-wrap">
        <button onclick="navigateTo('eventmgr')" style="background:var(--gray-100);border:none;border-radius:var(--radius-sm);padding:8px 12px;cursor:pointer;font-family:var(--font);color:var(--navy-dark);font-weight:600;margin-bottom:18px">← Invitation Builder</button>

        <div class="inv-section">
          <div class="inv-section-title">Target Audience <span class="inv-step-tag">Step 1/2</span></div>
          <div class="inv-section-sub">Filter verified alumni to send targeted event invitations.</div>
          <div class="filter-select-row">
            <select class="filter-select form-control" style="border-radius:20px;padding:6px 12px;width:auto;cursor:pointer"><option>📅 Batch Year</option><option>2015-2020</option><option>2020-2024</option></select>
            <select class="filter-select form-control" style="border-radius:20px;padding:6px 12px;width:auto;cursor:pointer"><option>💼 Industry</option><option>Technology</option><option>Finance</option><option>Healthcare</option></select>
            <select class="filter-select form-control" style="border-radius:20px;padding:6px 12px;width:auto;cursor:pointer"><option>📍 Location</option><option>Davao City</option><option>Manila</option><option>Abroad</option></select>
            <button style="background:var(--gray-100);border:1.5px dashed var(--gray-300);border-radius:20px;padding:6px 14px;cursor:pointer;font-size:13px;color:var(--gray-500)">+ Add</button>
          </div>

          <div style="font-size:10.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--gray-500);margin-bottom:8px">• Selected Criteria</div>
          <div class="criteria-tags">
            <span class="criteria-tag">2015-2020 <button onclick="showToast('Filter removed','')">×</button></span>
            <span class="criteria-tag">Technology <button onclick="showToast('Filter removed','')">×</button></span>
            <span class="criteria-tag">New York, NY <button onclick="showToast('Filter removed','')">×</button></span>
          </div>

          <div class="reach-counter">
            <div class="attendee-stack"><div class="attendee-dot">A</div><div class="attendee-dot">B</div><div class="attendee-dot">C</div><div class="attendee-dot count">+447</div></div>
            <div><div class="reach-num">~450 <span style="font-size:14px;font-weight:400;color:var(--gray-500)">users</span></div><div class="reach-label">Estimated Reach</div></div>
          </div>
        </div>

        <div class="inv-section">
          <div class="inv-section-title">Invitation Preview <button class="see-all">Edit Message</button></div>
          <div class="inv-preview-card">
            <div class="inv-preview-banner">
              <div class="inv-preview-banner-text">
                <div class="label">UPCOMING EVENT</div>
                <div class="title">Annual Tech Alumni Meetup 2024</div>
              </div>
            </div>
            <div class="inv-preview-body">
              <div class="inv-preview-meta"><span>📅 Oct 24</span><span>⏰ 6:00 PM</span></div>
              <div class="inv-preview-desc">Join us for an evening of networking and insights with fellow alumni in the tech industry. Refreshments provided.</div>
            </div>
          </div>
        </div>

        <button class="send-bulk-btn" onclick="showToast('✅ Bulk invitation sent to 450 alumni!','success');navigateTo('eventmgr')">➤ Send Bulk Invite (450)</button>
      </div>
    `;
  }

  // ─── SCREENS MAP ─────────────────────────────────────────────────────────────
  const screens = {
    dashboard:       { title: 'Home Dashboard',       render: renderDashboard },
    directory:       { title: 'Alumni Directory',      render: renderDirectory },
    events:          { title: 'AdDU Events',            render: renderEvents },
    calendar:        { title: 'Personalized Calendar', render: renderCalendar },
    matches:         { title: 'Suggested Matches',     render: renderMatches },
    mentorship:      { title: 'Mentorship Hub',        render: renderMentorship },
    'request-mentor':{ title: 'Request Mentorship',    render: renderRequestMentor },
    profile:         { title: 'My Profile',             render: renderProfile },
    notifications:   { title: 'Notification Settings', render: renderNotifications },
    admin:           { title: 'Staff Command Center',  render: renderAdmin },
    vqueue:          { title: 'Verification Queue',    render: renderVQueue },
    analytics:       { title: 'Analytics Report',      render: renderAnalytics },
    eventmgr:        { title: 'Event Manager',          render: renderEventMgr },
    'inv-builder':   { title: 'Invitation Builder',    render: renderInvBuilder },
    'event-detail':  { title: 'Event Details',          render: renderEventDetail },
    'ticket-confirm':{ title: 'Ticket Details',         render: renderTicketConfirm },
    'checkin-success':{ title: 'Check-in Success',      render: renderCheckinSuccess },
  };

  // ─── NAVIGATION ──────────────────────────────────────────────────────────────
  window.navigateTo = function(screenId) {
    state.currentScreen = screenId;
    const screen = screens[screenId];
    if (!screen) return;

    // update topbar
    document.getElementById('topbar-title').textContent = screen.title;

    // update nav highlight
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.screen === screenId);
    });

    // render content
    pageContent.innerHTML = screen.render();

    // attach filter button toggle
    pageContent.querySelectorAll('.event-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.event-filters').querySelectorAll('.event-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    pageContent.scrollTop = 0;
  };

  function showForgotPassword() {
    document.getElementById('screen-login').classList.remove('active');
    document.getElementById('screen-forgot').classList.add('active');
  }

  function showVerification() {
    document.getElementById('screen-login').classList.remove('active');
    state.verifyStep = 1;
    const vScreen = document.getElementById('screen-verify');
    renderVerifyStep(vScreen.querySelector('#verify-card-inner'));
    vScreen.classList.add('active');
  }

  // ─── TOAST ───────────────────────────────────────────────────────────────────
  window.showToast = function(msg, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type || ''}`;
    toast.textContent = msg;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  };

  // ─── INIT ─────────────────────────────────────────────────────────────────────
  const loginScreen = renderLoginScreen();
  const forgotScreen = renderForgotScreen();
  const verifyScreen = renderVerifyScreen();

  loginScreen.classList.add('active');

  // sidebar nav
  sidebar.querySelectorAll('.nav-item[data-screen]').forEach(item => {
    item.addEventListener('click', () => {
      if (!state.isLoggedIn) { showToast('Please login first', 'error'); return; }
      navigateTo(item.dataset.screen);
    });
  });

  document.getElementById('sidebar-user-btn').addEventListener('click', () => {
    if (state.isLoggedIn) navigateTo('profile');
  });

  document.getElementById('notif-topbar-btn').addEventListener('click', () => {
    if (state.isLoggedIn) navigateTo('notifications');
  });
  document.getElementById('profile-topbar-btn').addEventListener('click', () => {
    if (state.isLoggedIn) navigateTo('profile');
  });
  document.getElementById('logout-btn').addEventListener('click', () => {
    state.isLoggedIn = false;
    loginScreen.classList.add('active');
    showToast('Logged out successfully', '');
  });

  // make navigateTo global for inline onclick
  window.state = state;
  window.renderVerifyStep = renderVerifyStep;

  // initial content
  navigateTo('dashboard');

})();