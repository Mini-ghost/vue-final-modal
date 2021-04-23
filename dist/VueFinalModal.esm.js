import{ref as e,inject as n,reactive as t,computed as o,watch as r,onMounted as a,onBeforeUnmount as i,nextTick as l,withScopeId as u,withDirectives as s,openBlock as c,createBlock as d,withKeys as f,createVNode as v,Transition as p,mergeProps as m,createCommentVNode as y,withModifiers as b,renderSlot as h,vShow as g,Fragment as E,renderList as w,resolveDynamicComponent as O,toHandlers as S,createSlots as k,withCtx as T,shallowReactive as C}from"vue";function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function L(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var V=function(e){return function(e,n){return L(e.querySelectorAll(n)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},P=function(e){return e==document.activeElement},N=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var n,t,o;return n=e,(t=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||P(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;P(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=V(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&A(n.prototype,t),o&&A(n,o),e}(),_=!1;if("undefined"!=typeof window){var D={get passive(){_=!0}};window.addEventListener("testPassive",null,D),window.removeEventListener("testPassive",null,D)}var z,H,K="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),R=[],U=!1,$=0,F=-1,Y=function(e,n){var t=!1;return function(e){for(var n=[];e;){if(n.push(e),e.classList.contains("vfm"))return n;e=e.parentElement}return n}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var n=window.getComputedStyle(e);return["auto","scroll"].includes(n.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,n){return!(0===e.scrollTop&&n<0||e.scrollTop+e.clientHeight+n>=e.scrollHeight&&n>0)}(e,n)&&(t=!0)})),t},q=function(e){return R.some((function(){return Y(e,-$)}))},G=function(e){var n=e||window.event;return!!q(n.target)||(n.touches.length>1||(n.preventDefault&&n.preventDefault(),!1))},W=function(e,n){if(e){if(!R.some((function(n){return n.targetElement===e}))){var t={targetElement:e,options:n||{}};R=[].concat(L(R),[t]),K?(e.ontouchstart=function(e){1===e.targetTouches.length&&(F=e.targetTouches[0].clientY)},e.ontouchmove=function(n){1===n.targetTouches.length&&function(e,n){$=e.targetTouches[0].clientY-F,!q(e.target)&&(n&&0===n.scrollTop&&$>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(n)&&$<0?G(e):e.stopPropagation())}(n,e)},U||(document.addEventListener("touchmove",G,_?{passive:!1}:void 0),U=!0)):function(e){if(void 0===H){var n=!!e&&!0===e.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;if(n&&t>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);H=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+t,"px")}}void 0===z&&(z=document.body.style.overflow,document.body.style.overflow="hidden")}(n)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},Z=function(e){e?(R=R.filter((function(n){return n.targetElement!==e})),K?(e.ontouchstart=null,e.ontouchmove=null,U&&0===R.length&&(document.removeEventListener("touchmove",G,_?{passive:!1}:void 0),U=!1)):R.length||(void 0!==H&&(document.body.style.paddingRight=H,H=void 0),void 0!==z&&(document.body.style.overflow=z,z=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},J="enter",Q="entering",X="leave",ee="leavng",ne={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[String,Object,Array],default:""},overlayStyle:{type:[String,Object,Array],default:""},contentStyle:{type:[String,Object,Array],default:""},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var n=M(e);return"boolean"===n||"string"===n||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed"],setup:function(u,s){var c=s.emit,d=Symbol("vfm"),f=e(null),v=e(null),p=e(null),m=e(null),y=n(u.options.key),b=e(null),h=new N,g=e(!1),E=t({modal:!1,overlay:!1}),w=e(null),O=e(null),S=e(!1),k=e({}),T=o((function(){return"string"==typeof u.overlayTransition?{name:u.overlayTransition}:B({},u.overlayTransition)})),C=o((function(){return"string"==typeof u.transition?{name:u.transition}:B({},u.transition)})),M=o((function(){return(u.hideOverlay||w.value===X)&&O.value===X})),A=o((function(){return!1===u.zIndex?!!u.zIndexAuto&&+u.zIndexBase+2*(b.value||0):u.zIndex})),j=o((function(){return B({},!1!==A.value&&{zIndex:A.value})}));function x(){return{uid:d,props:u,emit:c,vfmContainer:v,vfmOverlayTransition:p,vfmTransition:m,getAttachElement:P,modalStackIndex:b,visibility:E,handleLockScroll:V,$focusTrap:h,toggle:z,params:k}}function L(){if(u.modelValue){if(D("before-open",!1))return;var e=P();if(e||!1===u.attach){!1!==u.attach&&e.appendChild(f.value);var n=y.openedModals.findIndex((function(e){return e.uid===d}));-1!==n&&y.openedModals.splice(n,1),y.openedModals.push(x()),b.value=y.openedModals.length-1,V(),y.openedModals.filter((function(e){return e.uid!==d})).forEach((function(n,t){n.getAttachElement()===e&&(n.modalStackIndex.value=t,n.visibility.overlay=!1)})),g.value=!0,l((function(){E.overlay=!0,E.modal=!0}))}else!1!==e&&console.warn("Unable to locate target ".concat(u.attach))}}function I(){var e=y.openedModals.findIndex((function(e){return e.uid===d}));if(-1!==e&&y.openedModals.splice(e,1),y.openedModals.length>0){var n=y.openedModals[y.openedModals.length-1];n.props.focusTrap&&n.$focusTrap.firstElement().focus(),(n.props.focusRetain||n.props.focusTrap)&&n.vfmContainer.value.focus(),!n.props.hideOverlay&&(n.visibility.overlay=!0)}E.overlay=!1,E.modal=!1}function V(){u.modelValue&&l((function(){u.lockScroll?W(v.value,{reserveScrollBarGap:!0}):Z(v.value)}))}function P(){return!1!==u.attach&&("string"==typeof u.attach?!!window&&window.document.querySelector(u.attach):u.attach)}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return B({ref:x()},e)}function D(e,n){var t=!1,o=_({type:e,stop:function(){t=!0}});return c(e,o),!!t&&(S.value=!0,l((function(){c("update:modelValue",n)})),!0)}function z(e,n){var t="boolean"==typeof e?e:!u.modelValue;t&&2===arguments.length&&(k.value=n),c("update:modelValue",t)}return r((function(){return u.modelValue}),(function(e){if(S.value)S.value=!1;else if(L(),!e){if(D("before-close",!0))return;I()}})),r((function(){return u.lockScroll}),V),r((function(){return u.hideOverlay}),(function(e){u.modelValue&&!e&&(E.overlay=!0)})),r((function(){return u.attach}),L),r(M,(function(e){e&&(g.value=!1,v.value.style.display="none")}),{flush:"post"}),y.modals.push(x()),a((function(){L()})),i((function(){var e;I(),u.lockScroll&&v.value&&Z(v.value),null==f||null===(e=f.value)||void 0===e||e.remove();var n=y.modals.findIndex((function(e){return e.uid===d}));y.modals.splice(n,1)})),{root:f,vfmContainer:v,vfmOverlayTransition:p,vfmTransition:m,computedOverlayTransition:T,computedTransition:C,visible:g,visibility:E,params:k,calculateZIndex:A,bindStyle:j,beforeOverlayEnter:function(){w.value=Q},afterOverlayEnter:function(){w.value=J},beforeOverlayLeave:function(){w.value=ee},afterOverlayLeave:function(){w.value=X},beforeModalEnter:function(){O.value=Q},afterModalEnter:function(){O.value=J,(u.focusRetain||u.focusTrap)&&v.value.focus(),u.focusTrap&&h.enable(v.value),c("opened",_({type:"opened"}))},beforeModalLeave:function(){O.value=ee,h.enabled()&&h.disable()},afterModalLeave:function(){O.value=X,b.value=null,u.lockScroll&&Z(v.value);var e=!1,n=_({type:"closed",stop:function(){e=!0}});c("closed",n),e||(k.value={})},onClickContainer:function(){c("click-outside",_({type:"click-outside"})),u.clickToClose&&c("update:modelValue",!1)},onEsc:function(){g.value&&u.escToClose&&c("update:modelValue",!1)}}}},te=u("data-v-2836fdb5"),oe=te((function(e,n,t,o,r,a){return t.ssr||o.visible?s((c(),d("div",{key:0,ref:"root",style:o.bindStyle,class:["vfm vfm--inset",[!1===t.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":t.preventClick}]],onKeydown:n[2]||(n[2]=f((function(){return o.onEsc&&o.onEsc.apply(o,arguments)}),["esc"]))},[v(p,m(o.computedOverlayTransition,{onBeforeEnter:o.beforeOverlayEnter,onAfterEnter:o.afterOverlayEnter,onBeforeLeave:o.beforeOverlayLeave,onAfterLeave:o.afterOverlayLeave}),{default:te((function(){return[!t.hideOverlay&&o.visibility.overlay?(c(),d("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",t.overlayClass],style:t.overlayStyle},null,6)):y("v-if",!0)]})),_:1},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),v(p,m(o.computedTransition,{onBeforeEnter:o.beforeModalEnter,onAfterEnter:o.afterModalEnter,onBeforeLeave:o.beforeModalLeave,onAfterLeave:o.afterModalLeave}),{default:te((function(){return[s(v("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",t.classes],style:t.styles,"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onClick:n[1]||(n[1]=b((function(){return o.onClickContainer&&o.onClickContainer.apply(o,arguments)}),["self"]))},[v("div",{class:["vfm__content",[t.contentClass,{"vfm--prevent-auto":t.preventClick}]],style:t.contentStyle},[h(e.$slots,"default",{params:o.params})],6)],14,["aria-expanded"]),[[g,o.visibility.modal]])]})),_:3},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[g,!t.ssr||o.visible]]):y("v-if",!0)}));!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n"),ne.render=oe,ne.__scopeId="data-v-2836fdb5",ne.__file="lib/VueFinalModal.vue";var re={props:{},computed:{api:function(){return this[this.options.key]}},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,n){e.ref.params.value=n.params},isString:function(e){return"string"==typeof e}}},ae={class:"modals-container"};function ie(e,n){var t=B({},e);return Object.assign(t.props,{options:{type:Object,default:function(){return n}}}),t}function le(e,n){var t=function(e){return function(){return{show:function(n){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];switch(M(n)){case"string":this.toggle.apply(this,[n,!0].concat(o));break;case"object":var a={value:!0,id:Symbol("dynamicModal"),component:e.componentName,bind:{},slots:{},on:{},params:o[0]};this.dynamicModals.push(C(Object.assign(a,n)))}},hide:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this.toggle(n,!1)},hideAll:function(){for(var e=this.openedModals.length-1;e>=0;e--)this.openedModals[e].emit("update:modelValue",!1)},toggle:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];(Array.isArray(e)?this.get.apply(this,L(e)):this.get(e)).forEach((function(e){return e.toggle.apply(e,t)}))},get:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.modals.filter((function(e){return n.includes(e.props.name)}))},dynamicModals:C([]),openedModals:[],modals:[]}}}(n)();Object.defineProperty(e.config.globalProperties,n.key,{get:function(){return t}}),e.provide(n.key,t)}re.render=function(e,n,t,o,r,a){return c(),d("div",ae,[(c(!0),d(E,null,w(a.api.dynamicModals,(function(e,n){return c(),d(O(e.component),m({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":function(n){return e.value=n}},S(e.on),{onClosed:function(e){return a.slice(n)},onBeforeOpen:function(n){return a.beforeOpen(n,e)}}),k({_:2},[w(e.slots,(function(e,n){return{name:n,fn:T((function(){return[y(" eslint-disable vue/no-v-html "),a.isString(e)?(c(),d("div",{key:0,innerHTML:e},null,8,["innerHTML"])):(c(),d(O(e.component),m({key:1},e.bind,S(e.on||{})),null,16))]}))}}))]),1040,["modelValue","onUpdate:modelValue","onClosed","onBeforeOpen"])})),128))])},re.__file="lib/ModalsContainer.vue";var ue={componentName:"VueFinalModal",dynamicContainerName:"ModalsContainer",key:"$vfm"};export default function(e){return{install:function(n,t){var o=Object.assign({},ue,e,t);(function(e,n,t){return!(e||n||t)||("undefined"==typeof window||(e&&console.error("[vue-final-modal] Duplicate registration API key of VueFinalModal."),n&&console.error("[vue-final-modal] Duplicate registration componentName of VueFinalModal."),t&&console.error("[vue-final-modal] Duplicate registration dynamicContainerName of ModalsContainer.")),!1)})(n.config.globalProperties[o.key],n._context.components[o.componentName],n._context.components[o.dynamicContainerName])&&(le(n,o),function(e,n){e.component(n.componentName,ie(ne,n))}(n,o),function(e,n){e.component(n.dynamicContainerName,ie(re,n))}(n,o))}}}
//# sourceMappingURL=VueFinalModal.esm.js.map
