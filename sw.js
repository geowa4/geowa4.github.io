self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('geowa4')
    .then(cache => {
      return cache.addAll([
        '/',
        '/projects/',
        '/contact/',
        '/assets/app.js',
        'https://avatars.githubusercontent.com/u/136390?v=3',
        'https://api.github.com/users/geowa4/repos?sort=pushed&direction=desc&per_page=100'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request.url)
    .then(response => {
      return response || fetch(e.request);
    })
  );
});
