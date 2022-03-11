const path = require('path');

const withImages = require('next-images')
const debug = process.env.NODE_ENV !== "production";
module.exports = withImages({
    webpack(
        config,
        {
            dev = process.env.NODE_ENV === 'development',
            isServer = typeof window === 'undefined'
        }
    ) {
        if (isServer) {
            require('./scripts/generate-sitemap');
            console.log("Generating sitemap...")
        }
        /**
         * !dev ? preact/compat : react, react-dom on build
         * reduce page weight in production by ~10%
         */
        return config;
    },
    resolve: {
        fallback: {
            "fs": false
        },
    },
    sourceMaps: {
        productionBrowserSourceMaps: true
    },
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'faderoom-headless.us',
            'www.faderoom-headless.us',
            'dtmqnbkq3btfh.cloudfront.net',
            'secure.gravatar.com',
            'automattic.com',
            'serve.onegraph.com',
            'onegraph.com',
            'maps.google.com',
            'lh3.googleusercontent.com',
            'maps.gstatic.com',
            'thefaderoom146.booksy.com',
            'dev-3cqt2bq0.auth0.com',
            'scontent-sea1-1.xx.fbcdn.net',
            'd2zdpiztbgorvt.cloudfront.net',
            'platform-lookaside.fbsbx.com',
            'square-postoffice-production.s3.amazonaws.com'
        ]
    },
    future: {
        webpack5: true,
        strictPostcssConfiguration: true
    },
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US'
    },
    assetPrefix: !debug ? 'https://william9923.github.io/willz-home/' : '',
});