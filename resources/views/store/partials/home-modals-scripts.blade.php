@php
  $currency = $currency ?? (isset($s) ? ($s->currency_code ?? '$') : '$');
  $nlBtn    = $nlBtn ?? __('messages.Subscribe');
@endphp
{{-- Quick View Modal --}}
<div class="modal fade" id="quickViewModal" tabindex="-1" aria-labelledby="quickViewLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content rounded-4">
      <div class="modal-body p-0">
        <div class="row g-0">
          <div class="col-lg-6">
            <div class="qv-media">
              <img id="qvImg" src="" alt="Product" class="qv-img">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="p-4">
              <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="{{ __('messages.Close') }}"></button>
              <h3 id="qvTitle" class="h5 mb-1">—</h3>
              <div id="qvPrice" class="h4 text-primary mb-3">—</div>
              <div id="qvDesc" class="text-muted mb-3" style="max-height: 240px; overflow:auto;">—</div>
              <div id="qvVariantWrap" class="mb-3 d-none">
                <div class="fw-semibold mb-1">{{ __('messages.ChooseVariant') }}</div>
                <ul id="qvVariantList" class="list-group mb-2"></ul>
                <div class="text-muted small" id="qvSelectedInfo">—</div>
              </div>
              <div class="d-flex gap-2">
                <button type="button" id="qvAddBtn" class="btn btn-primary">
                  <i class="bi bi-cart-plus"></i> {{ __('messages.AddToCart') }}
                </button>
              </div>
              <div id="qvStatus" class="small text-muted mt-3" style="min-height:1.25rem;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{{-- Variant Picker Modal --}}
