// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            //require('@angular/cli/plugins/karma')
        ],
        files: [
            '../../wwwroot/dist/vendor.js',
            './boot-tests.ts'
        ],
        preprocessors: {
            './boot-tests.ts': ['webpack']
        },
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        mime: { 'application/javascript': ['ts','tsx'] },
        singleRun: false,
        // Test against client bundle, because tests run in a browser
        webpack: require('../../webpack.config.js')().filter(config => config.target !== 'node'),
        webpackMiddleware: { stats: 'errors-only' }
    });
};
