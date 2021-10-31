// inspired from https://gist.github.com/kosamari/7c5d1e8449b2fbc97d372675f16b566e

const APP_PREFIX = 'RandomMusicNote';
const CACHE_NAME = './';
const CACHE_ROOT = '/RandomMusicNote';
const urlsToCache = [
  '/',

  '/index.html',

  '/styles.css',

  '/random_note.js',
  '/presets.js',
].map(url => CACHE_ROOT + url);


// Respond with cached resources
self.addEventListener('fetch', function (event) {

  // only handle GETs and let the browser handle the rest
  if (event.request.method != 'GET') return;

  event.respondWith(
    caches.match(event.request).then(function (request) {
      return request || fetch(e.request)
    })
  )
});

// Cache resources
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(urlsToCache)
    })
  )
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      // `keyList` contains all cache names under your username.github.io
      // filter out ones that has this app prefix to create white list
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      })
      // add current cache name to white list
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
});
