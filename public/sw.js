const CACHE='core-trainer-v6';
const APP=['/','/manifest.webmanifest','/icon-192.png','/icon-512.png','/icon-512-maskable.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const request=event.request.destination==='image' ? new Request(event.request,{cache:'no-store'}) : event.request;
  event.respondWith(fetch(request).then(response=>{
    const copy=response.clone();
    caches.open(CACHE).then(cache=>cache.put(event.request,copy));
    return response;
  }).catch(()=>caches.match(event.request).then(response=>response||caches.match('/'))));
});