<div class="modal fade" id="variantPickerModal" tabindex="-1" aria-labelledby="variantPickerLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content rounded-4">
      <div class="modal-header">
        <h5 class="modal-title" id="variantPickerLabel">{{ __('messages.ChooseVariant') }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="{{ __('messages.Close') }}"></button>
      </div>
      <div class="modal-body">
        <div id="vpProductTitle" class="fw-semibold mb-2">—</div>
        <ul id="vpVariantList" class="list-group mb-3"></ul>
        <div class="d-flex align-items-center justify-content-between">
          <div class="text-muted small" id="vpSelectedInfo">—</div>
          <button type="button" class="btn btn-primary" id="vpConfirmBtn" disabled>
            <i class="bi bi-cart-plus"></i> {{ __('messages.AddToCart') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .product-card{ border-radius:1rem; transition: transform .15s ease, box-shadow .15s ease; box-shadow: 0 2px 10px rgba(15,23,42,.06); }
  .product-card:hover{ transform: translateY(-4px); box-shadow: 0 12px 28px rgba(15,23,42,.12); }
  .product-media{ position:relative; }
  .img-cover{ width:100%; height:100%; object-fit:cover; display:block; }
  .media-gradient{ position:absolute; inset:0; background: linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,0) 50%); opacity:0; transition: opacity .2s ease; }
  .product-media:hover .media-gradient{ opacity:.9; }
  .icon-stack{ position:absolute; top:.6rem; right:.6rem; display:flex; flex-direction:column; gap:.4rem; z-index:2; }
  .qv-media{ position:relative; height:100%; min-height: 420px; background:#0b1220; display:flex; align-items:center; justify-content:center; overflow:hidden; border-top-left-radius:1rem; border-bottom-left-radius:1rem; }
  .qv-img{ max-width:100%; max-height:80vh; transition: transform .1s ease; cursor: zoom-in; user-select:none; }
  @media (max-width: 991.98px){ .qv-media{ border-bottom-left-radius:0; border-top-right-radius:1rem; } }
</style>

<script>
(function(){
  const NOIMG = @json(asset('images/products/no-image.png'));
  const CURRENCY = @json($currency);
  const ALLOW_OVERSELLING = window.__ALLOW_OVERSELLING__ !== false;
  const OUT_OF_STOCK_MSG = @json(__('messages.OutOfStock'));
  function safeParse(str){ try { return JSON.parse(str || '[]'); } catch(e){ return []; } }
  function formatPrice(amount, currency) {
    const sym = currency || CURRENCY;
    const num = Number(amount || 0);
    const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return sym + formatted;
  }
  const money = (v, currency) => formatPrice(v, currency);
  const html  = (s) => String(s||'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  const qvModalEl = document.getElementById('quickViewModal');
  const imgEl = document.getElementById('qvImg');
  const titleEl = document.getElementById('qvTitle');
  const priceEl = document.getElementById('qvPrice');
  const descEl = document.getElementById('qvDesc');
  const wrapEl = document.getElementById('qvVariantWrap');
  const listEl = document.getElementById('qvVariantList');
  const infoEl = document.getElementById('qvSelectedInfo');
  const addBtn = document.getElementById('qvAddBtn');
  const statusEl = document.getElementById('qvStatus');
  let qvProduct = null, qvSelected = null;
  let zoom = 1, maxZoom = 2.2;

  document.addEventListener('click', function(e){
    const trigger = e.target.closest('.js-quick-view');
    if(!trigger) return;
    e.preventDefault();
    const variants = safeParse(trigger.dataset.variants);
    const simpleStock = (trigger.dataset.stock !== undefined && trigger.dataset.stock !== '') ? parseInt(trigger.dataset.stock, 10) : null;
    qvProduct = { id: Number(trigger.dataset.id), slug: trigger.dataset.slug, name: trigger.dataset.name || '', price: parseFloat(trigger.dataset.price || '0'), image: trigger.dataset.image || NOIMG, currency: trigger.dataset.currency || CURRENCY, description: trigger.dataset.description || '', variants: Array.isArray(variants) ? variants : [], stock: simpleStock };
    imgEl.src = qvProduct.image || NOIMG;
    titleEl.textContent = qvProduct.name || '—';
    descEl.innerHTML = (qvProduct.description || '').split('\n').map(html).join('<br>');
    listEl.innerHTML = '';
    qvSelected = null;
    if ((qvProduct.variants || []).length){
      wrapEl.classList.remove('d-none');
      (qvProduct.variants || []).forEach(v => {
        const priceShow = (typeof v.display_price !== 'undefined') ? v.display_price : v.price;
        const vStock = (typeof v.stock !== 'undefined' && v.stock !== null) ? Number(v.stock) : null;
        const outOfStock = !ALLOW_OVERSELLING && vStock !== null && vStock <= 0;
        const stockLabel = outOfStock ? ' <span class="text-danger small">— ' + html(OUT_OF_STOCK_MSG) + '</span>' : '';
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex align-items-center justify-content-between' + (outOfStock ? ' opacity-75' : '');
        li.innerHTML = '<div><div class="fw-semibold">'+html(v.name || '')+stockLabel+'</div><div class="text-muted small">'+money(priceShow, qvProduct.currency)+'</div></div><div><input class="form-check-input" type="radio" name="qvChoice" value="'+v.id+'"></div>';
        listEl.appendChild(li);
      });
      infoEl.textContent = @json(__('messages.SelectVariant'));
      addBtn.disabled = true;
      listEl.addEventListener('change', onQVChange, { once:true });
      priceEl.textContent = money(qvProduct.price, qvProduct.currency);
    } else {
      wrapEl.classList.add('d-none');
      infoEl.textContent = '—';
      const simpleOut = !ALLOW_OVERSELLING && qvProduct.stock != null && Number(qvProduct.stock) <= 0;
      addBtn.disabled = simpleOut;
      if (simpleOut) statusEl.textContent = OUT_OF_STOCK_MSG; else statusEl.textContent = '';
      priceEl.textContent = money(qvProduct.price, qvProduct.currency);
    }
    statusEl.textContent = '';
    if (window.bootstrap && qvModalEl) bootstrap.Modal.getOrCreateInstance(qvModalEl).show();
  });

  function onQVChange(){
    const chosen = listEl.querySelector('input[name="qvChoice"]:checked');
    if (!chosen){ qvSelected = null; infoEl.textContent = @json(__('messages.SelectVariant')); addBtn.disabled = true; statusEl.textContent = ''; }
    else {
      const id = Number(chosen.value);
      qvSelected = (qvProduct.variants || []).find(v => Number(v.id) === id) || null;
      if (qvSelected){
        const priceShow = (typeof qvSelected.display_price !== 'undefined') ? qvSelected.display_price : qvSelected.price;
        const vStock = (typeof qvSelected.stock !== 'undefined' && qvSelected.stock !== null) ? Number(qvSelected.stock) : null;
        const outOfStock = !ALLOW_OVERSELLING && vStock !== null && vStock <= 0;
        infoEl.textContent = (qvSelected.name || '') + ' — ' + money(priceShow, qvProduct.currency) + (outOfStock ? ' (' + OUT_OF_STOCK_MSG + ')' : '');
        priceEl.textContent = money(priceShow, qvProduct.currency);
        addBtn.disabled = outOfStock;
        statusEl.textContent = outOfStock ? OUT_OF_STOCK_MSG : '';
      }
    }
    listEl.addEventListener('change', onQVChange, { once:true });
  }

  addBtn.addEventListener('click', function(){
    if (!qvProduct || addBtn.disabled) return;
    if (!ALLOW_OVERSELLING && (qvProduct.variants || []).length && qvSelected && (qvSelected.stock == null ? false : Number(qvSelected.stock) <= 0)) return;
    if (!ALLOW_OVERSELLING && !(qvProduct.variants || []).length && qvProduct.stock != null && Number(qvProduct.stock) <= 0) return;
    let item;
    if ((qvProduct.variants || []).length){
      if (!qvSelected) { statusEl.textContent = @json(__('messages.SelectVariant')); return; }
      const priceUse = (typeof qvSelected.display_price !== 'undefined') ? qvSelected.display_price : qvSelected.price;
      const stock = (typeof qvSelected.stock !== 'undefined' && qvSelected.stock !== null) ? Number(qvSelected.stock) : null;
      item = { id: String(qvProduct.id) + ':' + String(qvSelected.id), product_id: qvProduct.id, product_variant_id: Number(qvSelected.id), name: (qvProduct.name || 'Item') + ' — ' + (qvSelected.name || ''), variant_name: qvSelected.name || '', price: Number(priceUse || 0), qty: 1, image: qvProduct.image || NOIMG, slug: qvProduct.slug || '', currency: qvProduct.currency || CURRENCY, stock: stock };
    } else {
      item = { id: String(qvProduct.id), product_id: qvProduct.id, name: qvProduct.name || 'Item', price: Number(qvProduct.price || 0), qty: 1, image: qvProduct.image || NOIMG, slug: qvProduct.slug || '', currency: qvProduct.currency || CURRENCY, stock: qvProduct.stock != null ? Number(qvProduct.stock) : null };
    }
    try { CartLS.add(item, 1); } catch(e){ console.error(e); }
    if (window.bootstrap && qvModalEl) bootstrap.Modal.getOrCreateInstance(qvModalEl).hide();
  });

  imgEl.addEventListener('click', function(){ zoom = (zoom === 1 ? maxZoom : 1); imgEl.style.transform = 'scale(' + zoom + ')'; imgEl.style.cursor = (zoom > 1 ? 'zoom-out' : 'zoom-in'); });
  imgEl.addEventListener('mousemove', function(e){ if(zoom === 1) return; const rect = imgEl.getBoundingClientRect(); const x = ((e.clientX - rect.left) / rect.width) * 100; const y = ((e.clientY - rect.top) / rect.height) * 100; imgEl.style.transformOrigin = x + '% ' + y + '%'; });
  qvModalEl.addEventListener('hidden.bs.modal', () => { zoom = 1; imgEl.style.transform = 'scale(1)'; imgEl.style.transformOrigin = 'center center'; });

  const vpEl = document.getElementById('variantPickerModal');
  const vpTitle = document.getElementById('vpProductTitle');
  const vpList = document.getElementById('vpVariantList');
  const vpInfo = document.getElementById('vpSelectedInfo');
  const vpBtn = document.getElementById('vpConfirmBtn');
  let vpProduct = null, vpSelected = null;

  function openVariantPicker(source){
    const variants = safeParse(source.dataset.variants);
    vpProduct = { id: Number(source.dataset.productId || source.dataset.id), name: source.dataset.name || source.getAttribute('data-name') || '', image: source.dataset.productImage || source.dataset.image || NOIMG, currency: source.dataset.currency || CURRENCY, slug: source.dataset.slug || '', variants: Array.isArray(variants) ? variants : [] };
    vpSelected = null;
    vpTitle.textContent = vpProduct.name || '';
    vpList.innerHTML = '';
    (vpProduct.variants || []).forEach(v => {
      const priceShow = (typeof v.display_price !== 'undefined') ? v.display_price : v.price;
      const vStock = (typeof v.stock !== 'undefined' && v.stock !== null) ? Number(v.stock) : null;
      const outOfStock = !ALLOW_OVERSELLING && vStock !== null && vStock <= 0;
      const stockLabel = outOfStock ? ' <span class="text-danger small">— ' + html(OUT_OF_STOCK_MSG) + '</span>' : '';
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex align-items-center justify-content-between' + (outOfStock ? ' opacity-75' : '');
      li.innerHTML = '<div><div class="fw-semibold">'+html(v.name || '')+stockLabel+'</div><div class="text-muted small">'+money(priceShow, vpProduct.currency)+'</div></div><div><input class="form-check-input" type="radio" name="vpChoice" value="'+v.id+'"></div>';
      vpList.appendChild(li);
    });
    vpInfo.textContent = @json(__('messages.SelectVariant'));
    vpBtn.disabled = true;
    vpList.addEventListener('change', onVPChange, { once:true, passive:false });
    if (window.bootstrap && vpEl) bootstrap.Modal.getOrCreateInstance(vpEl).show();
  }

  function onVPChange(){
    const chosen = vpList.querySelector('input[name="vpChoice"]:checked');
    if (!chosen){ vpSelected = null; vpBtn.disabled = true; vpInfo.textContent = @json(__('messages.SelectVariant')); }
    else { const id = Number(chosen.value); vpSelected = (vpProduct.variants || []).find(v => Number(v.id) === id) || null; if (vpSelected){ const priceShow = (typeof vpSelected.display_price !== 'undefined') ? vpSelected.display_price : vpSelected.price; vpInfo.textContent = (vpSelected.name || '') + ' — ' + money(priceShow, vpProduct.currency); vpBtn.disabled = false; } }
    vpList.addEventListener('change', onVPChange, { once:true, passive:false });
  }

  vpBtn.addEventListener('click', function(){
    if (!vpProduct || !vpSelected || vpBtn.disabled) return;
    if (!ALLOW_OVERSELLING && vpSelected.stock != null && Number(vpSelected.stock) <= 0) return;
    const priceUse = (typeof vpSelected.display_price !== 'undefined') ? vpSelected.display_price : vpSelected.price;
    const stock = (typeof vpSelected.stock !== 'undefined' && vpSelected.stock !== null) ? Number(vpSelected.stock) : null;
    const item = { id: String(vpProduct.id) + ':' + String(vpSelected.id), product_id: vpProduct.id, product_variant_id: Number(vpSelected.id), name: (vpProduct.name || 'Item') + ' — ' + (vpSelected.name || ''), variant_name: vpSelected.name || '', price: Number(priceUse || 0), qty: 1, image: vpProduct.image || NOIMG, slug: vpProduct.slug || '', currency: vpProduct.currency || CURRENCY, stock: stock };
    try { CartLS.add(item, 1); } catch(e){ console.error(e); }
    if (window.bootstrap && vpEl) bootstrap.Modal.getOrCreateInstance(vpEl).hide();
  });

  document.addEventListener('click', function(e){
    const btn = e.target.closest('.js-add-to-cart');
    if (!btn) return;
    const variants = safeParse(btn.dataset.variants);
    if (Array.isArray(variants) && variants.length){
      e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
      if (!btn.dataset.productId) btn.dataset.productId = btn.dataset.id || '';
      if (!btn.dataset.productImage) btn.dataset.productImage = btn.dataset.image || NOIMG;
      openVariantPicker(btn);
      return;
    }
  }, true);

  document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("newsletterEmail");
    const btn = document.getElementById("newsletterBtn");
    const msg = document.getElementById("newsletterMsg");
    if(!form) return;
    form.addEventListener("submit", async function(e){
      e.preventDefault();
      msg.textContent = "";
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
      try {
        const resp = await fetch(@json(route('newsletter.subscribe')), { method: "POST", headers: { "X-CSRF-TOKEN": document.querySelector('input[name="_token"]').value, "Accept": "application/json" }, body: new FormData(form) });
        const data = await resp.json().catch(() => ({}));
        if (resp.ok) { msg.className = "text-success small mt-2"; msg.textContent = @json(__('messages.NewsletterThanks')); emailInput.value = ""; }
        else { msg.className = "text-danger small mt-2"; msg.textContent = data.message || @json(__('messages.NewsletterFailed')); }
      } catch (err) { msg.className = "text-danger small mt-2"; msg.textContent = @json(__('messages.NetworkErrorTryAgain')); }
      finally { btn.disabled = false; btn.innerHTML = '<i class="bi bi-envelope-paper me-1"></i> ' + @json($nlBtn); }
    });
  });
})();
</script>
