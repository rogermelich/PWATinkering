var version = 'v1::'

var offLineFundamentals = [
    '',
    '/',
    '/css/all-landing.css',
    '/js/all-landing.js'
];

var offLinePage = '<html><head><title>Opps we are offline</title></head><body>Opps you are off-line</body></html>'

self.addEventListener('install',function (event) {
    console.log('Installing...')
    event.waitUntil(
        caches.open(version + 'fundamentals').then(function (cache) {
            return cache.addAll(offLineFundamentals)
        }).catch(function () {
            console.log('ooooops')
        })
    )
})

self.addEventListener('activate',function (event) {
    console.log('Activate service worker...')
})

self.addEventListener('fetch',function (event) {
    console.log('Fetch service worker...')
    console.log(event.request.url)
    const url = new URL(event.request.url)
})