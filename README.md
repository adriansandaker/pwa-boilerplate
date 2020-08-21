# PWA Boilerplate 

This repository contains a boilerplate project with the basic components of a Progressive Web App. This includes the essential parts such as the *manifest* and the *service-worker* files. In addition you will find examples of matters like PWA-related media queries and lesser known HTML tags.

I created this mainly with my own personal use in mind, but you are more than welcome to clone the repo and use it as a foundation for your own projects.

## Service Worker
The ```service-worker.js``` file contains the bare essentials of functionality for PWA use. This includes registering of the service worker itself, as well as some basic offline caching of resources. For large scale projects, consider using a tool like [Workbox](https://developers.google.com/web/tools/workbox) to simplify the development process.

## App Manifest
The application manifest has a wide range of available properties, some of which might need a little explanation. Some of these are documented and explained below. However, be aware that these might change in the future.

### Icons
In PWA development, the icons play an important role in ensuring installability and compliance with the requirements for Progressive Web Apps. 

For Android devices, you will need to provide icons in the resolutions *512x512* and *192x192*. However, it is a best practice to also include a wider range of sizes. See the ```/icons``` folder for an example of various resolutions. Android icons are set in the ```manifest.webmanifest``` file.

For iOS devices you will typically provide icons in the resolutions *180x180* and *120x120*. These must be linked in the HTML using the link tag with ```rel=apple-touch-icon```. See example below.
    
    <link rel="apple-touch-icon" href="icons/icon-120.png" sizes="120x120">
    <link rel="apple-touch-icon" href="icons/icon-180.png" sizes="180x180">  

### Categories
The ```categories``` property allows us to specify which categories the application belongs to. It accepts an array of strings. 

There is currently no defined standard for the values applicable here, but there is a list maintained by the W3C of known categories [here](https://github.com/w3c/manifest/wiki/Categories).


## Device support
The boilerplate project aims to support Desktop, Android and iOS devices. However, as APIs change and evolve over time, some facets might no longer be applicable to a given platform. Keep this in mind if you use this for your own projects.

## Additional resources
These resources aim to help in tackling some common PWA challenges.

### Build PWA as an Android app
To package and build your PWA as a native Android app, consider using either the [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) toolkit, or a [Trusted Web Activity](https://developers.google.com/web/android/trusted-web-activity).
