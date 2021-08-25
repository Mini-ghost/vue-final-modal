!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal={},e.Vue)}(this,(function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n,o,r,i,a){try{var l=e[i](a),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(o,r)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var f=function(e){return function(e,t){return c(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},v=function(e){return e==document.activeElement},p=function(){function e(){r(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}return a(e,[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||v(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;v(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=f(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}]),e}(),m=function(e){var t=e.targetTouches?e.targetTouches[0]:e;return{x:t.clientX,y:t.clientY}},y=function(e,t,n){return"number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)},h=function(e){return e&&Number(e.replace(/px$/,""))||0},b={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},g=function(e,t,n){t&&t.addEventListener(b[e].pc,n),t&&t.addEventListener(b[e].m,n,{passive:!1})},w=function(e,t,n){t&&t.removeEventListener(b[e].pc,n),t&&t.removeEventListener(b[e].m,n)},x=!1;if("undefined"!=typeof window){var E={get passive(){x=!0}};window.addEventListener("testPassive",null,E),window.removeEventListener("testPassive",null,E)}var M,k,S="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),T=[],O=!1,C=0,z=-1,B=function(e,t){var n=!1;return function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,t){return!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)}(e,t)&&(n=!0)})),n},A=function(e){return T.some((function(){return B(e,-C)}))},L=function(e){var t=e||window.event;return!!A(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},_=function(e,t){if(e){if(!T.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};T=[].concat(c(T),[n]),S?(e.ontouchstart=function(e){1===e.targetTouches.length&&(z=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){C=e.targetTouches[0].clientY-z,!A(e.target)&&(t&&0===t.scrollTop&&C>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&C<0?L(e):e.stopPropagation())}(t,e)},O||(document.addEventListener("touchmove",L,x?{passive:!1}:void 0),O=!0)):function(e){if(void 0===k){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);k=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}void 0===M&&(M=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},P=function(e){e?(T=T.filter((function(t){return t.targetElement!==e})),S?(e.ontouchstart=null,e.ontouchmove=null,O&&0===T.length&&(document.removeEventListener("touchmove",L,x?{passive:!1}:void 0),O=!1)):T.length||(void 0!==k&&(document.body.style.paddingRight=k,k=void 0),void 0!==M&&(document.body.style.overflow=M,M=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},V=function(){},j="enter",I="entering",N="leave",D="leavng",R={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},F={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:function(){return{}}},overlayStyle:{type:[Object,Array],default:function(){return{}}},contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=n(e);return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter((function(t){return-1!==e.indexOf(t)})).length===e.length}},minWidth:{type:Number,default:0},minHeight:{type:Number,default:0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","_before-close","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup:function(e,n){var o=n.emit,r=Symbol("vfm"),i=t.ref(null),a=t.ref(null),u=t.ref(null),d=t.ref(null),f=t.ref(null),v=t.ref(null),b=t.ref(null),x=new p,E=t.ref(!1),M=t.reactive({modal:!1,overlay:!1,resize:!1}),k=t.ref(null),S=t.ref(null),T=t.ref(!1),O=t.ref({}),C=t.ref({}),z=t.ref(null),B=t.ref(null),A=V,L=V,F=t.computed((function(){return"string"==typeof e.overlayTransition?{name:e.overlayTransition}:s({},e.overlayTransition)})),H=t.computed((function(){return"string"==typeof e.transition?{name:e.transition}:s({},e.transition)})),$=t.computed((function(){return(e.hideOverlay||k.value===N)&&S.value===N})),K=t.computed((function(){return!1===e.zIndex?!!e.zIndexAuto&&+e.zIndexBase+2*(b.value||0):e.zIndex})),U=t.computed((function(){return s({},!1!==K.value&&{zIndex:K.value})})),q=t.computed((function(){var t=[C.value];return Array.isArray(e.contentStyle)?t.push.apply(t,c(e.contentStyle)):t.push(e.contentStyle),t}));function W(){return{uid:r,props:e,emit:o,vfmContainer:a,vfmContent:u,vfmResize:d,vfmOverlayTransition:f,vfmTransition:v,getAttachElement:Z,modalStackIndex:b,visibility:M,handleLockScroll:X,$focusTrap:x,toggle:te,params:O}}function Y(){if(e.modelValue){if(o("_before-open",J({type:"_before-open"})),Q("before-open",!1))return void L("show");var t=Z();if(t||!1===e.attach){!1!==e.attach&&t.appendChild(i.value);var n=e.api.openedModals.findIndex((function(e){return e.uid===r}));-1!==n&&e.api.openedModals.splice(n,1),e.api.openedModals.push(W()),b.value=e.api.openedModals.length-1,X(),e.api.openedModals.filter((function(e){return e.uid!==r})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex.value=n,e.visibility.overlay=!1)})),E.value=!0,M.overlay=!0,M.modal=!0}else!1!==t&&console.warn("Unable to locate target ".concat(e.attach))}}function G(){var t=e.api.openedModals.findIndex((function(e){return e.uid===r}));if(-1!==t&&e.api.openedModals.splice(t,1),e.api.openedModals.length>0){var n=e.api.openedModals[e.api.openedModals.length-1];n.props.focusTrap&&n.$focusTrap.firstElement().focus(),(n.props.focusRetain||n.props.focusTrap)&&n.vfmContainer.value.focus(),!n.props.hideOverlay&&(n.visibility.overlay=!0)}e.drag&&re(),e.resize&&ae(),z.value=null,M.overlay=!1,M.modal=!1}function X(){e.modelValue&&t.nextTick((function(){e.lockScroll?_(a.value,{reserveScrollBarGap:!0}):P(a.value)}))}function Z(){return!1!==e.attach&&("string"==typeof e.attach?!!window&&window.document.querySelector(e.attach):e.attach)}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s({ref:W()},e)}function Q(e,n){var r=!1,i=J({type:e,stop:function(){r=!0}});return o(e,i),!!r&&(T.value=!0,t.nextTick((function(){o("update:modelValue",n)})),!0)}function ee(e,t,n){z.value="".concat(t,":").concat(n),o(z.value,e)}function te(t,n){var r=arguments;return new Promise((function(i,a){A=function(e){i(e),A=V},L=function(e){a(e),L=V};var l="boolean"==typeof t?t:!e.modelValue;l&&2===r.length&&(O.value=n),o("update:modelValue",l)}))}function ne(t){t.stopPropagation();var n,o="resize",r="drag",i=t.target.getAttribute("direction");if(i)n=o;else{if(!function(e,t,n){return""===n||c(t.querySelectorAll(n)).includes(e.target)}(t,u.value,e.dragSelector))return;n=r}ee(t,n,"start");var d,f,v,p,b=m(t),x=a.value.getBoundingClientRect(),E=u.value.getBoundingClientRect(),M="absolute"===window.getComputedStyle(u.value).position,k=h(C.value.top),S=h(C.value.left),T=function(){if(e.fitParent){var t={absolute:function(){return{minTop:0,minLeft:0,maxTop:x.height-E.height,maxLeft:x.width-E.width}},relative:function(){return{minTop:k+x.top-E.top,minLeft:S+x.left-E.left,maxTop:k+x.bottom-E.bottom,maxLeft:S+x.right-E.right}}};return M?t.absolute():t.relative()}return{}}(),O=n===o&&(d=document.body,f="cursor",v=R[i],p=d.style[f],d.style[f]=v,function(){d.style[f]=p}),z=function(t){t.stopPropagation(),ee(t,n,"move");var a,u,d=m(t),f={x:d.x-b.x,y:d.y-b.y};n===o&&(f=function(t,n,o,r,i){var a=function(t){var o,r=n[t.axis];r=e.fitParent?y(t.min,r,t.max):r;var a=y(t.minEdge,t.getEdge(r),t.maxEdge);return r=t.getOffsetAxis(a,i),l(o={},t.edgeName,a),l(o,t.axis,r),o},u=function(t,n,i,a){var l,u=r[n],s=o[t]-r[t],c=(l=n).charAt(0).toUpperCase()+l.slice(1);return{axis:i,edgeName:n,min:a?s:-u,max:a?u:s,minEdge:e["min".concat(c)],maxEdge:e["max".concat(c)],getEdge:function(e){return r[n]-e*(a?1:-1)},getOffsetAxis:function(e,t){var o=r[n]-e;return t?a?o:0:(a?1:-1)*o/2}}},d={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},f={x:0,y:0};return t.split("").forEach((function(e){var t=u.apply(void 0,c(d[e]));f=s(s({},f),a(t))})),f}(i,f,x,E,M)),M?(a=E.top-x.top+f.y,u=E.left-x.left+f.x):(a=k+f.y,u=S+f.x),n===r&&e.fitParent&&(a=y(T.minTop,a,T.maxTop),u=y(T.minLeft,u,T.maxLeft));var v=s(s(s({position:"relative",top:a+"px",left:u+"px",margin:"unset",touchAction:"none"},M&&{position:"absolute",transform:"unset",width:E.width+"px",height:E.height+"px"}),f.width&&{width:f.width+"px"}),f.height&&{height:f.height+"px"});C.value=s(s({},C.value),v)};g("move",document,z),g("up",document,(function e(t){t.stopPropagation(),n===o&&O&&O(),setTimeout((function(){ee(t,n,"end")})),w("move",document,z),w("up",document,e)}))}function oe(){g("down",u.value,ne),C.value.touchAction="none"}function re(){w("down",u.value,ne)}function ie(){M.resize=!0,t.nextTick((function(){g("down",d.value,ne)}))}function ae(){w("down",d.value,ne),M.resize=!1}return t.watch((function(){return e.modelValue}),(function(e){if(T.value)T.value=!1;else if(Y(),!e){if(o("_before-close",J({type:"_before-close"})),Q("before-close",!0))return void L("hide");G()}})),t.watch((function(){return e.lockScroll}),X),t.watch((function(){return e.hideOverlay}),(function(t){e.modelValue&&!t&&(M.overlay=!0)})),t.watch((function(){return e.attach}),Y),t.watch($,(function(e){e&&(E.value=!1,a.value.style.display="none")}),{flush:"post"}),t.watch((function(){return e.drag}),(function(e){E.value&&(e?oe():re())})),t.watch((function(){return e.resize}),(function(e){E.value&&(e?ie():ae())})),t.watch((function(){return e.keepChangedStyle}),(function(e){e||(C.value={})})),e.api.modals.push(W()),t.onMounted((function(){Y()})),t.onBeforeUnmount((function(){var t;G(),e.lockScroll&&a.value&&P(a.value),null==i||null===(t=i.value)||void 0===t||t.remove();var n=e.api.modals.findIndex((function(e){return e.uid===r}));e.api.modals.splice(n,1)})),{root:i,vfmContainer:a,vfmContent:u,vfmResize:d,vfmOverlayTransition:f,vfmTransition:v,computedOverlayTransition:F,computedTransition:H,visible:E,visibility:M,params:O,calculateZIndex:K,bindStyle:U,bindContentStyle:q,beforeOverlayEnter:function(){k.value=I},afterOverlayEnter:function(){k.value=j},beforeOverlayLeave:function(){k.value=D},afterOverlayLeave:function(){k.value=N},beforeModalEnter:function(){S.value=I},afterModalEnter:function(){S.value=j,(e.focusRetain||e.focusTrap)&&a.value.focus(),e.focusTrap&&x.enable(a.value),e.drag&&oe(),e.resize&&ie(),o("_opened"),o("opened",J({type:"opened"})),A("show")},beforeModalLeave:function(){S.value=D,x.enabled()&&x.disable()},afterModalLeave:function(){S.value=N,b.value=null,e.lockScroll&&P(a.value),e.keepChangedStyle||(C.value={});var t=!1,n=J({type:"closed",stop:function(){t=!0}});o("_closed"),o("closed",n),A("hide"),t||(O.value={})},onMousedown:function(e){B.value=null==e?void 0:e.target},onMouseupContainer:function(){B.value===a.value&&"resize:move"!==z.value&&(o("click-outside",J({type:"click-outside"})),e.clickToClose&&o("update:modelValue",!1))},onEsc:function(){E.value&&e.escToClose&&o("update:modelValue",!1)}}}},H=t.withScopeId("data-v-2836fdb5");t.pushScopeId("data-v-2836fdb5");var $={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"};t.popScopeId();var K=H((function(e,n,o,r,i,a){return o.ssr||r.visible?t.withDirectives((t.openBlock(),t.createBlock("div",{key:0,ref:"root",style:r.bindStyle,class:["vfm vfm--inset",[!1===o.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.preventClick}]],onKeydown:n[4]||(n[4]=t.withKeys((function(){return r.onEsc&&r.onEsc.apply(r,arguments)}),["esc"]))},[t.createVNode(t.Transition,t.mergeProps(r.computedOverlayTransition,{onBeforeEnter:r.beforeOverlayEnter,onAfterEnter:r.afterOverlayEnter,onBeforeLeave:r.beforeOverlayLeave,onAfterLeave:r.afterOverlayLeave}),{default:H((function(){return[!o.hideOverlay&&r.visibility.overlay?(t.openBlock(),t.createBlock("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass],style:o.overlayStyle},null,6)):t.createCommentVNode("v-if",!0)]})),_:1},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),t.createVNode(t.Transition,t.mergeProps(r.computedTransition,{onBeforeEnter:r.beforeModalEnter,onAfterEnter:r.afterModalEnter,onBeforeLeave:r.beforeModalLeave,onAfterLeave:r.afterModalLeave}),{default:H((function(){return[t.withDirectives(t.createVNode("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes],style:o.styles,"aria-expanded":r.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:n[2]||(n[2]=t.withModifiers((function(){return r.onMouseupContainer&&r.onMouseupContainer.apply(r,arguments)}),["self"])),onMousedown:n[3]||(n[3]=t.withModifiers((function(){return r.onMousedown&&r.onMousedown.apply(r,arguments)}),["self"]))},[t.createVNode("div",{ref:"vfmContent",class:["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.preventClick}]],style:r.bindContentStyle,onMousedown:n[1]||(n[1]=function(e){return r.onMousedown(null)})},[t.renderSlot(e.$slots,"default",{params:r.params,close:function(){return e.$emit("update:modelValue")}}),r.visibility.resize&&r.visibility.modal?(t.openBlock(),t.createBlock("div",$,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(o.resizeDirections,(function(e){return t.openBlock(),t.createBlock("div",{key:e,direction:e,class:["vfm--resize-".concat(e),"vfm--absolute vfm--prevent-auto"]},null,10,["direction"])})),128))],512)):t.createCommentVNode("v-if",!0)],38)],46,["aria-expanded"]),[[t.vShow,r.visibility.modal]])]})),_:3},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[t.vShow,!o.ssr||r.visible]]):t.createCommentVNode("v-if",!0)}));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-2836fdb5] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-2836fdb5] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-2836fdb5],\n.vfm--resize-br[data-v-2836fdb5],\n.vfm--resize-bl[data-v-2836fdb5],\n.vfm--resize-tl[data-v-2836fdb5] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-2836fdb5] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-2836fdb5] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-2836fdb5] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-2836fdb5] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-2836fdb5] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-2836fdb5] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-2836fdb5] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-2836fdb5] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),F.render=K,F.__scopeId="data-v-2836fdb5",F.__file="lib/VueFinalModal.vue";var U={methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},closed:function(e,t){this.slice(e),t.closed&&t.closed()},beforeClose:function(e){e.value&&(null==e||e.rejectClose("hide"))},beforeOpen:function(e,t,n){var r,i=this;return(r=function*(){e.ref.params.value=t.params,yield i.$nextTick(),yield i.$nextTick(),t.value||(i.slice(n),null==t||t.reject("show"))},function(){var e=this,t=arguments;return new Promise((function(n,i){var a=r.apply(e,t);function l(e){o(a,n,i,l,u,"next",e)}function u(e){o(a,n,i,l,u,"throw",e)}l(void 0)}))})()},isString:function(e){return"string"==typeof e}}},q={class:"modals-container"};U.render=function(e,n,o,r,i,a){return t.openBlock(),t.createBlock("div",q,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.api.dynamicModals,(function(e,n){return t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":function(t){return e.value=t}},t.toHandlers(e.on),{on_beforeClose:function(t){return a.beforeClose(e)},on_closed:function(t){return a.closed(n,e)},on_beforeOpen:function(t){return a.beforeOpen(t,e,n)},on_opened:e.opened}),t.createSlots({_:2},[t.renderList(e.slots,(function(e,n){return{name:n,fn:t.withCtx((function(){return[t.createCommentVNode(" eslint-disable vue/no-v-html "),a.isString(e)?(t.openBlock(),t.createBlock("div",{key:0,innerHTML:e},null,8,["innerHTML"])):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:1},e.bind,t.toHandlers(e.on||{})),null,16))]}))}}))]),1040,["modelValue","onUpdate:modelValue","on_beforeClose","on_closed","on_beforeOpen","on_opened"])})),128))])},U.__file="lib/ModalsContainer.vue";var W=function(){function e(){var n=this;r(this,e);var o=function(e){var o=s(s({},e),{},{props:s({},e.props)});return Object.assign(o.props,{api:{type:Object,default:function(){return n}}}),t.markRaw(o)};this.modals=[],this.openedModals=[],this.VueFinalModal=o(F),this.dynamicModals=t.shallowReactive([]),this.ModalsContainer=o(U)}return a(e,[{key:"show",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];switch(n(e)){case"string":return this.toggle.apply(this,[e,!0].concat(o));case"object":var i=this.useModal(e,o[0]),a=i.show;return a()}}},{key:"hide",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.toggle(t,!1)}},{key:"hideAll",value:function(){return this.hide.apply(this,c(this.openedModals.map((function(e){return e.props.name}))))}},{key:"toggle",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=Array.isArray(e)?this.get.apply(this,c(e)):this.get(e);return Promise.allSettled(r.map((function(e){return e.toggle.apply(e,n)})))}},{key:"get",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.modals.filter((function(e){return t.includes(e.props.name)}))}},{key:"existModal",value:function(e){return-1!==this.dynamicModals.indexOf(e)}},{key:"useModal",value:function(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.reactive(s({value:!1,component:this.VueFinalModal,id:Symbol("useModal"),bind:{},slots:{},on:{},params:o},e)),i=function(){return n.existModal(r)?Promise.resolve("[Vue Final Modal] modal is already opened"):new Promise((function(e,t){r.value=!0,r.reject=t,r.opened=function(){e("show")},n.dynamicModals.push(r)}))},a=function(){return n.existModal(r)?new Promise((function(e,t){r.value=!1,r.rejectClose=t,r.closed=function(){e("hide")}})):Promise.resolve("[Vue Final Modal] modal is already closed")};return{show:i,hide:a,options:r}}}]),e}(),Y=function(){var e=new W;return{$vfm:e,VueFinalModal:e.VueFinalModal,ModalsContainer:e.ModalsContainer,useModal:e.useModal.bind(e)}},G=Y(),X=G.$vfm,Z=G.VueFinalModal,J=G.ModalsContainer,Q=G.useModal;e.$vfm=X,e.ModalInstance=W,e.ModalsContainer=J,e.VueFinalModal=Z,e.createModalInstance=Y,e.useModal=Q,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=VueFinalModal.umd.js.map
