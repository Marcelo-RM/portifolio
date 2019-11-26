self.addEventListener("install", function(event) {
    var indexPage = new Request("index.html");
    event.waitUntil(
        fetch(indexPage).then(function(response) {
            return caches.open("pwabuilder-offline").then(function(cache) {
                console.log("[PWA Builder] cached index page during install " + response.url);
                return cache.put(indexPage, response);
            });
        })
    );
});

self.addEventListener("fetch", function(event) {
    var updateCache = function(request) {
        return caches.open("pwabuilder-offline").then(function(cache) {
            return fetch(request).then(function(response) {
                console.log("[PWA Builder] add page to offline " + response.url);
                return cache.put(request, response);
            });
        })
    };

    event.waitUntil(updateCache(event.request));

    event.respondWith(
        fetch(event.request).catch(function(error) {
            console.log("[PWA Builder] network request failed. Serving content from cache: " + error);

            return caches.open("pwabuilder-offline").then(function(cache) {
                return cache.match(event.request).then(function(matching) {
                    var report = !matching || matching.status == 404 ? Promise.reject("no-match") : matching;
                    return report;
                });
            });
        })
    );
});

self.addEventListener("push", function(event){
    console.log("[PWA Builder] Push received");
    console.log(`[PWA Builder] Push has this data: "${event.data.text()}"`);
    console.log(`[PWA Builder] ${event.data.text()}`);

    const title = "Marcelo Montlvão";
    const options = {
        body: "Obrigado por visitar!",
        icon: "imgs/perfil.png", //"/assets/apple-icon-60x60.png"
        vibrate: [800, 100, 500],
        badge: "assets/favicon-16x16.png"
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.');
  
    event.notification.close();
  
    event.waitUntil(
      clients.openWindow('https://marcelo-rm.github.io/portifolio')
    );
  });