// Service worker minimo: só existe pra o Chrome/Android reconhecer o site
// como um "app instalável" de verdade (sem isso, ele mostra o iconezinho
// do navegador em cima do ícone na tela inicial). Não faz cache nem
// funciona offline — só repassa os pedidos direto pra internet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
 
