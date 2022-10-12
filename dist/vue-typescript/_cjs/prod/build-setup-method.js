/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_virtual/_tslib.js"),t=require("@banquette/exception/_cjs/prod/usage.exception"),n=require("@banquette/utils-misc/_cjs/prod/are-equal"),r=require("@banquette/utils-misc/_cjs/prod/noop"),o=require("@banquette/utils-misc/_cjs/prod/proxy"),i=require("@banquette/utils-object/_cjs/prod/clone-deep-primitive"),a=require("@banquette/utils-object/_cjs/prod/get-object-keys"),s=require("@banquette/utils-object/_cjs/prod/get-object-value"),u=require("@banquette/utils-type/_cjs/prod/ensure-string"),l=require("@banquette/utils-type/_cjs/prod/is-array"),c=require("@banquette/utils-type/_cjs/prod/is-function"),p=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined"),f=require("@banquette/utils-type/_cjs/prod/is-string"),d=require("@banquette/utils-type/_cjs/prod/is-undefined"),m=require("vue"),v=require("./component-aware.composable.js"),b=require("./constants.js"),g=require("./decorator/watch.decorator.js"),h=require("./theme/utils/get-themes-for-component.js"),y=require("./theme/utils/match-variants.js"),j=require("./theme/utils/split-variant-string.js"),x=require("./utils/components-count.js"),O=require("./utils/converters.js"),A=require("./utils/define-getter.js"),q=require("./utils/define-ref-proxy.js"),I=require("./utils/get-or-create-component-metadata.js"),T=require("./utils/get-property-descriptor.js"),w=require("./utils/guards.js"),V=require("./utils/instantiate.js"),C=require("./utils/is-function-getter-safe.js"),S=require("./utils/resolve-import-public-name.js");exports.buildSetupMethod=function buildSetupMethod(E,N,P,U,_,R){return void 0===P&&(P=null),void 0===U&&(U=null),void 0===R&&(R=null),function(M,k){var F,K,D,$=U,B=!1,G=m.ref(1),Y={},H=m.getCurrentInstance();if(null===$){if(d.isUndefined(E.prototype.render)&&(E.prototype.render=r.noop),$=new Proxy(V.instantiate(E,N.component),{get:function(e,t,n){return"$"===t[0]&&$[b.COMPONENT_VUE_INSTANCE][t]?$[b.COMPONENT_VUE_INSTANCE][t]:Reflect.get(e,t,n)}}),Object.defineProperty($,b.COMPONENT_VUE_INSTANCE,{enumerable:!1,configurable:!0,writable:!0,value:H}),Object.defineProperty(H,b.COMPONENT_TS_INSTANCE,{enumerable:!1,configurable:!1,writable:!1,value:$}),N.themeable){if(!d.isUndefined($[N.themeable.prop]))throw new t.UsageException('The name "'.concat(N.themeable.prop,"\" is already used in the component's instance, ")+'please define another name for the prop that defines the name of the variant to use. You can set the "prop" option of the "@Themeable" decorator for that.');Object.defineProperty($,b.ACTIVE_VARIANTS,{enumerable:!1,configurable:!1,writable:!0,value:null})}A.defineGetter($,"$forceUpdateComputed",(function(){return function(){G.value++}}))}if(null!==M){var z=[];P={};for(var J=0,L=Object.keys(M);J<L.length;J++){var Q=L[J],W=m.toRef(M,Q);if(!d.isUndefined(N.props[Q])){null!==N.themeable&&Q===N.themeable.prop||(W=function(e,n,r,o){var i,a=Symbol("unassigned");return new Proxy(e,{get:function(e,s){var l=e[s];if("value"===s){if(null!==N.themeable){if(null===$[b.ACTIVE_VARIANTS]){var c=h.getThemesForComponent($),p=j.splitVariantString($[N.themeable.prop]||"");$[b.ACTIVE_VARIANTS]=[];for(var f=0,m=c;f<m.length;f++)for(var v=m[f].getVariants(N.component.name),_loop_5=function(e){y.matchVariant(e,p,$)&&($[b.ACTIVE_VARIANTS].push(e),e.applyIds.length>0&&($[b.ACTIVE_VARIANTS]=$[b.ACTIVE_VARIANTS].concat(v.filter((function(t){return null!==t.publicId&&e.applyIds.indexOf(t.publicId)>-1&&$[b.ACTIVE_VARIANTS].indexOf(t)<0})))))},g=0,x=v;g<x.length;g++){_loop_5(x[g])}}if(N.props[n].default===l)for(var O=$[b.ACTIVE_VARIANTS],A=O.length-1;A>=0;A--)if(O[A].propsKeys.indexOf(n)>-1){l=O[A].propsMap[n];break}}if(null!==o&&(a!==l&&(a=l,i=o.apply($,[l])),d.isUndefined(i)||(l=i)),null!==r){var q=r.validate(l);if(q.waiting)throw new t.UsageException("Async validators are not allowed to validate props.");if(!q.valid)throw new t.UsageException('Validation failed for prop "'.concat(n,'". ')+"Reason: ".concat(q.getViolationsStringsArray().join(", "),".")+'Validated value was: "'.concat(u.ensureString(l),'".'))}}return l}})}(W,Q,N.props[Q].validate||null,N.props[Q].transform||null),z.push(W));var X=N.props[Q].name||Q;Y[X]=W,q.defineRefProxy($,N.props[Q].propertyName,Y,X),P[Q]=W}}if(null!==N.themeable)for(var Z=0,ee=Object.keys(N.themeVars);Z<ee.length;Z++){var te=ee[Z];!function(e,n){Object.defineProperty($,e,{get:function(){var e=n.defaultValue;if(N.themeable)for(var t=0,r=$[b.ACTIVE_VARIANTS];t<r.length;t++){var o=r[t];if(Object.keys(o.cssVarsMap).indexOf(n.name)>-1){e=o.cssVarsMap[n.name];break}}return c.isFunction(n.transform)&&(e=n.transform.apply($,[e])),e},set:function(){throw new t.UsageException("Theme variables are readonly in the component.")},enumerable:!1,configurable:!1})}(te,N.themeVars[te])}}for(var ne=0,re=Object.keys(N.templateRefs);ne<re.length;ne++){!function(e){Object.defineProperty($,e,{get:function(){if(!$.$refs)return null;var t=N.templateRefs[e],n=$.$refs[t.name];return p.isNullOrUndefined(n)?null:t.resolve?O.anyToTsInst(n)||n:n instanceof Element?n:n.$el||n},enumerable:!0,configurable:!0})}(re[ne])}for(var oe=0,ie=N.reactive;oe<ie.length;oe++){var ae=ie[oe],se=m.ref($[ae]);if(!d.isUndefined(N.exposed[ae])){var ue=S.resolveImportPublicName(_,N.exposed[ae].exposeAs,R);if(!1!==ue){Y[ue]=se,q.defineRefProxy($,ae,Y,ue);continue}}q.defineRefProxy($,ae,((F={})[ae]=se,F))}for(var _loop_1=function(e){var t=S.resolveImportPublicName(_,N.exposed[e].exposeAs,R);if(!1===t)return"continue";var n,r,i=T.getPropertyDescriptor(E,e);if(i&&(i.get||i.set))return d.isUndefined(N.computed[e])&&(n=i.get,r=i.set,Object.defineProperty(Y,t,{get:n,set:r,enumerable:!0,configurable:!0})),"continue";c.isFunction($[e])?Y[t]=o.proxy($[e],$):d.isUndefined(Y[t])&&(N.exposed[e].observe?(Y[t]=m.ref($[e]),q.defineRefProxy($,e,Y,t)):Y[t]=$[e])},le=0,ce=Object.keys(N.exposed);le<ce.length;le++){_loop_1(ce[le])}for(var createUpdatableComputed=function(e,t,n){return m.computed({get:function(){if(G.value>0)return n?e.get():e()},set:e.set},t)},_loop_2=function(n){for(var r=null,i=e.__assign({},N.computed[n]),s=0,u=a.getObjectKeys(i);s<u.length;s++){var l=u[s];if(f.isString(i[l])){var p=i[l];if(!c.isFunction($[p]))throw new t.UsageException('Failed to apply @Computed() "'.concat(l,'" option, no function "').concat(p,'" has been found.'));i[l]=o.proxy($[p],$)}}var m=T.getPropertyDescriptor(E,n);if(C.isFunctionGetterSafe(E,n))r=createUpdatableComputed(o.proxy($[n],$),i,!1);else if(!d.isUndefined(m)){if(!c.isFunction(m.get))return console.warn('Unable to create a computed for "'.concat(n,'", no getter found.')),"continue";var v={get:function(){return m.get.apply($)},set:function(){throw new t.UsageException('You cannot set a value on "'.concat(n,'" because the property is readonly.'))}};c.isFunction(m.set)&&(v.set=function(e){return m.set.apply($,[e])}),r=createUpdatableComputed(v,i,!0),Object.defineProperty($,n,{enumerable:!0,configurable:!0,get:v.get,set:v.set})}if(!d.isUndefined(N.exposed[n])){var b=S.resolveImportPublicName(_,N.exposed[n].exposeAs,R);!1!==b&&(Y[b]=r)}},pe=0,fe=Object.keys(N.computed);pe<fe.length;pe++){_loop_2(fe[pe])}for(var _loop_3=function(e){var t=b.HOOKS_MAP[e];c.isFunction(t)&&N.hooks[e].forEach((function(e){t(o.proxy($[e],$))}))},de=0,me=a.getObjectKeys(N.hooks);de<me.length;de++){_loop_3(me[de])}for(var ve=0,be=a.getObjectKeys(N.provided);ve<be.length;ve++){var ge=be[ve],he=m.ref($[ge]);N.provided[ge].readonly&&(he=m.readonly(he)),m.provide(N.provided[ge].provideAs,he),q.defineRefProxy($,ge,((K={})[ge]=he,K))}for(var ye=0,je=a.getObjectKeys(N.injected);ye<je.length;ye++){ge=je[ye];var xe=m.inject(N.injected[ge].target,N.injected[ge].defaultValue);m.isRef(xe)||(xe=m.ref(xe)),q.defineRefProxy($,ge,((D={})[ge]=xe,D)),Y[ge]=xe}if(null===M&&Object.keys(N.imports).length>0)throw new t.UsageException('The class "'.concat($.constructor.name,'" cannot contain imports because it is used as a composable. Composables cannot be nested.'));for(var _loop_4=function(e){var n=N.imports[e],r=n.composable;if(w.isDecoratedComponentConstructor(r)){var o=I.getOrCreateComponentMetadata(r.prototype);if(d.isUndefined(o.component)&&d.isUndefined(o.composable))throw new t.UsageException('The class "'.concat(r.name,'" cannot be used as a composable because the "@Composable()" decorator is missing.'));var i=p.isNullOrUndefined($[e])?V.instantiate(r,o.composable||{}):$[e],a=buildSetupMethod(r,o,P,i,e,N.imports[e].prefixOrAlias)(null,k);i instanceof v.ComponentAwareComposable&&Object.assign(i,{component:$});for(var _loop_6=function(t){var r=S.resolveImportPublicName(e,t,n.prefixOrAlias);if(!1===r)return"continue";i[t]=$[r];var o,a,s=Object.getOwnPropertyDescriptor($,r);d.isUndefined(s)||(o=s.get,a=s.set,Object.defineProperty(i,t,{get:o,set:a,enumerable:!0,configurable:!0}),delete $[r])},s=0,u=Object.keys(o.props);s<u.length;s++){_loop_6(u[s])}Object.defineProperty($,e,{enumerable:!0,configurable:!0,value:i}),d.isUndefined(N.exposed[e])||(Y[N.exposed[e].exposeAs]=i),Object.assign(Y,a)}},Oe=0,Ae=Object.keys(N.imports);Oe<Ae.length;Oe++){_loop_4(Ae[Oe])}for(var qe=Object.keys(P),Ie=0,Te=N.watch;Ie<Te.length;Ie++){var we=Te[Ie],Ve=l.isArray(we.source),Ce=f.isString(we.source)?[we.source]:we.source;!function(t){var a={},u=null,applyWatch=function(o,l){null!==u&&(u(),t.options.immediate=g.ImmediateStrategy.Sync);for(var p=[],f=[],v=e.__assign(e.__assign({},t.options),{immediate:!0}),b=0,h=o;b<h.length;b++){var y=h[b],j=y.split(".");j.length>1&&(v.deep=!0);var x=j[0];qe.indexOf(y)>-1?p.push(P[y]):d.isUndefined(Y[x])?(d.isUndefined(a[x])&&(a[x]=m.ref($[x]),q.defineRefProxy($,x,a)),p.push(a[x])):p.push(Y[x]),f.push(j)}var O=!1,A=!1!==t.options.immediate,I=t.options.immediate!==g.ImmediateStrategy.Sync&&!1!==t.options.immediate,T=!1,w={},onWatchTrigger=function(){for(var e=arguments,r=[],o=0;o<arguments.length;o++)r[o]=e[o];var process=function(){if(!B){var e=[],o=[];A=!0;for(var a=0;a<p.length;++a){var u=p[a],d=c.isFunction(u)?u.apply($):u.value,v=a<r[1].length?r[1][a]:void 0;if(f[a].length>1){var b=f.join("."),g=f[a].slice(1);if(d=m.toRaw(s.getObjectValue(d,g,void 0)),v=w[b],n.areEqual(v,d))continue;w[b]=i.cloneDeepPrimitive(d)}e.push(d),o.push(v)}return e.length>0?$[t.target].apply($,[l?e:e[0],l?o:o[0]].concat(r.slice(2))):void 0}};if(I){if(!T){var initialProcess=function(){I=!1,process()};A=!1,t.options.immediate===g.ImmediateStrategy.BeforeMount?m.onBeforeMount(initialProcess):t.options.immediate===g.ImmediateStrategy.Mounted?m.onMounted(initialProcess):m.nextTick().then(initialProcess),T=!0}}else A?process():A=!0;O=!0};if(u=m.watch(p,onWatchTrigger,v),!O){var V=new Array(p.length).fill(void 0);onWatchTrigger(V,V,r.noop)}};if(c.isFunction(t.source)){var p=m.computed(o.proxy(t.source,$));m.watchEffect((function(){var e=p.value,t=l.isArray(e);applyWatch(t?e:[e],t)}))}else applyWatch(t.source,t.isArraySource)}({target:we.target,source:Ce,options:we.options,isArraySource:Ve})}return null!==M&&(m.onBeforeMount((function(){return x.ComponentsCount.count++})),m.onBeforeUnmount((function(){B=!0,x.ComponentsCount.count--})),null!==N.renderMethod)?o.proxy($[N.renderMethod],$):Y}};
