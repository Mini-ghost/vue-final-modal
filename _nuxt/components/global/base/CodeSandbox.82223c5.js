(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{367:function(e,t,n){},374:function(e,t,n){"use strict";var r=n(367);n.n(r).a},392:function(e,t,n){"use strict";n.r(t);var r={props:{src:{type:String,required:!0}},data:function(){return{isIntersecting:!1}},mounted:function(){var e=this;window.IntersectionObserver?(this.__observer=new window.IntersectionObserver((function(t){t.forEach((function(t){var n=t.intersectionRatio;t.target;n>0&&(e.isIntersecting=!0,e.__observer.disconnect(),delete e.__observer)}))})),this.__observer.observe(this.$el)):this.isIntersecting=!0},beforeDestroy:function(){this.__observer&&(this.__observer.disconnect(),delete this.__observer)}},o=(n(374),n(1)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"codesandbox w-full mb-6 mx-auto bg-black text-white text-3xl text-center flex items-center justify-center overflow-hidden rounded-md"},[this.isIntersecting&&this.src?t("iframe",{staticClass:"w-full overflow-hidden",attrs:{src:this.src,title:"CodeSandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}}):t("span",[this._v("Loading CodeSandbox...")])])}),[],!1,null,"6696224f",null);t.default=component.exports}}]);