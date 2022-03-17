const timestamp = 1647548114453;
const build = [
  "/hexordle/internal/start-a081f2a8.js",
  "/hexordle/internal/pages/__layout.svelte-ec2cd56a.js",
  "/hexordle/internal/assets/pages/__layout.svelte-2cd3303a.css",
  "/hexordle/internal/error.svelte-168f833c.js",
  "/hexordle/internal/pages/index.svelte-5f3e15be.js",
  "/hexordle/internal/assets/pages/index.svelte-5ef8e306.css",
  "/hexordle/internal/pages/settings/index.svelte-776cb792.js",
  "/hexordle/internal/pages/stats/index.svelte-12562cd5.js",
  "/hexordle/internal/assets/pages/stats/index.svelte-ad656fcf.css",
  "/hexordle/internal/chunks/vendor-b66e214f.js",
  "/hexordle/internal/chunks/paths-4b3c6e7e.js",
  "/hexordle/internal/chunks/stores-3cd064d2.js",
  "/hexordle/internal/chunks/Guess-bb209419.js",
  "/hexordle/internal/assets/Guess-8f79f69d.css"
];
const files = [
  "/hexordle/.nojekyll",
  "/hexordle/favicon.png"
];
const CACHE_NAME = `hexordle-cache-v1-${timestamp}`;
const HTML_FILES = ["/", "/settings", "/stats"];
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
