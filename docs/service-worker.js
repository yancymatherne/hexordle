const timestamp = 1649993302226;
const build = [
  "/hexordle/internal/start-d533db08.js",
  "/hexordle/internal/pages/__layout.svelte-b8ef8991.js",
  "/hexordle/internal/assets/pages/__layout.svelte-c29774a7.css",
  "/hexordle/internal/error.svelte-f779b353.js",
  "/hexordle/internal/pages/index.svelte-12a15217.js",
  "/hexordle/internal/assets/pages/index.svelte-e41f8867.css",
  "/hexordle/internal/pages/settings/index.svelte-074830d9.js",
  "/hexordle/internal/pages/stats/index.svelte-a1d995bf.js",
  "/hexordle/internal/assets/pages/stats/index.svelte-ad656fcf.css",
  "/hexordle/internal/chunks/vendor-7aa51e73.js",
  "/hexordle/internal/chunks/paths-4b3c6e7e.js",
  "/hexordle/internal/chunks/stores-2f9f97e3.js",
  "/hexordle/internal/chunks/Guess-9bfce004.js",
  "/hexordle/internal/assets/Guess-8f79f69d.css"
];
const files = [
  "/hexordle/.nojekyll",
  "/hexordle/favicon.png"
];
const CACHE_NAME = `hexordle-cache-v1-${timestamp}`;
const HTML_FILES = ["/", "/settings", "/stats"].map((path) => "/hexordle" + path);
self.addEventListener("install", function(event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    console.log("Opened cache");
    return cache.addAll([...build, ...files, ...HTML_FILES]);
  }));
});
self.addEventListener("fetch", function(event) {
  event.respondWith(caches.match(event.request).then(function(cachedResponse) {
    if (cachedResponse) {
      return cachedResponse;
    }
    return fetch(event.request).then(function(response) {
      if (response && response.status !== 200 && response.type !== "basic") {
        var responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
      }
      return response;
    });
  }));
});
self.addEventListener("activate", function(event) {
  event.waitUntil(caches.keys().then(function(cacheNames) {
    return Promise.all(cacheNames.map(function(cacheName) {
      if (cacheName !== CACHE_NAME) {
        return caches.delete(cacheName);
      }
    }));
  }));
});
