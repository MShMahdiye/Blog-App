const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html','bundle.js','App.css','App.js','Blog.css','Blogs.js','DashboardOutlet.js','DashboardOutlet.css',
'WriteBlog.js','WriteBlog.css','BlogEdit.js','EditorBlog.js','BlogByUser.js','User.js','UserMe.js','UserMe.css',
'UserMeInfo.js','UserMeInfoEdit.js','AnimatedText.js','AnimatedText.css','Article.js','Article.css','Blog.js',
'Header.js','Header.css','Home.js','Home.css','Login.js','Login.css','Me.js','Me.css','NavigationBar.js',
'NavigationBar.css','Signup.js','Signup.css','localhost'];

const self = this;

self.addEventListener('install',(event) =>{
  event.waitUntil(caches.open(CACHE_NAME).then((cache) =>{
    console.log('Cache is opened');
    return cache.addAll(urlsToCache);
  }))
})

self.addEventListener('fetch',(event) => {
  if(!navigator.onLine){
    event.respondWith(
      caches.match(event.request).then(() => {
        console.log('from fetch and match !');
        return fetch(event.request)
        
        //.catch(() => caches.match('offline.html'))
      })
    )
  }
})

self.addEventListener('activate',
(event) => {
  const targetCacheList = [];

  targetCacheList.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then(
      (cacheNames) => Promise.all(cacheNames.map(
          (cacheName) => {
            if(!targetCacheList.includes(cacheName)){
              return caches.delete(cacheName);
            }
          }
        ))
    )
  )
})