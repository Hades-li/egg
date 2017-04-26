module.exports = {
    /*
     ** Headers of the page
     * <meta content="yes" name="apple-mobile-web-app-capable" />
     <meta content="yes" name="apple-touch-fullscreen" />
     <meta content="telephone=no,email=no" name="format-detection" />
     <meta content="maximum-dpr=2" name="flexible" />
     <meta content="modeName=750-12" name="grid" />
     */
    head: {
        title: 'starter',
        meta: [
            {charset: 'utf-8'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'},
            {content: 'yes', name: 'apple-mobile-web-app-capable'},
            {content: 'yes', name: 'apple-touch-fullscreen'},
            {content: 'telephone=no,email=no', name: 'format-detection'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            {src: '/js/flexible.js'}
        ]
    },
    /*
     ** Global CSS
     */
    css: [
        {src: '~assets/css/app.scss', lang: 'scss'}
    ],
    /*
     ** Add axios globally
     */
    build: {
        vendor: ['axios'],
        extend (config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    srcDir: 'src/'
}
