@php
  /** @var \App\Models\Product $p */
  $productSlug = $p->slug ?? (string) $p->id;
  $imgUrl    = product_image_url($p->image);
  $descShort = \Illuminate\Support\Str::limit(strip_tags($p->note ?? ''), 600);
  $minPrice  = (float) ($p->display_price ?? ($p->price ?? 0));
  $variants  = $p->relationLoaded('variants') ? $p->variants : collect($p->variants ?? []);
  $variants  = collect($variants);
  $variantPayload = $variants->map(function($v) use ($currency) {
    $final = (float) ($v->display_price ?? ($v->price ?? 0));
    return [
      'id' => (int) ($v->id ?? 0),
      'name' => (string) ($v->name ?? ''),
      'price' => (float) ($v->price ?? 0),
      'display_price' => $final,
      'display_price_formatted' => $currency . number_format($final, 2, '.', ','),
      'image' => !empty($v->image) ? product_image_url($v->image) : null,
      'stock' => (int) max(0, $v->stock ?? $v->qty ?? 0),
    ];
  })->values();
  $productStock = $variants->isEmpty() ? (int) max(0, $p->stock ?? 0) : null;

  $allowOverselling = isset($s) ? (bool) ($s->allow_overselling ?? true) : true;
  if ($allowOverselling) {
    $isAvailable = true;
    $availabilityLabel = null;
  } else {
    if ($variants->isEmpty()) {
      $isAvailable = $productStock !== null && $productStock > 0;
      $availabilityLabel = $productStock !== null ? ($productStock > 0 ? __('messages.X_in_stock', ['count' => $productStock]) : __('messages.OutOfStock')) : null;
    } else {
      $isAvailable = $variantPayload->contains(fn($v) => ($v['stock'] ?? 0) > 0);
      $availabilityLabel = $isAvailable ? __('messages.InStock') : __('messages.OutOfStock');
    }
  }
@endphp
<div class="card product-card border-0 rounded-4 shadow-sm h-100">
  <div class="product-media ratio ratio-1x1 position-relative rounded-top-4 overflow-hidden">
    <img src="{{ $imgUrl }}" class="img-cover" alt="{{ $p->name }}">

    <div class="icon-stack">
      <button type="button"
              class="btn btn-light btn-sm rounded-circle shadow position-absolute top-0 end-0 m-2 js-quick-view"
              title="{{ __('messages.QuickView') }}"
              style="z-index:3"
              data-id="{{ $p->id }}"
              data-slug="{{ $productSlug }}"
              data-name="{{ e($p->name) }}"
              data-price="{{ number_format($minPrice, 2, '.', '') }}"
              data-image="{{ $imgUrl }}"
              data-currency="{{ $currency }}"
              data-description="{{ e($descShort) }}"
              data-stock="{{ $productStock !== null ? $productStock : '' }}"
              data-variants='@json($variantPayload)'>
        <i class="bi bi-eye"></i>
      </button>
    </div>

    <div class="media-gradient"></div>
  </div>

  <div class="card-body p-3">
    <h6 class="product-title text-truncate mb-1" title="{{ $p->name }}">
      <span class="text-reset text-decoration-none">{{ $p->name }}</span>
    </h6>
    <div class="product-price fw-bold">
      {{ $currency }}{{ number_format($minPrice, 2, '.', ',') }}
    </div>
    @if($availabilityLabel !== null)
      <div class="small mt-1 {{ $isAvailable ? 'text-success' : 'text-danger' }}">
        {{ $availabilityLabel }}
      </div>
    @endif
  </div>

  <div class="card-footer bg-white border-0 pt-0 pb-3 px-3">
    <div class="d-grid">
      <button type="button"
              class="btn btn-sm btn-primary w-100 js-add-to-cart {{ !$isAvailable ? 'disabled' : '' }}"
              @if(!$isAvailable) disabled @endif
              data-out-of-stock="{{ $isAvailable ? '0' : '1' }}"
              data-id="{{ $p->id }}"
              data-slug="{{ $productSlug }}"
              data-name="{{ e($p->name) }}"
              data-price="{{ number_format($minPrice, 2, '.', '') }}"
              data-image="{{ $imgUrl }}"
              data-currency="{{ $currency }}"
              data-qty="1"
              data-product-id="{{ $p->id }}"
              data-product-image="{{ $imgUrl }}"
              data-variants='@json($variantPayload)'
              data-stock="{{ $productStock !== null ? $productStock : '' }}">
        <i class="bi bi-cart-plus"></i> {{ __('messages.AddToCart') }}
      </button>
      <div class="small mt-2 js-add-status text-muted" style="min-height:1.25rem;"></div>
    </div>
  </div>
</div>
