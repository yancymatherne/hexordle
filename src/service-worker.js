import { build, files, timestamp } from '$service-worker';

const CACHE_NAME = `hexordle-cache-v1-${timestamp}`;
const HTML_FILES = ['/', '/settings', '/stats'].map(path => '/hexordle' + path);

self.addEventListener('install', function (event) {
	// @ts-ignore
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('Opened cache');
			return cache.addAll([...build, ...files, ...HTML_FILES]);
		})
	);
});

self.addEventListener('fetch', function (event) {
	// @ts-ignore
	event.respondWith(
		// @ts-ignore
		caches.match(event.request).then(function (cachedResponse) {
			// Cache hit - return response
			if (cachedResponse) {
				return cachedResponse;
			}

			// @ts-ignore
			return fetch(event.request).then(function (response) {
				// Check if we received a valid response
				if (response && response.status !== 200 && response.type !== 'basic') {
					// IMPORTANT: Clone the response. A response is a stream
					// and because we want the browser to consume the response
					// as well as the cache consuming the response, we need
					// to clone it so we have two streams.
					var responseToCache = response.clone();

					caches.open(CACHE_NAME).then(function (cache) {
						// @ts-ignore
						cache.put(event.request, responseToCache);
					});
				}

				return response;
			});
		})
	);
});

self.addEventListener('activate', function (event) {
	// @ts-ignore
	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (cacheName !== CACHE_NAME) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
