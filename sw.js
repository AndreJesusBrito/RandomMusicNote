const CACHE_NAME = '/';
const urlsToCache = [
  '/',

  '/index.html',

  '/styles.css',

  '/random_note.js',
  '/presets.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        debugger;
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


// request handling logic
self.addEventListener('fetch', function(event) {

  // only handle GETs and let the browser handle the rest
  if (event.request.method != 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
