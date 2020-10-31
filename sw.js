/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.0fcebb82.png",
    "revision": "71c32dc8b4da4840d61a1796a2bc230b"
  },
  {
    "url": "android-chrome-512x512.ae40f73d.png",
    "revision": "8bf8012c4f4ae251d660b4739171b7ed"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-precomposed.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "certificate.1e3570bc.pdf",
    "revision": "623cac53a40c141642b22bf50fe14628"
  },
  {
    "url": "confidentialite.23caa8c8.css",
    "revision": "df057b54b54c6936f387c1b9b685fe23"
  },
  {
    "url": "confidentialite.2eee47f4.css",
    "revision": "213e8197e52aedf203f00ca4d629949e"
  },
  {
    "url": "confidentialite.98e11c1c.js",
    "revision": "32cab994b5d56838305461741c5e258a"
  },
  {
    "url": "confidentialite.b0fe399b.js",
    "revision": "92f5813d26148f38ebc91f10ab5f678d"
  },
  {
    "url": "confidentialite.b65854e3.css",
    "revision": "3b9204d22903466b55b34e81a00444bf"
  },
  {
    "url": "confidentialite.f4e6baeb.js",
    "revision": "50538208f92ec58699313f95562bafcd"
  },
  {
    "url": "confidentialite.html",
    "revision": "7e5667ead6a573fd54b976fd4841cdd6"
  },
  {
    "url": "favicon-16x16.a4687270.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "favicon-32x32.623384d0.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "index.html",
    "revision": "33ac4087e0c50c3405fb0c038ecd53a3"
  },
  {
    "url": "logo_dnum_dark.0fe33c5b.svg",
    "revision": "da8bdc57d4f231585216c53da752d00a"
  },
  {
    "url": "logo_dnum.19ebc682.svg",
    "revision": "3a41bfa41e4671414da29db168c37d66"
  },
  {
    "url": "main.23caa8c8.css",
    "revision": "9c8377cde7e10e60c26a23d868eb20a2"
  },
  {
    "url": "main.2eee47f4.css",
    "revision": "10bf431df81522922e389c86115d2d69"
  },
  {
    "url": "main.94401630.js",
    "revision": "f48d3355766a4d01f45e994fe8a45051"
  },
  {
    "url": "main.b65854e3.css",
    "revision": "d5375163f0a8dda79c0d5027d580067f"
  },
  {
    "url": "main.cb5a8467.js",
    "revision": "d50de727434908090a151e391a10905e"
  },
  {
    "url": "main.cc57ec36.js",
    "revision": "fe8a601bda33649bf4d0467d8935d006"
  },
  {
    "url": "marianne-bold-webfont.1505950c.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-bold-webfont.7424dbde.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-regular-webfont.0a959359.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "marianne-regular-webfont.daa94941.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "MIN_Interieur_RVB_dark.0e5ee525.svg",
    "revision": "345794cee228a40837ab654184cd2c96"
  },
  {
    "url": "MIN_Interieur_RVB.124e26ea.svg",
    "revision": "6823b6d87f43d208b17ff81e178f9ae9"
  },
  {
    "url": "safari-pinned-tab.1551797e.svg",
    "revision": "f53452e6ac8760f12bab91672e91d39b"
  },
  {
    "url": "./",
    "revision": "3e830ee1ed7d6b367083973d28b49592"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/attestation//index.html"));
