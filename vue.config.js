const CompressionPlugin = require("compression-webpack-plugin")
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')
const path = require('path')

module.exports = {
    lintOnSave: false,
    // runtimeCompiler: true,
    productionSourceMap: false,

    configureWebpack: () => {
        if (process.env.NODE_ENV !== 'production') return
        return {
            resolve: {
                alias: {
                    '@assets': path.resolve(__dirname, './src/assets'),
                    '@views': path.resolve(__dirname, './src/views'),
                    '@components': path.resolve(__dirname, './src/components')
                }
            },
            performance: {
                maxAssetSize: 300000,
                maxEntrypointSize: 400000
            },
            plugins: [
                new PrerenderSPAPlugin({
                    // 生成文件的路径，也可以与webpack打包的一致。
                    // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                    staticDir: path.join(__dirname, 'dist'),
                    // outputDir: path.join(__dirname, './'),
                    // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
                    routes: ['/Dna', '/Project', '/Contact', '/Ep'],
                    // 这个很重要，如果没有配置这段，也不会进行预编译
                    renderer: new Renderer({
                        /*
                        inject: { //默认挂在window.__PRERENDER_INJECTED对象上，可以通过window.__PRERENDER_INJECTED.foo在预渲染页面取值
                            foo: 'bar'
                        },
                        */
                        headless: true,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        // renderAfterDocumentEvent: 'render-event',//等到事件触发去渲染，此处我理解为是Puppeteer获取页面的时机
                        renderAfterTime: 5000
                    })
                })
            ]
        }
    },

    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 144
            })
        // 解决ie11兼容ES6
        config.entry('main').add('babel-polyfill')
        // 开启图片压缩
        config.module
            .rule('images')
            .test(/\.cur$/)
            .use('url-loader')
        config.module.rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({ bypassOnDebug: true })
            .end()
        // 开启js、css压缩
        if (process.env.NODE_ENV === 'production') {
            config.plugin('compressionPlugin')
                .use(new CompressionPlugin({
                    test: /\.js$|\.html$|\.css$|\.ttf$|\.otf$/, // 匹配文件名
                    threshold: 10240, // 对超过10k的数据压缩
                    deleteOriginalAssets: false // 不删除源文件
                }))
        }
    },
    transpileDependencies: [
        'biyi-admin', // 指定对第三方依赖包进行babel-polyfill处理
    ],
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require("postcss-plugin-px2rem")({
                        rootValue: 144,
                        exclude: /(node_module)/,
                        mediaQuery: false,
                        minPixelValue: 2
                    })
                ]
            }
        }
    },
    publicPath: './'
};