@php
  $appName = $app_settings->app_name ?? 'Stocky | Ultimate Inventory With POS';
  $brandLogo = app_image_url($app_settings->logo ?? null, asset('images/logo.png'));
  $favicon = app_image_url($app_settings->favicon ?? null, asset('images/favicon.ico'));
  $heroTitle = $app_settings->login_hero_title ?? 'Welcome back!';
  $heroSubtitle = $app_settings->login_hero_subtitle ?? 'Sign in to access your account and keep your operations in sync.';
  $panelTitle = $app_settings->login_panel_title ?? 'Sign In';
  $panelSubtitle = $app_settings->login_panel_subtitle ?? 'Access your dashboard and manage everything from one place.';
@endphp
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/css/master.css">
    <link rel="icon" href="{{ $favicon }}">
    <title>{{ $appName }}</title>

    <style>
      :root {
        color-scheme: light;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --gold-50: #fffaf0;
        --gold-100: #fff0bf;
        --gold-200: #ffe7a3;
        --gold-300: #ffd86a;
        --gold-500: #d6a735;
        --gold-600: #b88712;
        --gold-700: #8d6208;
        --gold-900: #3a2606;
        --ink: #201607;
        --muted: #735f33;
        --surface: rgba(255, 254, 250, 0.88);
        --surface-solid: #fffefa;
        --line: rgba(184, 135, 18, 0.22);
        --danger: #b42318;
        --danger-soft: rgba(244, 63, 94, 0.10);
        --danger-border: rgba(180, 35, 24, 0.28);
        --success: #087443;
        --success-soft: rgba(18, 183, 106, 0.10);
        --success-border: rgba(18, 183, 106, 0.28);
      }

      *, *::before, *::after { box-sizing: border-box; }

      html, body { min-height: 100%; }

      body {
        margin: 0;
        color: var(--ink);
        overflow-x: hidden;
        background:
          linear-gradient(120deg, rgba(255, 248, 226, 0.92), rgba(255, 255, 255, 0.96) 42%, rgba(255, 244, 208, 0.88)),
          #fffaf0;
      }

      body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-image:
          linear-gradient(rgba(141, 98, 8, 0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(141, 98, 8, 0.04) 1px, transparent 1px);
        background-size: 44px 44px;
        mask-image: linear-gradient(90deg, rgba(0,0,0,0.55), transparent 62%);
      }

      .auth-page {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(460px, 0.95fr);
        min-height: 100dvh;
        isolation: isolate;
      }

      .auth-hero {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100dvh;
        padding: clamp(48px, 7vw, 104px);
        overflow: hidden;
        color: #fff8df;
        background:
          linear-gradient(135deg, rgba(255, 216, 106, 0.88) 0%, rgba(214, 167, 53, 0.94) 32%, rgba(141, 98, 8, 0.98) 64%, #2a1a03 100%);
        box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.18);
      }

      .auth-hero::before,
      .auth-hero::after {
        content: "";
        position: absolute;
        inset: auto;
        pointer-events: none;
      }

      .auth-hero::before {
        width: 68vw;
        height: 68vw;
        left: -36vw;
        bottom: -38vw;
        background: linear-gradient(45deg, transparent 42%, rgba(255, 255, 255, 0.18) 42% 56%, transparent 56%);
        transform: rotate(-9deg);
      }

      .auth-hero::after {
        width: 56vw;
        height: 140vh;
        right: -28vw;
        top: -20vh;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.16), transparent);
        transform: rotate(15deg);
      }

      .hero-content {
        position: relative;
        z-index: 1;
        width: min(100%, 560px);
        display: grid;
        gap: clamp(22px, 3vw, 34px);
      }

      .brand-lockup {
        display: inline-flex;
        align-items: center;
        gap: 14px;
        width: fit-content;
        max-width: 100%;
        padding: 10px 16px 10px 10px;
        border: 1px solid rgba(255, 255, 255, 0.34);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(18px);
        box-shadow: 0 18px 50px rgba(42, 26, 3, 0.20);
      }

      .brand-logo {
        width: 44px;
        height: 44px;
        border-radius: 15px;
        object-fit: contain;
        padding: 6px;
        background: rgba(255, 255, 255, 0.82);
        box-shadow: inset 0 0 0 1px rgba(141, 98, 8, 0.18);
      }

      .brand-name {
        min-width: 0;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fff9df;
        font-size: 0.95rem;
        font-weight: 800;
        letter-spacing: 0;
        text-shadow: 0 2px 12px rgba(42, 26, 3, 0.28);
      }

      .hero-copy {
        display: grid;
        gap: 18px;
      }

      .hero-eyebrow,
      .panel-eyebrow {
        margin: 0;
        color: var(--gold-700);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .hero-eyebrow {
        color: rgba(255, 249, 223, 0.82);
      }

      .hero-title {
        margin: 0;
        max-width: 12ch;
        color: #fff8df;
        font-size: clamp(2.6rem, 6vw, 5.2rem);
        line-height: 1.02;
        font-weight: 900;
        letter-spacing: 0;
        text-shadow:
          0 4px 0 rgba(92, 56, 4, 0.22),
          0 24px 50px rgba(42, 26, 3, 0.34);
      }

      .hero-subtitle {
        margin: 0;
        max-width: 520px;
        color: rgba(255, 250, 233, 0.86);
        font-size: clamp(1rem, 1.4vw, 1.14rem);
        line-height: 1.8;
        font-weight: 600;
      }

      .hero-visual {
        width: min(100%, 520px);
        border: 1px solid rgba(255, 255, 255, 0.28);
        border-radius: 28px;
        padding: 18px;
        background: rgba(48, 30, 4, 0.18);
        backdrop-filter: blur(20px);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.18),
          0 28px 70px rgba(43, 26, 3, 0.24);
      }

      .visual-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.16);
      }

      .visual-lines {
        display: grid;
        gap: 9px;
        flex: 1;
      }

      .visual-line {
        height: 10px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.24);
      }

      .visual-line.short { width: 54%; }
      .visual-line.long { width: 82%; }

      .visual-badge {
        flex: 0 0 auto;
        padding: 10px 14px;
        border-radius: 999px;
        color: var(--gold-900);
        background: linear-gradient(135deg, #fff6d8, var(--gold-300));
        font-weight: 900;
        box-shadow: 0 10px 24px rgba(58, 38, 6, 0.20);
      }

      .visual-bars {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        align-items: end;
        gap: 12px;
        height: 118px;
        padding-top: 18px;
      }

      .visual-bars span {
        min-width: 0;
        border-radius: 16px 16px 8px 8px;
        background: linear-gradient(180deg, #fff7d8, var(--gold-300) 48%, var(--gold-700));
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
      }

      .visual-bars span:nth-child(1) { height: 40%; }
      .visual-bars span:nth-child(2) { height: 62%; }
      .visual-bars span:nth-child(3) { height: 50%; }
      .visual-bars span:nth-child(4) { height: 82%; }
      .visual-bars span:nth-child(5) { height: 68%; }

      .auth-panel {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100dvh;
        padding: clamp(28px, 6vw, 92px);
      }

      .auth-panel::before {
        content: "";
        position: absolute;
        inset: 9% 10% 12%;
        border-radius: 42px;
        border: 1px solid rgba(214, 167, 53, 0.13);
        background:
          linear-gradient(135deg, rgba(255, 216, 106, 0.16), rgba(255, 255, 255, 0.34)),
          rgba(255, 255, 255, 0.20);
        transform: rotate(-2deg);
      }

      .auth-panel-inner {
        position: relative;
        z-index: 1;
        width: min(100%, 452px);
        padding: clamp(28px, 4vw, 44px);
        border: 1px solid rgba(255, 255, 255, 0.74);
        border-radius: 34px;
        background: var(--surface);
        backdrop-filter: blur(24px);
        box-shadow:
          0 34px 90px rgba(79, 52, 8, 0.16),
          0 1px 0 rgba(255, 255, 255, 0.90) inset;
      }

      .panel-brand {
        display: none;
        align-items: center;
        gap: 12px;
        margin-bottom: 22px;
      }

      .panel-brand .brand-name {
        color: var(--ink);
        text-shadow: none;
      }

      .panel-header {
        display: grid;
        gap: 8px;
        margin-bottom: 28px;
      }

      .panel-title {
        margin: 0;
        color: var(--ink);
        font-size: clamp(2rem, 4vw, 2.6rem);
        line-height: 1.06;
        font-weight: 900;
        letter-spacing: 0;
      }

      .panel-title span {
        background: linear-gradient(135deg, var(--gold-700), var(--gold-500) 48%, #f7cd55);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: 0 14px 30px rgba(141, 98, 8, 0.12);
      }

      .panel-subtitle {
        margin: 0;
        color: var(--muted);
        font-size: 0.98rem;
        line-height: 1.65;
        font-weight: 600;
      }

      form {
        display: grid;
        gap: 18px;
      }

      .field {
        display: grid;
        gap: 9px;
      }

      .field label {
        margin: 0;
        color: var(--ink);
        font-size: 0.92rem;
        font-weight: 800;
      }

      .input-shell {
        display: flex;
        align-items: center;
        min-height: 58px;
        gap: 12px;
        border: 1px solid var(--line);
        border-radius: 18px;
        padding: 0 16px;
        background: rgba(255, 252, 244, 0.82);
        box-shadow:
          0 12px 28px rgba(141, 98, 8, 0.06),
          inset 0 1px 0 rgba(255, 255, 255, 0.84);
        transition: border-color 160ms ease, box-shadow 160ms ease, background 160ms ease;
      }

      .input-shell:focus-within {
        border-color: rgba(214, 167, 53, 0.72);
        background: #fffdf8;
        box-shadow:
          0 0 0 4px rgba(255, 216, 106, 0.24),
          0 16px 34px rgba(141, 98, 8, 0.10);
      }

      .input-icon {
        flex: 0 0 auto;
        width: 21px;
        height: 21px;
        color: var(--gold-700);
      }

      .input-shell input {
        flex: 1;
        min-width: 0;
        border: none;
        outline: none;
        background: transparent;
        color: var(--ink);
        padding: 15px 0;
        font-size: 1rem;
        font-weight: 650;
      }

      .input-shell input::placeholder {
        color: rgba(115, 95, 51, 0.62);
        font-weight: 600;
      }

      .toggle-password {
        flex: 0 0 auto;
        border: none;
        background: transparent;
        color: var(--gold-700);
        font-size: 0.84rem;
        font-weight: 900;
        cursor: pointer;
        padding: 6px 0 6px 10px;
      }

      .toggle-password:focus-visible,
      .auth-link:focus-visible,
      .auth-btn:focus-visible {
        outline: 3px solid rgba(255, 216, 106, 0.52);
        outline-offset: 3px;
      }

      .form-meta {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        min-height: 24px;
        gap: 10px;
        margin-top: -2px;
      }

      .auth-link {
        color: var(--gold-700);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 900;
      }

      .auth-link:hover {
        color: var(--gold-900);
        text-decoration: underline;
      }

      .auth-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 58px;
        margin-top: 4px;
        border: 0;
        border-radius: 18px;
        background: linear-gradient(135deg, var(--gold-300), var(--gold-500) 46%, var(--gold-700));
        color: var(--gold-900);
        font-size: 1rem;
        font-weight: 950;
        cursor: pointer;
        box-shadow:
          0 20px 40px rgba(141, 98, 8, 0.24),
          inset 0 1px 0 rgba(255, 255, 255, 0.64);
        transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
      }

      .auth-btn:hover {
        transform: translateY(-1px);
        filter: saturate(1.05) brightness(1.02);
        box-shadow:
          0 24px 48px rgba(141, 98, 8, 0.28),
          inset 0 1px 0 rgba(255, 255, 255, 0.70);
      }

      .auth-btn:disabled {
        cursor: wait;
        opacity: 0.78;
        transform: none;
      }

      .btn-loading {
        align-items: center;
        gap: 10px;
      }

      .spinner {
        width: 16px;
        height: 16px;
        border-radius: 999px;
        border: 2px solid rgba(58, 38, 6, 0.24);
        border-top-color: var(--gold-900);
        animation: auth-spin 720ms linear infinite;
      }

      @keyframes auth-spin {
        to { transform: rotate(360deg); }
      }

      .auth-alert {
        padding: 0.9rem 1rem;
        margin: 0 0 18px;
        border: 1px solid var(--line);
        border-radius: 18px;
        font-size: 0.95rem;
        line-height: 1.55;
        font-weight: 700;
        background: var(--surface-solid);
      }

      .auth-alert ul {
        margin: 0;
        padding-left: 1.1rem;
      }

      .auth-alert.error {
        background: var(--danger-soft);
        border-color: var(--danger-border);
        color: var(--danger);
      }

      .auth-alert.success {
        background: var(--success-soft);
        border-color: var(--success-border);
        color: var(--success);
      }

      @media (max-width: 1180px) {
        .auth-page {
          grid-template-columns: 1fr;
        }

        .auth-hero {
          min-height: auto;
          padding: 34px 24px 96px;
        }

        .hero-content {
          width: min(100%, 760px);
          gap: 18px;
        }

        .hero-title {
          max-width: none;
          font-size: clamp(2rem, 7vw, 3.6rem);
        }

        .hero-subtitle {
          max-width: 680px;
        }

        .hero-visual {
          display: none;
        }

        .auth-panel {
          min-height: auto;
          margin-top: -70px;
          padding: 0 20px 34px;
        }

        .auth-panel::before {
          display: none;
        }
      }

      @media (max-width: 640px) {
        body::before { background-size: 34px 34px; }

        .auth-hero {
          padding: 26px 18px 82px;
        }

        .brand-lockup {
          padding-right: 12px;
        }

        .brand-logo {
          width: 40px;
          height: 40px;
          border-radius: 13px;
        }

        .brand-name {
          max-width: 210px;
        }

        .hero-copy {
          gap: 12px;
        }

        .hero-title {
          font-size: clamp(1.9rem, 10vw, 3rem);
        }

        .hero-subtitle {
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .auth-panel {
          padding-inline: 14px;
        }

        .auth-panel-inner {
          border-radius: 26px;
          padding: 24px;
        }

        .panel-brand {
          display: flex;
        }

        .panel-title {
          font-size: 1.85rem;
        }

        .input-shell,
        .auth-btn {
          min-height: 54px;
          border-radius: 16px;
        }
      }

      @media (max-width: 380px) {
        .auth-panel-inner {
          padding: 20px;
          border-radius: 22px;
        }

        .panel-title {
          font-size: 1.65rem;
        }

        .input-shell {
          padding-inline: 13px;
        }

        .toggle-password {
          font-size: 0.78rem;
          padding-left: 6px;
        }
      }
    </style>
  </head>

  <body>
    <div class="auth-page">
      <section class="auth-hero" aria-label="Welcome">
        <div class="hero-content">
          <div class="brand-lockup">
            <img class="brand-logo" src="{{ $brandLogo }}" alt="{{ $appName }} logo" />
            <span class="brand-name">{{ $appName }}</span>
          </div>

          <div class="hero-copy">
            <p class="hero-eyebrow">Modern inventory workspace</p>
            <h1 class="hero-title">{{ $heroTitle }}</h1>
            <p class="hero-subtitle">{{ $heroSubtitle }}</p>
          </div>

          <div class="hero-visual" aria-hidden="true">
            <div class="visual-top">
              <div class="visual-lines">
                <span class="visual-line long"></span>
                <span class="visual-line short"></span>
              </div>
              <span class="visual-badge">$</span>
            </div>
            <div class="visual-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <main class="auth-panel">
        <div class="auth-panel-inner">
          <div class="panel-brand">
            <img class="brand-logo" src="{{ $brandLogo }}" alt="{{ $appName }} logo" />
            <span class="brand-name">{{ $appName }}</span>
          </div>

          <header class="panel-header">
            <p class="panel-eyebrow">Secure access</p>
            <h2 class="panel-title"><span>{{ $panelTitle }}</span></h2>
            <p class="panel-subtitle">{{ $panelSubtitle }}</p>
          </header>

          @if (session('status'))
          <div class="auth-alert success">{{ session('status') }}</div>
          @endif

          @if ($errors->any())
          <div class="auth-alert error">
            <ul>
              @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
              @endforeach
            </ul>
          </div>
          @endif

          <form id="login_form" method="POST" action="{{ route('login') }}">
            @csrf
            <div class="field">
              <label for="email">Email</label>
              <div class="input-shell">
                <svg class="input-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4.75 6.75h14.5v10.5H4.75V6.75Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                  <path d="m5.25 7.25 6.75 5.5 6.75-5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input id="email" type="email" name="email" value="{{ old('email') }}" placeholder="you@company.com" autocomplete="email" required autofocus />
              </div>
            </div>

            <div class="field">
              <label for="password">Password</label>
              <div class="input-shell">
                <svg class="input-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7.25 10.25V8a4.75 4.75 0 0 1 9.5 0v2.25" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                  <path d="M6.25 10.25h11.5v9H6.25v-9Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                  <path d="M12 14.25v1.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
                <input id="password" type="password" name="password" placeholder="Enter your password" autocomplete="current-password" required />
                <button type="button" class="toggle-password" data-target="password">Show</button>
              </div>
            </div>

            <div class="form-meta">
              <a class="auth-link" href="{{ route('password.request') }}">Forgot password?</a>
            </div>

            <button type="submit" class="auth-btn" id="login_submit_btn">
              <span class="btn-text">Sign In</span>
              <span class="btn-loading" style="display:none"><span class="spinner"></span>Verifying</span>
            </button>
          </form>
        </div>
      </main>
    </div>

    <script>
      (function() {
        const form = document.getElementById('login_form');
        const submitBtn = document.getElementById('login_submit_btn');
        const showButtons = document.querySelectorAll('.toggle-password');

        showButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const target = document.getElementById(btn.dataset.target);
            const isHidden = target.type === 'password';
            target.type = isHidden ? 'text' : 'password';
            btn.textContent = isHidden ? 'Hide' : 'Show';
          });
        });

        if (!form) return;
        let submitted = false;
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        form.addEventListener('submit', () => {
          if (submitted) return;
          submitted = true;
          submitBtn.disabled = true;
          btnText.style.display = 'none';
          btnLoading.style.display = 'inline-flex';
        });
      })();
    </script>
  </body>
</html>
