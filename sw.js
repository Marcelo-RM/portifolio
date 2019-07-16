var staticChacheName = 'portifolio_16/07/2019_19:00';
this.addEventListener("install", event => {
    this.skipWaiting();

    event.waitUntil(
        caches.open(staticChacheName)
        .then(cache => {
            return cache.addAll([
                '/'
            ]);
        })
    );
});