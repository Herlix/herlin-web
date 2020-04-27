# 👷‍♀️🦀🕸️ herlin-web [![Build Status](https://travis-ci.com/Herlix/herlin-web.svg?branch=master)](https://travis-ci.com/Herlix/herlin-web)

A simple Cloudflare hosted yew app!

## 🚴 Usage

### 🔬 Build & Serve locally with

```
npm install && npm run build && npm run start:dev
```

### ☝️ Deployment

```
npm install && npm run build && wrangler publish
```

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.
