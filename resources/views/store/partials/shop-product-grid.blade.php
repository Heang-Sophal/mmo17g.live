@php
  $currency   = $currency ?? ($s->currency_code ?? '$');
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp
{{-- Applied filter chips --}}
@if($hasFilters)
  <div class="d-flex flex-wrap gap-2 mb-3">
    @if(filled($q))
      <a href="{{ route('store.shop', request()->except('q','page')) }}" class="chip">
        <i class="bi bi-search"></i> "{{ $q }}" <span class="chip-x">×</span>
      </a>
    @endif
    @if(filled($cat))
      @php $catName = optional($categories->firstWhere('id', $cat))->name ?? $cat; @endphp
      <a href="{{ route('store.shop', request()->except('category','page')) }}" class="chip">
        <i class="bi bi-tag"></i> {{ $catName }} <span class="chip-x">×</span>
      </a>
    @endif
    @if(filled($collection))
      @php
        $coObj  = $collections->first(fn($c) => (string)$c->slug === (string)$collection || (string)$c->id === (string)$collection);
        $coName = $coObj->title ?? $collection;
      @endphp
      <a href="{{ route('store.shop', request()->except('collection','page')) }}" class="chip">
        <i class="bi bi-collection"></i> {{ $coName }} <span class="chip-x">×</span>
      </a>
    @endif
    @if(filled($min))
      <a href="{{ route('store.shop', request()->except('min','page')) }}" class="chip">
        {{ __('messages.Min') }}: {{ $currency }}{{ number_format((float)$min, 2) }} <span class="chip-x">×</span>
      </a>
    @endif
    @if(filled($max))
      <a href="{{ route('store.shop', request()->except('max','page')) }}" class="chip">
        {{ __('messages.Max') }}: {{ $currency }}{{ number_format((float)$max, 2, '.', ',') }} <span class="chip-x">×</span>
      </a>
    @endif
    <a href="{{ route('store.shop') }}" class="chip chip-reset">
      <i class="bi bi-x-circle"></i> {{ __('messages.ResetAll') }}
    </a>
  </div>
@endif

@if($products->count())
  <div class="row g-4">
    @foreach($products as $p)
      <div class="col-6 col-md-4 col-xl-3">
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      </div>
    @endforeach
  </div>

  @php $products->appends(request()->except('page')); @endphp
  @if ($products->hasPages())
    <div class="mt-4 d-flex flex-column align-items-center gap-2">
      <div class="text-muted small">
        @if($products->total() > 0)
          {{ __('messages.Showing') }}
          <strong>{{ $products->firstItem() }}</strong>–<strong>{{ $products->lastItem() }}</strong>
          {{ __('messages.of') }} <strong>{{ $products->total() }}</strong> {{ __('messages.productsLower') }}
        @endif
      </div>
      <nav aria-label="Product pagination">
        <ul class="pagination pagination-modern mb-0">
          @if ($products->onFirstPage())
            <li class="page-item disabled"><span class="page-link"><i class="bi bi-chevron-left"></i></span></li>
          @else
            <li class="page-item"><a class="page-link" href="{{ $products->previousPageUrl() }}"><i class="bi bi-chevron-left"></i></a></li>
          @endif
          @php
            $current = $products->currentPage();
            $last    = $products->lastPage();
            $window  = 1;
            $pages   = collect([1, $last])->merge(range(max(1, $current - $window), min($last, $current + $window)))->unique()->sort()->values();
            $prev = null;
          @endphp
          @foreach ($pages as $page)
            @if(!is_null($prev) && $page - $prev > 1)
              <li class="page-item disabled"><span class="page-link">…</span></li>
            @endif
            @if ($page == $current)
              <li class="page-item active"><span class="page-link">{{ $page }}</span></li>
            @else
              <li class="page-item"><a class="page-link" href="{{ $products->url($page) }}">{{ $page }}</a></li>
            @endif
            @php $prev = $page; @endphp
          @endforeach
          @if ($products->hasMorePages())
            <li class="page-item"><a class="page-link" href="{{ $products->nextPageUrl() }}"><i class="bi bi-chevron-right"></i></a></li>
          @else
            <li class="page-item disabled"><span class="page-link"><i class="bi bi-chevron-right"></i></span></li>
          @endif
        </ul>
      </nav>
    </div>
  @endif
@else
  <div class="text-center py-5">
    <div class="display-6 mb-2">😕</div>
    <h5 class="mb-2">{{ __('messages.NoProductsFound') }}</h5>
    <p class="text-muted mb-4">{{ __('messages.TryAdjustingFiltersOrBrowseAll') }}</p>
    <a href="{{ route('store.shop') }}" class="btn btn-outline-primary">{{ __('messages.ClearFilters') }}</a>
  </div>
@endif
