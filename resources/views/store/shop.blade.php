@extends('layouts.store')

@section('content')
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

{{-- ===== Top bar ===== --}}
<section class="shop-hero border-bottom bg-gradient-subtle">
  <div class="container py-4">
    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
      <div>
        <h1 class="h3 mb-1">{{ __('messages.Shop') }}</h1>
        <div class="text-muted small">
          {{ trans_choice('messages.products', $total, ['count' => $total]) }}
          @if($hasFilters) • {{ __('messages.FiltersApplied') }} @endif
        </div>
      </div>

      <form method="get" action="{{ route('store.shop') }}" class="d-flex align-items-end gap-2 flex-wrap">
        {{-- keep other query params when changing sort --}}
        @foreach(request()->except(['sort','page']) as $k => $v)
          @if(is_array($v))
            @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
          @else
            <input type="hidden" name="{{ $k }}" value="{{ $v }}">
          @endif
        @endforeach

        <div class="d-flex align-items-end gap-2">
          <div>
            <label class="form-label small mb-1">{{ __('messages.Sort') }}</label>
            <select name="sort" class="form-select form-select-sm">
              <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Latest') }}</option>
              <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.PriceUp') }}</option>
              <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.PriceDown') }}</option>
            </select>
          </div>
          <button class="btn btn-sm btn-primary">
            <i class="bi bi-arrow-repeat"></i> {{ __('messages.Update') }}
          </button>
        </div>

        <button class="btn btn-outline-primary d-lg-none ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#filtersOffcanvas">
          <i class="bi bi-funnel"></i> {{ __('messages.Filters') }}
        </button>
      </form>
    </div>
  </div>
</section>

<div class="container py-4">
  <div class="row">
    {{-- ===== Sidebar filters (desktop) ===== --}}
    <aside class="col-lg-3 d-none d-lg-block">
      @include('store.partials.filters-card', [
        'q' => $q, 'cat' => $cat, 'collection' => $collection,
        'min' => $min, 'max' => $max, 'sort' => $sort,
        'categories' => $categories, 'collections' => $collections
      ])
    </aside>

    {{-- ===== Main content ===== --}}
    <main class="col-lg-9">
      @include('store.partials.shop-product-grid', [
        's' => $s,
        'products' => $products,
        'categories' => $categories,
        'collections' => $collections,
        'q' => $q,
        'cat' => $cat,
        'collection' => $collection,
        'min' => $min,
        'max' => $max,
        'sort' => $sort,
        'currency' => $currency,
      ])
    </main>
  </div>
</div>

{{-- ===== Offcanvas Filters (mobile) ===== --}}
<div class="offcanvas offcanvas-end" tabindex="-1" id="filtersOffcanvas" aria-labelledby="filtersOffcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="filtersOffcanvasLabel">{{ __('messages.Filters') }}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="{{ __('messages.Close') }}"></button>
  </div>
  <div class="offcanvas-body">
    @include('store.partials.filters-card', [
      'q' => $q, 'cat' => $cat, 'collection' => $collection,
      'min' => $min, 'max' => $max, 'sort' => $sort,
      'categories' => $categories, 'collections' => $collections,
      'isOffcanvas' => true
    ])
  </div>
</div>

@include('store.partials.shop-modals-scripts', ['currency' => $currency])
@endsection
