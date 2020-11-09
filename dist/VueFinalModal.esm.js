function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s=function(e){return function(e,t){return a(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},l=function(e){return e==document.activeElement},c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var n,o,i;return n=e,(o=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||l(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;l(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){if(e){this.root=e,this.elements=s(this.root);var t=this.firstElement();t&&t.focus(),this.root.addEventListener("keydown",this.onKeyDown)}}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&t(n.prototype,o),i&&t(n,i),e}(),d=function(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE)},u=function(e,t){t&&d(e)&&(e.style[t]="")},f="enter",v="entering",h="leave",m="leavng";var p={type:[String,Object,Array],default:""},y={name:"VueFinalModal",props:{name:{type:String,default:null},value:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:p,overlayClass:p,contentClass:p,styles:p,overlayStyle:p,contentStyle:p,lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(t){var n=e(t);return"boolean"===n||"string"===n||t.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusTrap:{type:Boolean,default:!1}},data:function(){return{modalStackIndex:null,visible:!1,visibility:{modal:!1,overlay:!1},overlayTransitionState:null,modalTransitionState:null}},computed:{api:function(){return this[this.$_key]},isComponentReadyToBeDestroyed:function(){return(this.hideOverlay||this.overlayTransitionState===h)&&this.modalTransitionState===h},calculateZIndex:function(){return"boolean"==typeof this.zIndex?this.attach?"unset":this.zIndexBase+2*(this.modalStackIndex||0):this.zIndex}},watch:{value:function(e){this.mounted(),e||this.close()},lockScroll:"handleLockScroll",hideOverlay:function(e){this.value&&!e&&(this.visibility.overlay=!0)},attach:"mounted",isComponentReadyToBeDestroyed:function(e){e&&(this.visible=!1)}},created:function(){this.api.modals.push(this)},mounted:function(){this.$focusTrap=new c,this.mounted()},beforeDestroy:function(){var e=this;this.close(),this.$el.remove();var t=this.api.modals.findIndex((function(t){return t===e}));this.api.modals.splice(t,1)},methods:{mounted:function(){var e=this;if(this.value){var t=this.getAttachElement();if(t||!1===this.attach){!1!==this.attach&&t.appendChild(this.$el);var n=this.api.openedModals.findIndex((function(t){return t===e}));-1!==n&&this.api.openedModals.splice(n,1),this.api.openedModals.push(this),this.modalStackIndex=this.api.openedModals.length-1,this.handleLockScroll(),this.api.openedModals.filter((function(t){return t!==e})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex=n,e.visibility.overlay=!1)})),this.visible=!0,this.$nextTick((function(){e.startTransitionEnter()}))}else!1!==t&&console.warn("Unable to locate target ".concat(this.attach))}},close:function(){var e=this,t=this.api.openedModals.findIndex((function(t){return t===e}));if(-1!==t&&this.api.openedModals.splice(t,1),this.api.openedModals.length>0){var n=this.api.openedModals[this.api.openedModals.length-1];n.handleLockScroll(),n.focusTrap&&n.$focusTrap.firstElement().focus(),!n.hideOverlay&&(n.visibility.overlay=!0)}this.startTransitionLeave()},startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},handleLockScroll:function(){var e,t,n;this.value&&(this.lockScroll?(e=document.body,n="hidden",(t="overflow")&&d(e)&&(e.style[t]=n)):u(document.body,"overflow"))},getAttachElement:function(){return!1!==this.attach&&("string"==typeof this.attach?!!window&&window.document.querySelector(this.attach):this.attach)},beforeOverlayEnter:function(){this.overlayTransitionState=v},afterOverlayEnter:function(){this.overlayTransitionState=f},beforeOverlayLeave:function(){this.overlayTransitionState=m},afterOverlayLeave:function(){this.overlayTransitionState=h},beforeModalEnter:function(){this.$emit("before-open"),this.modalTransitionState=v},afterModalEnter:function(){this.modalTransitionState=f,this.focusTrap&&this.$focusTrap.enable(this.$refs.vfmContainer),this.$emit("opened")},beforeModalLeave:function(){this.$emit("before-close"),this.modalTransitionState=m,this.$focusTrap.enabled()&&this.$focusTrap.disable()},afterModalLeave:function(){this.modalTransitionState=h,this.modalStackIndex=null,this.lockScroll&&u(document.body,"overflow"),this.$emit("closed")},onClickContainer:function(){this.$emit("click-outside"),this.clickToClose&&this.$emit("input",!1)}}};var b,g=function(e,t,n,o,i,a,r,s,l,c){"boolean"!=typeof r&&(l=s,s=r,r=!1);var d,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=d):t&&(d=r?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),d)if(u.functional){var f=u.render;u.render=function(e,t){return d.call(t),f(e,t)}}else{var v=u.beforeCreate;u.beforeCreate=v?[].concat(v,d):[d]}return n},S="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var E={};const T=g({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ssr||e.visible?n("div",{directives:[{name:"show",rawName:"v-show",value:!e.ssr||e.visible,expression:"!ssr || visible"}],staticClass:"vfm vfm--inset",class:[!1===e.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":e.preventClick}],style:{zIndex:e.calculateZIndex}},[n("transition",{attrs:{name:e.overlayTransition},on:{"before-enter":e.beforeOverlayEnter,"after-enter":e.afterOverlayEnter,"before-leave":e.beforeOverlayLeave,"after-leave":e.afterOverlayLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.hideOverlay&&e.visibility.overlay,expression:"!hideOverlay && visibility.overlay"}],staticClass:"vfm__overlay vfm--overlay vfm--absolute vfm--inset",class:e.overlayClass,style:e.overlayStyle})]),e._v(" "),n("transition",{attrs:{name:e.transition},on:{"before-enter":e.beforeModalEnter,"after-enter":e.afterModalEnter,"before-leave":e.beforeModalLeave,"after-leave":e.afterModalLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility.modal,expression:"visibility.modal"}],ref:"vfmContainer",staticClass:"vfm__container vfm--absolute vfm--inset vfm--outline-none",class:[e.classes,{"vfm--cursor-pointer":e.clickToClose}],style:e.styles,attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true"},on:{click:e.onClickContainer}},[n("div",{ref:"vfmContent",staticClass:"vfm__content vfm--cursor-auto",class:[e.contentClass,{"vfm--prevent-auto":e.preventClick}],style:e.contentStyle,on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2)])])],1):e._e()},staticRenderFns:[]},(function(e){e&&e("data-v-808cb8c6_0",{source:".vfm--fixed[data-v-808cb8c6]{position:fixed}.vfm--absolute[data-v-808cb8c6]{position:absolute}.vfm--inset[data-v-808cb8c6]{top:0;right:0;bottom:0;left:0}.vfm--overlay[data-v-808cb8c6]{background-color:rgba(0,0,0,.5)}.vfm--prevent-none[data-v-808cb8c6]{pointer-events:none}.vfm--prevent-auto[data-v-808cb8c6]{pointer-events:auto}.vfm--cursor-pointer[data-v-808cb8c6]{cursor:pointer}.vfm--cursor-auto[data-v-808cb8c6]{cursor:auto}.vfm--outline-none[data-v-808cb8c6]:focus{outline:0}.vfm-enter-active[data-v-808cb8c6],.vfm-leave-active[data-v-808cb8c6]{transition:opacity .2s}.vfm-enter[data-v-808cb8c6],.vfm-leave-to[data-v-808cb8c6]{opacity:0}",map:void 0,media:void 0})}),y,"data-v-808cb8c6",false,undefined,!1,(function(e){return function(e,t){return function(e,t){var n=S?t.media||"default":e,o=E[n]||(E[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var i=t.source;if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===b&&(b=document.head||document.getElementsByTagName("head")[0]),b.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var a=o.ids.size-1,r=document.createTextNode(i),s=o.element.childNodes;s[a]&&o.element.removeChild(s[a]),s.length?o.element.insertBefore(r,s[a]):o.element.appendChild(r)}}}(e,t)}}),void 0,void 0);var k={componentName:"VueFinalModal",key:"$vfm"};export default function(){return{install:function(e,t){var n=Object.assign({},k,t),o=e.prototype[n.key];e.options.components[n.componentName]?console.warn(o?"[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal.":"[vue-final-modal] Duplicate registration componentName of VueFinalModal."):(o||function(e,t){var n=t.key,o={openedModals:[],modals:[],show:function(e){this.toggle(e,!0)},hide:function(e){this.toggle(e,!1)},hideAll:function(){this.openedModals.forEach((function(e){e.$emit("input",!1)}))},toggle:function(e,t){var n=this.modals.find((function(t){return t.name===e}));void 0!==n&&n.$emit("input",void 0===t?!n.value:t)}};Object.defineProperty(e.prototype,n,{get:function(){return o}})}(e,n),function(e,t){var n=t.componentName,o=t.key;e.component(n,i(i({},T),{},{props:i(i({},T.props),{},{$_key:{type:String,default:o}})}))}(e,n))}}}
//# sourceMappingURL=VueFinalModal.esm.js.map
