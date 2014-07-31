requirejs.config({
    // 定义文件、路径的简写
    paths: {
        'base': 'base/',
        'test': '../test/',
        'util': 'base/util',
        'tmpl': 'base/require.tmpl',
        'jquery': 'base/jquery',
        'jquery.defaultSetting': 'base/jquery.defaultSetting',
        'underscore': 'base/underscore',
        'backbone': 'base/backbone',
        'backbone.relational': 'base/backbone.relational',
        'html': '../html'
    },
    // 对没有定义为AMD模块的第三方类库框架，在此补充定义该模块的依赖和输出
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.relational': {
            deps: ['backbone'],
            exports: 'Backbone'
        }
    }
});

requirejs([
    'controller',
    'jquery',
    'test/user'
], function(controller, $, user){
    // TODO: 判断是否高级浏览器；登陆

    $(function($){
        controller.init();
        user.uploadTexture();
    });
});
