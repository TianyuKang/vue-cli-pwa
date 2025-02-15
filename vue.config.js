const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    manifestOptions: {
      name: "kty de pwa",
      short_name: "kty de pwa",
      display: "minimal-ui",
      description:
        "A skinable music player app to play your favorite mp3 files",
      screenshots: [
        {
          src: "./img/screenshots/shot1.png",
          sizes: "400x822",
          type: "image/png",
          form_factor: "narrow", // screenshot for mobile devices
        },
        {
          src: "./img/screenshots/shot7.png",
          sizes: "1280x676",
          type: "image/png",
          form_factor: "wide", // screenshot for desktop devices
        },
      ],
    },

    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      swDest: "service-workers.js",
      skipWaiting: true,
      clientsClaim: true,

      // runtimeCaching: [
      //   {
      //     urlPattern: /\.(?:png|jpg|jpeg|gif|webp|svg|bmp|ico|tiff)$/i, // 匹配静态资源
      //     handler: "StaleWhileRevalidate", // 使用缓存优先策略
      //     options: {
      //       cacheName: "images-cache",
      //       expiration: {
      //         maxEntries: 50, // 最大缓存数量
      //         maxAgeSeconds: 60 * 60 * 24 * 7, // 缓存最大存活时间：一周
      //       },
      //     },
      //   },
      // ],
    },
  },
});
