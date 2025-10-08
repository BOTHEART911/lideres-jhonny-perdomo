// SW mínimo para PWA en GitHub Pages
// No cachea nada; solo asegura control y compatibilidad con criterios de instalación

self.addEventListener('install', (event) => {
  // Toma control lo antes posible
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Reclama clientes para que la página quede controlada tras la recarga
  event.waitUntil(self.clients.claim());
});

// Fetch passthrough (requerido por algunos navegadores antiguos para considerar “instalable”)
self.addEventListener('fetch', () => {
  // Intencionalmente vacío: deja que la red maneje todas las peticiones
});
