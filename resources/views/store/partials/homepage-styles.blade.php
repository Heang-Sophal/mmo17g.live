{{-- Clean, modern design system — great for fashion & general stores --}}
<style>
  /* === Design tokens (inherit --brand, --brand-2 from layout) === */
  .store-homepage {
    --store-section-spacing: 4rem;
    --store-card-radius: 1rem;
    --store-card-shadow: 0 1px 3px rgba(0,0,0,0.06);
    --store-card-shadow-hover: 0 12px 32px rgba(0,0,0,0.1);
    --store-overlay: linear-gradient(135deg, rgba(108,92,231,0.04), rgba(0,194,255,0.04));
    --store-text: #0f172a;
    --store-text-muted: #64748b;
  }

  /* === Section titles — clean, modern === */
  .store-section-title {
    font-size: clamp(1.125rem, 2.5vw, 1.375rem);
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--store-text);
    line-height: 1.3;
  }
  .store-section-label {
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--store-text-muted);
  }
  .store-link-arrow {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--brand);
    text-decoration: none;
    transition: color 0.2s ease, transform 0.2s ease;
  }
  .store-link-arrow:hover { color: var(--brand-2); transform: translateX(3px); }

  /* === Product cards — fashion-friendly, clean === */
  .store-homepage .product-card {
    border-radius: var(--store-card-radius);
    box-shadow: var(--store-card-shadow);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.06);
    background: #fff;
  }
  .store-homepage .product-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--store-card-shadow-hover);
  }
  .store-homepage .product-media {
    position: relative;
    overflow: hidden;
    background: #f8fafc;
  }
  .store-homepage .product-media img {
    transition: transform 0.4s ease;
  }
  .store-homepage .product-card:hover .product-media img {
    transform: scale(1.04);
  }
  .store-homepage .product-title {
    font-weight: 500;
    font-size: 0.9375rem;
    color: var(--store-text);
    letter-spacing: -0.01em;
  }
  .store-homepage .product-price {
    font-size: 1rem;
    font-weight: 600;
    color: var(--store-text);
  }
  .store-homepage .icon-stack .btn {
    opacity: 0.85;
    transition: opacity 0.2s, transform 0.2s;
  }
  .store-homepage .product-card:hover .icon-stack .btn {
    opacity: 1;
  }
  .store-homepage .media-gradient {
    background: linear-gradient(to top, rgba(0,0,0,.25) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  .store-homepage .product-card:hover .media-gradient { opacity: 1; }

  /* === Banners === */
  .store-banner-wrap {
    border-radius: var(--store-card-radius);
    overflow: hidden;
    box-shadow: var(--store-card-shadow);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .store-banner-wrap:hover {
    transform: translateY(-2px);
    box-shadow: var(--store-card-shadow-hover);
  }
  .store-banner-wrap img {
    transition: transform 0.4s ease;
  }
  .store-banner-wrap:hover img { transform: scale(1.02); }

  /* === Newsletter CTA — minimal, modern === */
  .store-newsletter-block {
    background: var(--store-overlay);
    border: 1px solid rgba(0,0,0,0.06);
    border-radius: var(--store-card-radius);
    padding: 2rem 2.25rem;
  }
  .store-newsletter-block .form-control {
    border-radius: 0.5rem;
    border: 1px solid rgba(0,0,0,0.1);
    padding: 0.75rem 1rem;
  }
  .store-newsletter-block .form-control:focus {
    border-color: var(--brand);
    box-shadow: 0 0 0 2px rgba(108,92,231,0.12);
  }

  /* === Promo block (homepage builder) === */
  .store-promo-block {
    border-radius: var(--store-card-radius);
    overflow: hidden;
    background: var(--store-overlay);
    border: 1px solid rgba(0,0,0,0.06);
    padding: 2.5rem 2rem;
  }

  /* === Categories strip (homepage builder) === */
  .store-categories-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }
  .store-categories-strip a {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    background: #f1f5f9;
    color: var(--store-text);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background 0.2s, color 0.2s;
  }
  .store-categories-strip a:hover {
    background: var(--brand);
    color: #fff;
  }
</style>
