/**
 * 控制器和状态
 */
(function(){
/**
 * 
 */
})();

(function($){
/** */
})(jQuery);

//全局导出
(function($,exports){
exports.Foo = 'wem';
})(jQuery,window);

//添加少量上下文
(function(){
   var mod = {};
   mod.contextFunction = function(){
       assertEqual(this,mod);
   };
   mod.contextFunction();
})();

(function($){
 var mod = {};
 mod.load = function(func){
     $($.proxy(func,this));
 };
 mod.load(function(){
     this.view = $("#view");
 });
 mod.assetsClick = function(e){
     //处理点击
 };
 mod.load(function(){
   this.view.find(".assets").click(
       $.proxy(this,assetsClick,this)
   );
 });
})(jQuery)

/*
*抽象出库
*/
(function($,exports){
var mod = function(includes){
  if(includes) this.includes(includes);
};
mod.fn = mod.prototype;
mod.fn.proxy = function(func){
    return $.proxy(func,this);
};
mod.fn.proxy = function(func){
    return $.proxy(func,this);
};
mod.fn.load = function(func){
    $(this.proxy(func));
};
mod.fn.include = function(ob){
    $.extend(this,ob);
};
exports.Controller = mod;
})(jQuery,window);

(function($,Controller){
var mod = new Controller;
mod.toggleClass = function(e){
    this.view.toggleClass("over",e.data);
};
mod.load(function(){
    this.view = $("#view");
    this.view.mouseover(this.proxy(this.toggleClass),true);
    this.view.mouseout(this.proxy(this.toggleClass),false);
});
})(jQuery,Controller);

Controller.fn.unload = function(func){
    jQuery(window).bind("unload",this.proxy(true));
};

var mod = new Controller();
mod.include(StateMachine);

//文档加载完成后载入控制器
var exports = this;
(function(){
var mod = {};
mod.create = function(includes){
var result = function(){
    this.init.apply(this,arguments);
};

}
})(jQuery)
