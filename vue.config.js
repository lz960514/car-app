module.exports = {
    baseUrl: '/', // 根路径
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录
    lintOnSave: false, // 是否开启 eslint 保存检测
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    css: { // 配置高于chainWebpack中关于css loader的配置
        // modules: false, // 是否开启支持‘foo.module.css’样式
        // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
        sourceMap: false, // 是否在构建样式地图，false将提高构建速度
        // css预设器配置项
        loaderOptions: {}
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    pluginOptions: {
        // 第三方插件配置
    },
    // 加载第三方插件
    configureWebpack: {
        plugins: []
    },
    // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    devServer: {
        open: false, // 是否自动打开浏览器
        host: '127.0.0.1', // 主机名
        port: 8088, // 主机端口
        https: false,
        hotOnly: true,
        proxy: {
            // 配置跨域
            '/api': {
                // 目标地址
                target: 'http://192.168.2.129:3000',
                ws: true,
                changOrigin: true,
                // 路径重写规则
                pathRewrite: {
                    '^api': 'api'
                }
            }
        },
        before: app => {
            app.get('/api/newslist.json', (req, res) => {
                const newsList = require('./data/newslist.json')
                res.json(newsList)
            });
            app.get('/api/banner.json', (req, res) => {
                const bannerData = require('./data/banner.json')
                res.json(bannerData)
            });
            app.get('/api/addnews.json', (req, res) => {
                const newsData = require('./data/addnews.json')
                res.json(newsData)
            });
            app.get('/api/more.json', (req, res) => {
                const moreData = require('./data/more.json')
                res.json(moreData)
            });
            app.get('/api/mine.json', (req, res) => {
                const mineData = require('./data/mine.json')
                res.json(mineData)
            })
        }
    }
}