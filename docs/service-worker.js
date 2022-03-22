const timestamp = 1647929399593;
const build = [
  "/hexordle/internal/start-4dbd9fd2.js",
  "/hexordle/internal/pages/__layout.svelte-1cf19f55.js",
  "/hexordle/internal/assets/pages/__layout.svelte-5291c7e2.css",
  "/hexordle/internal/error.svelte-f093786e.js",
  "/hexordle/internal/pages/index.svelte-61070f5b.js",
  "/hexordle/internal/assets/pages/index.svelte-5f52148b.css",
  "/hexordle/internal/pages/settings/index.svelte-397856fd.js",
  "/hexordle/internal/pages/stats/index.svelte-5fbaf473.js",
  "/hexordle/internal/assets/pages/stats/index.svelte-ad656fcf.css",
  "/hexordle/internal/chunks/vendor-ddc51e67.js",
  "/hexordle/internal/chunks/paths-4b3c6e7e.js",
  "/hexordle/internal/chunks/stores-4e90ffbc.js",
  "/hexordle/internal/chunks/Guess-ae42788d.js",
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
