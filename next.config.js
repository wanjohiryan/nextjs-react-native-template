/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");
//withPWA(

module.exports = {
    // images: {
    //     domains: ['i.redd.it', 'i.imgur.com', 'preview.redd.it', 'external-preview.redd.it',"i.imgflip.com", "avatars.dicebear.com", "imgur.com"]
    // },
    // pwa: {
    //     dest: "public",
    //     register: true,
    //     skipWaiting: true,
    //     disable: process.env.NODE_ENV === 'development',
    //   },
    webpack: (config) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            // Transform all direct `react-native` imports to `react-native-web`
            'react-native$': 'module:react-native-web',
        }
        config.resolve.extensions = [
            '.web.js',
            '.web.jsx',
            '.web.ts',
            '.web.tsx',
            ...config.resolve.extensions,
        ]
        return config
    },
}
