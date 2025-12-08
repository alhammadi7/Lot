<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>Busultan – حاسبة اللوت المتقدمة</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        sans-serif;
    }

    body {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 10px;
      color: var(--text-main);
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    /* الثيم الليلي */
    body.theme-dark {
      --text-main: #f5f7ff;
      --shell-border-gradient: linear-gradient(
        135deg,
        rgba(90, 151, 255, 0.9),
        rgba(255, 145, 77, 0.9)
      );
      --card-bg: rgba(5, 9, 25, 0.9);
      --panel-bg: rgba(8, 12, 32, 0.96);
      --results-bg: rgba(6, 10, 28, 0.96);
      --resultbox-bg: rgba(10, 16, 36, 0.98);
      --chip-bg: rgba(0, 0, 0, 0.25);
      --chip-border: rgba(255, 255, 255, 0.06);

      background-image:
        radial-gradient(circle at top left, rgba(2, 8, 23, 0.8), rgba(2, 6, 23, 0.95)),
        url("busultan-bg.jpg");
    }

    /* الثيم النهاري */
    body.theme-light {
      --text-main: #111320;
      --shell-border-gradient: linear-gradient(
        135deg,
        #4b8bff,
        #ffb36b
      );
      --card-bg: rgba(255, 255, 255, 0.96);
      --panel-bg: rgba(255, 255, 255, 0.98);
      --results-bg: rgba(245, 248, 255, 0.98);
      --resultbox-bg: rgba(235, 240, 255, 0.98);
      --chip-bg: rgba(255, 255, 255, 0.9);
      --chip-border: rgba(0, 0, 0, 0.06);

      background-image:
        linear-gradient(135deg, rgba(240, 244, 255, 0.9), rgba(210, 225, 255, 0.9)),
        url("busultan-bg.jpg");
    }

    .shell {
      width: 100%;
      max-width: 1120px;
      border-radius: 26px;
      padding: 2px;
      background: var(--shell-border-gradient);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9);
    }

    .card {
      width: 100%;
      border-radius: 24px;
      background: var(--card-bg);
      padding: 22px 22px 24px;
      backdrop-filter: blur(16px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
    }

    .brand-wrap {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .brand {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .brand-title {
      font-weight: 700;
      letter-spacing: 0.05em;
      font-size: 20px;
    }

    .brand-sub {
      font-size: 11px;
      opacity: 0.78;
    }

    .badge {
      font-size: 10px;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.06);
      margin-right: 4px;
    }

    .header-tabs {
      display: inline-flex;
      gap: 6px;
      padding: 3px;
      border-radius: 999px;
      background: var(--chip-bg);
      border: 1px solid var(--chip-border);
      margin-top: 6px;
    }

    .header-tab {
      font-size: 10px;
      padding: 4px 9px;
      border-radius: 999px;
      opacity: 0.8;
    }

    .header-tab.active {
      background: linear-gradient(135deg, #3f8cff, #945bff);
      opacity: 1;
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .pill {
      border-radius: 999px;
      border: 1px solid var(--chip-border);
      background: var(--chip-bg);
      padding: 6px 10px;
      font-size: 11px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: inherit;
    }

    .pill:hover {
      opacity: 0.9;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 6px;
      text-align: center;
    }

    .subtitle {
      font-size: 11px;
      text-align: center;
      opacity: 0.82;
      margin-bottom: 18px;
    }

    .layout {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .panel {
      border-radius: 18px;
      background: var(--panel-bg);
      border: 1px solid rgba(255, 255, 255, 0.07);
      padding: 14px 14px 18px;
      backdrop-filter: blur(10px);
    }

    .panel-title {
      font-size: 12px;
      opacity: 0.9;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .panel-title span {
      font-size: 10px;
      opacity: 0.7;
    }

    form {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px 16px;
    }

    @media (max-width: 900px) {
      form {
        grid-template-columns: 1fr;
      }
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 12px;
    }

    label {
      opacity: 0.96;
    }

    .example {
      font-size: 10px;
      opacity: 0.6;
    }

    input,
    select {
      width: 100%;
      border-radius: 11px;
      border: 1px solid rgba(255, 255, 255, 0.14);
      background: rgba(5, 6, 16, 0.95);
      color: inherit;
      padding: 8px 11px;
      font-size: 13px;
      outline: none;
      transition: border 0.18s ease, box-shadow 0.18s ease,
        background 0.18s ease, transform 0.08s ease;
    }

    body.theme-light input,
    body.theme-light select {
      background: rgba(245, 247, 255, 0.96);
      border-color: rgba(0, 0, 0, 0.08);
    }

    input::placeholder {
      color: rgba(255, 255, 255, 0.35);
    }

    body.theme-light input::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }

    input:focus,
    select:focus {
      border-color: #3f8cff;
      box-shadow: 0 0 0 1px rgba(63, 140, 255, 0.55);
      background: rgba(8, 11, 30, 0.98);
      transform: translateY(-1px);
    }

    body.theme-light input:focus,
    body.theme-light select:focus {
      background: #ffffff;
    }

    .full-row {
      grid-column: 1 / -1;
    }

    .btn-row {
      margin-top: 8px;
      display: flex;
      gap: 10px;
      justify-content: flex-start;
      flex-wrap: wrap;
      grid-column: 1 / -1;
    }

    button {
      border: none;
    }

    .btn-primary {
      border-radius: 999px;
      padding: 9px 18px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.02em;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: linear-gradient(135deg, #22c55e, #16a34a);
      color: #ffffff;
      box-shadow: 0 12px 26px rgba(0, 0, 0, 0.9);
      transition: transform 0.12s ease, box-shadow 0.12s ease, opacity 0.12s ease;
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.95);
    }

    .btn-ghost {
      border-radius: 999px;
      padding: 9px 18px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.02em;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, 0.04);
      color: inherit;
      transition: transform 0.12s ease, background 0.12s ease, opacity 0.12s ease;
    }

    body.theme-light .btn-ghost {
      background: rgba(0, 0, 0, 0.04);
    }

    .btn-ghost:hover {
      background: rgba(255, 255, 255, 0.08);
    }

    body.theme-light .btn-ghost:hover {
      background: rgba(0, 0, 0, 0.08);
    }

    .results-panel {
      border-radius: 18px;
      background: var(--results-bg);
      border: 1px solid rgba(255, 255, 255, 0.07);
      padding: 14px 14px 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      backdrop-filter: blur(10px);
    }

    .results-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      font-size: 12px;
    }

    @media (max-width: 1000px) {
      .results-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    @media (max-width: 650px) {
      .results-grid {
        grid-template-columns: 1fr;
      }
    }

    .result-box {
      background: var(--resultbox-bg);
      border-radius: 13px;
      padding: 9px 11px;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .result-label {
      font-size: 11px;
      opacity: 0.7;
      margin-bottom: 3px;
    }

    .result-value {
      font-size: 15px;
      font-weight: 600;
    }

    .result-hint {
      font-size: 10px;
      opacity: 0.55;
      margin-top: 3px;
    }

    .warning {
      font-size: 10px;
      color: #ffb341;
      opacity: 0.9;
      margin-top: 2px;
    }

    .pair-tag {
      font-size: 11px;
      opacity: 0.8;
    }

    .pair-tag span {
      opacity: 0.6;
    }

    /* -------- لوقو 3D احترافي -------- */
    .logo-3d {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      padding: 4px;
      background:
        conic-gradient(
          from 210deg,
          #22c55e 0deg,
          #0ea5e9 90deg,
          #6366f1 180deg,
          #f59e0b 270deg,
          #22c55e 360deg
        );
      box-shadow:
        0 0 0 2px rgba(15,23,42,0.8),
        0 18px 35px rgba(0,0,0,0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-shrink: 0;
    }

    .logo-3d-inner {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(circle at 20% 0%, #1e293b, #020617 70%);
      position: relative;
      overflow: hidden;
      border: 2px solid rgba(255,255,255,0.18);
      box-shadow:
        inset 0 10px 16px rgba(255,255,255,0.08),
        inset 0 -12px 18px rgba(15,23,42,0.95);
    }

    .logo-screen {
      position: absolute;
      inset: 16px 14px 18px 16px;
      border-radius: 14px;
      background: linear-gradient(to bottom, rgba(15,23,42,0.9), rgba(15,23,42,0.98));
      box-shadow:
        0 0 0 1px rgba(148,163,184,0.4),
        0 12px 18px rgba(0,0,0,0.9);
      overflow: hidden;
    }

    .logo-screen::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(to right, rgba(148,163,184,0.22) 1px, transparent 1px),
        linear-gradient(to top, rgba(148,163,184,0.22) 1px, transparent 1px);
      background-size: 7px 7px;
      opacity: 0.55;
    }

    .logo-bars {
      position: absolute;
      bottom: 10px;
      left: 9px;
      right: 9px;
      height: 28px;
      display: flex;
      align-items: flex-end;
      gap: 4px;
      z-index: 1;
    }

    .bar {
      flex: 1;
      border-radius: 999px;
      background: linear-gradient(to top, rgba(15,23,42,0.4), rgba(34,197,94,0.8));
      box-shadow: 0 0 8px rgba(34,197,94,0.75);
    }

    .bar:nth-child(1) { height: 30%; }
    .bar:nth-child(2) { height: 65%; }
    .bar:nth-child(3) { height: 45%; }
    .bar:nth-child(4) { height: 80%; }
    .bar:nth-child(5) { height: 55%; }

    .logo-line {
      position: absolute;
      inset: 12px 10px 20px 10px;
      z-index: 2;
    }

    .logo-line svg {
      width: 100%;
      height: 100%;
      filter: drop-shadow(0 0 5px rgba(56,189,248,0.9));
    }

    .logo-line path {
      fill: none;
      stroke: url(#gradLine);
      stroke-width: 2.3;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .logo-dot {
      position: absolute;
      right: 13px;
      bottom: 22px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow:
        0 0 0 3px rgba(34,197,94,0.25),
        0 0 10px rgba(34,197,94,0.9);
      z-index: 3;
    }
  </style>
</head>
<body class="theme-dark">
  <div class="shell">
    <div class="card">
      <div class="card-header">
        <div>
          <div class="brand-wrap">
            <!-- اللوقو 3D -->
            <div class="logo-3d">
              <div class="logo-3d-inner">
                <div class="logo-screen"></div>
                <div class="logo-bars">
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                </div>
                <div class="logo-line">
                  <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#0ea5e9"/>
                        <stop offset="40%" stop-color="#22c55e"/>
                        <stop offset="100%" stop-color="#22c55e"/>
                      </linearGradient>
                    </defs>
                    <path d="M2 40 L18 32 L32 36 L48 26 L64 30 L82 18 L98 22" />
                  </svg>
                </div>
                <div class="logo-dot"></div>
              </div>
            </div>

            <div class="brand">
              <div class="brand-title">Busultan Trading</div>
              <div class="brand-sub" data-i18n="brandSub">
                إدارة مخاطر احترافية
                <span class="badge">MULTI-ASSET • FUNDING • R:R</span>
              </div>
            </div>
          </div>
          <div class="header-tabs">
            <div class="header-tab active" data-i18n="headerTab1">Position Sizing</div>
            <div class="header-tab" data-i18n="headerTab2">Risk Engine</div>
          </div>
        </div>

        <div class="controls">
          <button id="themeToggle" type="button" class="pill">🌙</button>
          <button id="langToggle" type="button" class="pill">
            <span id="langLabel">AR</span>
          </button>
        </div>
      </div>

      <h2 data-i18n="title">حاسبة اللوت المتقدمة</h2>
      <div class="subtitle" data-i18n="subtitle">
        حدد رصيد الحساب، نسبة المخاطرة، وسعر الدخول/الوقف والأداة – وسيتم حساب حجم اللوت،
        قيمة المخاطرة والهامش المطلوب والأهداف تلقائيًا.
      </div>

      <div class="layout">
        <!-- Step 1 – Inputs -->
        <div class="panel">
          <div class="panel-title">
            <span data-i18n="panelInputsTitle">إعدادات الصفقة</span>
            <span data-i18n="panelInputsStep">Step 1 – Inputs</span>
          </div>
          <form id="lotForm">
            <div class="field">
              <label for="balance" data-i18n="balanceLabel">رصيد الحساب (USD)</label>
              <span class="example" data-i18n="balanceExample">مثال: 10000</span>
              <input id="balance" type="number" step="0.01" placeholder="10000" required />
            </div>

            <div class="field">
              <label for="risk" data-i18n="riskLabel">نسبة المخاطرة من الحساب %</label>
              <span class="example" data-i18n="riskExample">1 = مخاطرة 1% من رصيد الحساب</span>
              <input id="risk" type="number" step="0.01" placeholder="1" required />
            </div>

            <div class="field">
              <label for="entry" data-i18n="entryLabel">سعر الدخول (Entry)</label>
              <span class="example" data-i18n="entryExample">
                مثال EURUSD: 1.08500 – USDJPY: 156.30
              </span>
              <input id="entry" type="number" step="0.00001" placeholder="1.08500" required />
            </div>

            <div class="field">
              <label for="sl" data-i18n="slLabel">سعر وقف الخسارة (SL)</label>
              <span class="example" data-i18n="slExample">
                يمكن تركه فارغ ليتم حسابه من مسافة الوقف
              </span>
              <input id="sl" type="number" step="0.00001" placeholder="مثال: 155.80" />
            </div>

            <div class="field full-row">
              <label for="symbol" data-i18n="symbolLabel">زوج / أداة التداول</label>
              <span class="example" data-i18n="symbolExample">
                أزواج رئيسية، أزواج ين، كروس، ذهب/فضة، نفط، مؤشرات
              </span>
              <select id="symbol">
                <!-- Commodities / Indices -->
                <option value="XAUUSD" data-group="metals">XAUUSD – Gold (ذهب)</option>
                <option value="XAGUSD" data-group="metals">XAGUSD – Silver (فضة)</option>
                <option value="WTI" data-group="oil">WTI – Crude Oil</option>
                <option value="US100" data-group="indices">US100 – Nasdaq</option>

                <!-- Majors -->
                <option value="EURUSD" data-group="major">EURUSD – Major</option>
                <option value="USDJPY" data-group="jpy">USDJPY – JPY Pair</option>
                <option value="AUDUSD" data-group="major">AUDUSD – Major</option>
                <option value="NZDUSD" data-group="major">NZDUSD – Major</option>
                <option value="USDCHF" data-group="major">USDCHF – Major</option>
                <option value="USDCAD" data-group="major">USDCAD – Major</option>

                <!-- JPY crosses -->
                <option value="GBPJPY" data-group="jpy">GBPJPY – JPY Cross</option>
                <option value="AUDJPY" data-group="jpy">AUDJPY – JPY Cross</option>
                <option value="EURJPY" data-group="jpy">EURJPY – JPY Cross</option>

                <!-- Crosses -->
                <option value="EURCAD" data-group="cross">EURCAD – Cross</option>
                <option value="AUDCAD" data-group="cross">AUDCAD – Cross</option>
                <option value="EURAUD" data-group="cross">EURAUD – Cross</option>
              </select>
            </div>

            <div class="field">
              <label for="direction" data-i18n="directionLabel">نوع الصفقة</label>
              <span class="example" data-i18n="directionExample">
                مهم لحساب الأهداف ووقف الخسارة تلقائيًا
              </span>
              <select id="direction">
                <option value="buy" data-i18n="directionBuy">شراء (Buy)</option>
                <option value="sell" data-i18n="directionSell">بيع (Sell)</option>
              </select>
            </div>

            <div class="field">
              <label for="stopPips" data-i18n="stopPipsLabel">مسافة الوقف (بالنقاط)</label>
              <span class="example" data-i18n="stopPipsExample">
                إذا كان حقل SL فارغًا سيُحسب من هذه المسافة
              </span>
              <input id="stopPips" type="number" step="0.1" placeholder="20" />
            </div>

            <div class="field">
              <label for="tp1" data-i18n="tp1Label">هدف 1 (TP1)</label>
              <span class="example" data-i18n="tp1Example">يُحسب تلقائيًا = ضعفين الخسارة</span>
              <input id="tp1" type="number" step="0.00001" placeholder="—" />
            </div>

            <div class="field">
              <label for="tp2" data-i18n="tp2Label">هدف 2 (TP2)</label>
              <span class="example" data-i18n="tp2Example">3 أضعاف الخسارة</span>
              <input id="tp2" type="number" step="0.00001" placeholder="—" />
            </div>

            <div class="field">
              <label for="tp3" data-i18n="tp3Label">هدف 3 (TP3)</label>
              <span class="example" data-i18n="tp3Example">4 أضعاف الخسارة</span>
              <input id="tp3" type="number" step="0.00001" placeholder="—" />
            </div>

            <div class="field">
              <label for="leverage" data-i18n="leverageLabel">الرافعة المالية (Leverage)</label>
              <span class="example" data-i18n="leverageExample">مثال: 100 أو 500</span>
              <input id="leverage" type="number" step="1" placeholder="500" value="500" />
            </div>

            <div class="btn-row">
              <button type="submit" class="btn-primary" data-i18n="btnCalc">
                احسب حجم اللوت
              </button>
              <button type="button" id="resetBtn" class="btn-ghost" data-i18n="btnReset">
                مسح الحقول
              </button>
            </div>
          </form>
        </div>

        <!-- Step 2 – Outputs -->
        <div class="results-panel">
          <div class="panel-title">
            <span data-i18n="outputsTitle">مخرجات الحاسبة</span>
            <span data-i18n="outputsStep">Step 2 – Outputs</span>
          </div>
          <div id="results" style="display:none;">
            <div class="pair-tag">
              <span data-i18n="outputsCurrentInstr">الأداة الحالية:</span>
              <span id="currentSymbol">—</span>
            </div>

            <div class="results-grid">
              <div class="result-box">
                <div class="result-label" data-i18n="lotLabel">حجم اللوت المقترح</div>
                <div class="result-value" id="lotSize">0.00</div>
                <div class="result-hint" data-i18n="lotHint">
                  لوت قياسي/مصغر حسب نوع الأداة
                </div>
              </div>

              <div class="result-box">
                <div class="result-label" data-i18n="riskAmountLabel">
                  المبلغ المعرض للمخاطرة (USD)
                </div>
                <div class="result-value" id="riskAmount">0.00</div>
                <div class="result-hint" data-i18n="riskAmountHint">
                  الخسارة المتوقعة عند ضرب وقف الخسارة
                </div>
              </div>

              <div class="result-box">
                <div class="result-label" data-i18n="pipDistanceLabel">
                  عدد النقاط حتى وقف الخسارة
                </div>
                <div class="result-value" id="pipDistance">0.0</div>
                <div class="result-hint" data-i18n="pipDistanceHint">
                  محسوبة حسب قيمة النقطة للأداة
                </div>
              </div>

              <div class="result-box">
                <div class="result-label" data-i18n="marginLabel">
                  الهامش المستخدم تقريبًا
                </div>
                <div class="result-value" id="marginRequired">0.00</div>
                <div class="result-hint" data-i18n="marginHint">
                  بالدولار باستخدام الرافعة المحددة (Notional / Leverage)
                </div>
              </div>

              <div class="result-box">
                <div class="result-label" data-i18n="notionalLabel">
                  حجم العقد الاسمي (Notional)
                </div>
                <div class="result-value" id="notional">0</div>
                <div class="result-hint" data-i18n="notionalHint">
                  وحدات تقريبية للعقد (Contract Size)
                </div>
              </div>

              <div class="result-box">
                <div class="result-label" data-i18n="riskPctLabel">
                  نسبة المخاطرة الفعلية من الرصيد
                </div>
                <div class="result-value" id="riskPctReal">0.00%</div>
                <div class="result-hint" data-i18n="riskPctHint">
                  للتأكد أن الحساب مطابق لنسبة المخاطرة المدخلة
                </div>
              </div>
            </div>

            <div class="warning" data-i18n="warningText">
              ملاحظة مهمة: الحاسبة تقريبية تعليمية. القيم الفعلية تختلف حسب شركة الوساطة،
              نوع الحساب، السبريد والعمولات، وقيمة النقطة لكل أداة. طبيعي في إدارة المخاطر
              أن يتناقص الهامش عندما توسّع وقف الخسارة لأن حجم اللوت يقل للحفاظ على نفس
              نسبة المخاطرة من الرصيد.
            </div>
          </div>

          <div id="noResults" style="font-size:12px; opacity:0.7; margin-top:8px;"
               data-i18n="noResultsText">
            أدخل بيانات الصفقة واضغط "احسب حجم اللوت" لعرض النتائج والأهداف.
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    // ترجمات عربي/إنجليزي
    const translations = {
      ar: {
        brandSub: "إدارة مخاطر احترافية",
        headerTab1: "Position Sizing",
        headerTab2: "Risk Engine",
        title: "حاسبة اللوت المتقدمة",
        subtitle:
          "حدد رصيد الحساب، نسبة المخاطرة، وسعر الدخول/الوقف والأداة – وسيتم حساب حجم اللوت، قيمة المخاطرة والهامش المطلوب والأهداف تلقائيًا.",
        panelInputsTitle: "إعدادات الصفقة",
        panelInputsStep: "Step 1 – Inputs",
        outputsTitle: "مخرجات الحاسبة",
        outputsStep: "Step 2 – Outputs",
        balanceLabel: "رصيد الحساب (USD)",
        balanceExample: "مثال: 10000",
        riskLabel: "نسبة المخاطرة من الحساب %",
        riskExample: "1 = مخاطرة 1% من رصيد الحساب",
        entryLabel: "سعر الدخول (Entry)",
        entryExample: "مثال EURUSD: 1.08500 – USDJPY: 156.30",
        slLabel: "سعر وقف الخسارة (SL)",
        slExample: "يمكن تركه فارغ ليتم حسابه من مسافة الوقف",
        symbolLabel: "زوج / أداة التداول",
        symbolExample: "أزواج رئيسية، أزواج ين، كروس، ذهب/فضة، نفط، مؤشرات",
        directionLabel: "نوع الصفقة",
        directionExample: "مهم لحساب الأهداف ووقف الخسارة تلقائيًا",
        stopPipsLabel: "مسافة الوقف (بالنقاط)",
        stopPipsExample: "إذا كان حقل SL فارغًا سيُحسب من هذه المسافة",
        tp1Label: "هدف 1 (TP1)",
        tp1Example: "يُحسب تلقائيًا = ضعفين الخسارة",
        tp2Label: "هدف 2 (TP2)",
        tp2Example: "3 أضعاف الخسارة",
        tp3Label: "هدف 3 (TP3)",
        tp3Example: "4 أضعاف الخسارة",
        leverageLabel: "الرافعة المالية (Leverage)",
        leverageExample: "مثال: 100 أو 500",
        btnCalc: "احسب حجم اللوت",
        btnReset: "مسح الحقول",
        outputsCurrentInstr: "الأداة الحالية:",
        lotLabel: "حجم اللوت المقترح",
        lotHint: "لوت قياسي/مصغر حسب نوع الأداة",
        riskAmountLabel: "المبلغ المعرض للمخاطرة (USD)",
        riskAmountHint: "الخسارة المتوقعة عند ضرب وقف الخسارة",
        pipDistanceLabel: "عدد النقاط حتى وقف الخسارة",
        pipDistanceHint: "محسوبة حسب قيمة النقطة للأداة",
        marginLabel: "الهامش المستخدم تقريبًا",
        marginHint: "بالدولار باستخدام الرافعة المحددة (Notional / Leverage)",
        notionalLabel: "حجم العقد الاسمي (Notional)",
        notionalHint: "وحدات تقريبية للعقد (Contract Size)",
        riskPctLabel: "نسبة المخاطرة الفعلية من الرصيد",
        riskPctHint: "للتأكد أن الحساب مطابق لنسبة المخاطرة المدخلة",
        warningText:
          "ملاحظة مهمة: الحاسبة تقريبية تعليمية. القيم الفعلية تختلف حسب شركة الوساطة، نوع الحساب، السبريد والعمولات، وقيمة النقطة لكل أداة. طبيعي في إدارة المخاطر أن يتناقص الهامش عندما توسّع وقف الخسارة لأن حجم اللوت يقل للحفاظ على نفس نسبة المخاطرة من الرصيد.",
        noResultsText:
          "أدخل بيانات الصفقة واضغط \"احسب حجم اللوت\" لعرض النتائج والأهداف.",
        directionBuy: "شراء (Buy)",
        directionSell: "بيع (Sell)"
      },
      en: {
        brandSub: "Professional risk management",
        headerTab1: "Position Sizing",
        headerTab2: "Risk Engine",
        title: "Advanced Lot Calculator",
        subtitle:
          "Set account balance, risk %, entry/stop and instrument – the tool will compute lot size, risk amount, margin and auto targets.",
        panelInputsTitle: "Trade setup",
        panelInputsStep: "Step 1 – Inputs",
        outputsTitle: "Calculator outputs",
        outputsStep: "Step 2 – Outputs",
        balanceLabel: "Account balance (USD)",
        balanceExample: "Example: 10000",
        riskLabel: "Risk % of account",
        riskExample: "1 = risk 1% of balance",
        entryLabel: "Entry price (Entry)",
        entryExample: "e.g. EURUSD 1.08500 – USDJPY 156.30",
        slLabel: "Stop loss price (SL)",
        slExample: "Can be left empty to auto-calc from stop distance",
        symbolLabel: "Symbol / instrument",
        symbolExample: "Majors, JPY pairs, crosses, gold/silver, oil, indices",
        directionLabel: "Trade direction",
        directionExample: "Used to auto-calc SL & targets",
        stopPipsLabel: "Stop distance (pips)",
        stopPipsExample: "If SL is empty it will be derived from this distance",
        tp1Label: "Target 1 (TP1)",
        tp1Example: "Auto = 2x risk distance",
        tp2Label: "Target 2 (TP2)",
        tp2Example: "3x risk distance",
        tp3Label: "Target 3 (TP3)",
        tp3Example: "4x risk distance",
        leverageLabel: "Leverage",
        leverageExample: "Example: 100 or 500",
        btnCalc: "Calculate lot size",
        btnReset: "Reset",
        outputsCurrentInstr: "Current instrument:",
        lotLabel: "Suggested lot size",
        lotHint: "Standard / mini lot depending on instrument",
        riskAmountLabel: "Risk amount (USD)",
        riskAmountHint: "Expected loss if stop loss is hit",
        pipDistanceLabel: "Stop distance (pips)",
        pipDistanceHint: "Based on pip value for the instrument",
        marginLabel: "Approx. used margin",
        marginHint: "In USD using selected leverage (Notional / Leverage)",
        notionalLabel: "Notional position size",
        notionalHint: "Approximate contract units",
        riskPctLabel: "Actual risk % of balance",
        riskPctHint: "Check that risk matches the input value",
        warningText:
          "Important: this calculator is indicative and for educational use only. Actual values depend on your broker, account type, spreads, commissions and pip value per instrument. It is normal in risk management that used margin decreases when you widen the stop, because lot size is reduced to keep the same risk percentage.",
        noResultsText:
          "Enter trade details and press \"Calculate lot size\" to see risk and targets.",
        directionBuy: "Buy",
        directionSell: "Sell"
      }
    };

    function applyTranslations(lang) {
      const t = translations[lang];
      if (!t) return;
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (t[key]) el.textContent = t[key];
      });
      const langLabel = document.getElementById("langLabel");
      if (langLabel) langLabel.textContent = lang.toUpperCase();
      if (lang === "ar") {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
      } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
      }
    }

    function applyTheme(theme) {
      document.body.classList.remove("theme-dark", "theme-light");
      if (theme === "light") {
        document.body.classList.add("theme-light");
      } else {
        document.body.classList.add("theme-dark");
      }
      const themeToggle = document.getElementById("themeToggle");
      if (themeToggle) themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
    }

    // إعدادات مجموعات الأزواج
    const groupConfig = {
      major:  { pipSize: 0.0001, pipValuePerLot: 10, contractSize: 100000 },
      jpy:    { pipSize: 0.01,   pipValuePerLot: 9.5, contractSize: 100000 },
      cross:  { pipSize: 0.0001, pipValuePerLot: 9,  contractSize: 100000 },
      metals: { pipSize: 0.1,    pipValuePerLot: 10, contractSize: 100 },
      oil:    { pipSize: 0.01,   pipValuePerLot: 10, contractSize: 1000 },
      indices:{ pipSize: 1,      pipValuePerLot: 1,  contractSize: 1 }
    };

    function decimalsFromPip(pipSize) {
      let d = 0;
      let v = pipSize;
      while (v < 1 && d < 8) { v *= 10; d++; }
      return d;
    }

    const form = document.getElementById("lotForm");
    const resultsWrapper = document.getElementById("results");
    const noResults = document.getElementById("noResults");

    let currentTheme = "dark";
    let currentLang = "ar";

    const themeToggle = document.getElementById("themeToggle");
    const langToggle = document.getElementById("langToggle");

    themeToggle.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
    });

    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "ar" ? "en" : "ar";
      applyTranslations(currentLang);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const balance = parseFloat(document.getElementById("balance").value);
      const riskPercentInput = parseFloat(document.getElementById("risk").value);
      const entry = parseFloat(document.getElementById("entry").value);
      const leverage = parseFloat(document.getElementById("leverage").value || 1);

      const symbolSelect = document.getElementById("symbol");
      const symbol = symbolSelect.value;
      const groupKey =
        symbolSelect.options[symbolSelect.selectedIndex].dataset.group || "major";

      const direction = document.getElementById("direction").value;
      const stopPips = parseFloat(document.getElementById("stopPips").value);
      const slInput = document.getElementById("sl");

      if (!isFinite(balance) || !isFinite(riskPercentInput) ||
          !isFinite(entry) || balance <= 0 || riskPercentInput <= 0) {
        alert(currentLang === "ar"
              ? "رجاءً تأكد من إدخال بيانات صحيحة في الحقول الأساسية."
              : "Please make sure core inputs are valid.");
        return;
      }

      const config = groupConfig[groupKey];
      if (!config) {
        alert(currentLang === "ar"
              ? "لا يوجد إعدادات لهذه الأداة، تواصل مع المطور لإضافتها."
              : "No config for this instrument – contact the developer to add it.");
        return;
      }

      let sl = parseFloat(slInput.value);

      // حساب SL تلقائي من مسافة الوقف إذا كان فارغ
      if (!isFinite(sl)) {
        if (!isFinite(stopPips) || stopPips <= 0) {
          alert(currentLang === "ar"
                ? "إما أدخل وقف الخسارة يدويًا أو حدد مسافة الوقف بالنقاط للحساب التلقائي."
                : "Either enter SL price or provide stop distance in pips.");
          return;
        }
        const priceDistanceAuto = stopPips * config.pipSize;
        if (direction === "buy") {
          sl = entry - priceDistanceAuto;
        } else {
          sl = entry + priceDistanceAuto;
        }
        const dec = decimalsFromPip(config.pipSize);
        slInput.value = sl.toFixed(dec);
      }

      const pipDistanceRaw = Math.abs(entry - sl);
      const pipDistance = pipDistanceRaw / config.pipSize;

      if (!isFinite(pipDistance) || pipDistance === 0) {
        alert(currentLang === "ar"
              ? "مسافة وقف الخسارة صفر تقريبًا، عدّل سعر الدخول أو وقف الخسارة."
              : "Stop distance is almost zero – adjust entry or SL.");
        return;
      }

      const riskAmount = balance * (riskPercentInput / 100);
      const lotSize = riskAmount / (pipDistance * config.pipValuePerLot);

      const notional = lotSize * config.contractSize;
      const marginRequired = leverage > 0 ? notional / leverage : 0;
      const riskPctReal = (riskAmount / balance) * 100;

      // أهداف تلقائية 2x / 3x / 4x
      const priceRisk = Math.abs(entry - sl);
      const dec = decimalsFromPip(config.pipSize);
      let tp1, tp2, tp3;
      if (direction === "buy") {
        tp1 = entry + 2 * priceRisk;
        tp2 = entry + 3 * priceRisk;
        tp3 = entry + 4 * priceRisk;
      } else {
        tp1 = entry - 2 * priceRisk;
        tp2 = entry - 3 * priceRisk;
        tp3 = entry - 4 * priceRisk;
      }
      document.getElementById("tp1").value = tp1.toFixed(dec);
      document.getElementById("tp2").value = tp2.toFixed(dec);
      document.getElementById("tp3").value = tp3.toFixed(dec);

      document.getElementById("lotSize").textContent = lotSize.toFixed(2);
      document.getElementById("riskAmount").textContent = riskAmount.toFixed(2);
      document.getElementById("pipDistance").textContent = pipDistance.toFixed(1);
      document.getElementById("marginRequired").textContent =
        marginRequired.toFixed(2);
      document.getElementById("notional").textContent =
        Math.round(notional).toLocaleString("en-US");
      document.getElementById("riskPctReal").textContent =
        riskPctReal.toFixed(2) + "%";
      document.getElementById("currentSymbol").textContent = symbol;

      resultsWrapper.style.display = "block";
      noResults.style.display = "none";
    });

    document.getElementById("resetBtn").addEventListener("click", function () {
      form.reset();
      resultsWrapper.style.display = "none";
      noResults.style.display = "block";
      document.getElementById("currentSymbol").textContent = "—";
      document.getElementById("tp1").value = "";
      document.getElementById("tp2").value = "";
      document.getElementById("tp3").value = "";
    });

    // تشغيل افتراضي
    applyTheme(currentTheme);
    applyTranslations(currentLang);
  </script>
</body>
</html>
