/**
骨骼属性面板的view
@module
**/
define([
    'jquery', 'underscore',
    'view.panel',
    'tmpl!html/panel.boneProp.html', 'tmpl!html/panel.boneProp.bd.html'
], function(
    $, _,
    Panel,
    bonePropTmpl, bdTmpl
){
    var BonePropPanel;
    var bind = _.bind,
        isNaN = _.isNaN;

    BonePropPanel = Panel.extend({
        el: '#js-bonePropPanel',

        initialize: function(){
            // 复用父类的`initialize`方法
            BonePropPanel.__super__.initialize.apply(this, arguments);

            this._onChangeProp = bind(this._onChangeProp, this);
        },

        render: function(boneData){
            // 渲染面板
            this.$el.html( bonePropTmpl({ bone: boneData }) );

            // 缓存DOM元素
            this._$bd = this.$('.bd');

            return this;
        },

        changeBone: function(boneData){
            if(this._boneId === boneData.id) return this;

            this._boneId = boneData.id;
            this._$bd.html( bdTmpl({ bone: boneData }) );
        },

        events: {
            'change .js-propVal': '_onChangeProp'
        },

        _onChangeProp: function($event){
            var $target = $($event.target),
                propName = $target.data('prop-name'),
                propVal = $target.val(),
                boneData = {};

            if($target.attr('type') === 'number'){
                propVal = Number(propVal);
                if( isNaN(propVal) ){
                    // TODO: 显示提示给用户
                    return;
                }
            }
            boneData[propName] = propVal;

            console.debug('Panel bone-prop changed bone data: %O', boneData);

            this.trigger('changedBoneData', this._boneId, boneData);
        }
    });

    return new BonePropPanel({panelName: 'bone-prop'});
});
