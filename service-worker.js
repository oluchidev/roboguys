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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "%7Bhttps://github.com/oluchidev%20%7D.github.io/%7Bhttps://github.com/oluchidev/Vintageberets%7D/precache-manifest.a2263a4224d9423a55af867c982fa6a4.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("%7Bhttps://github.com/oluchidev%20%7D.github.io/%7Bhttps://github.com/oluchidev/Vintageberets%7D/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});