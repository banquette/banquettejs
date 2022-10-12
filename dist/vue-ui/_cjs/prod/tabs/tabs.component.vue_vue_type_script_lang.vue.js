/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../_virtual/_tslib.js"),t=require("@banquette/utils-array/_cjs/prod/enum-to-array"),o=require("@banquette/utils-dom/_cjs/prod/get-element-offset"),s=require("@banquette/utils-misc/_cjs/prod/throttle"),i=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/expose.decorator"),n=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),r=require("@banquette/vue-typescript/_cjs/prod/decorator/template-ref.decorator"),c=require("@banquette/vue-typescript/_cjs/prod/decorator/themeable.decorator"),u=require("@banquette/vue-typescript/_cjs/prod/decorator/watch.decorator"),d=require("@banquette/vue-typescript/_cjs/prod/theme/bind-theme.directive"),p=require("@banquette/vue-typescript/_cjs/prod/vue"),b=require("@vueuse/core"),l=require("../misc/teleport.directive.js"),h=require("./tab/constant.js");require("./tab/tab.component.vue.js");var f=require("./theme-configuration.js"),T=require("./tab/tab.component.vue_vue_type_script_lang.vue.js"),m=function(p){function TabsComponent(){var e=null!==p&&p.apply(this,arguments)||this;return e.toggleElements=[],e.hasFocusedTab=!1,e.tabs=[],e.observer=null,e.focusedTab=null,e.focusedTabResizeUnsubscribe=null,e}return e.__extends(TabsComponent,p),TabsComponent.prototype.mounted=function(){this.observeDOMMutations()},TabsComponent.prototype.beforeUnmount=function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.focusedTabResizeUnsubscribe&&(this.focusedTabResizeUnsubscribe(),this.focusedTabResizeUnsubscribe=null)},TabsComponent.prototype.register=function(e){var t=this.getTabToggleDomIndex(e.$el);this.tabs.splice(t,0,e),1!==this.tabs.length&&null!==this.focusedTab&&e.id!==this.focused||this.focus(e),this.$forceUpdate()},TabsComponent.prototype.unregister=function(e){var t=this.tabs.indexOf(e);if(t>-1){if(this.tabs.splice(t,1),this.tabs.length>0&&this.focusedTab===e){var o=void 0;for(o=0;o<this.tabs.length;++o){var s=(o+t)%this.tabs.length;if(!this.tabs[s].disabled&&!this.tabs[s].fake){this.focus(this.tabs[s]);break}}o>=this.tabs.length&&(this.setFocusedTab(null),this.changeFocusIndicatorVisibility(!1))}this.$forceUpdate()}},TabsComponent.prototype.focus=function(e){for(var t=this,o=0,s=this.tabs;o<s.length;o++){var i=s[o];if(i===e&&!i.focused){if(i.disabled||i.fake)return;null!==this.focusedTab&&this.focusedTab.onUnFocus(),this.setFocusedTab(e),this.$nextTick((function(){t.updateFocusIndicator()})),i.onFocus(),this.$emit("update:focused",i.id)}}this.focusedTab===e||e.disabled?null!==this.focusedTab&&this.changeFocusIndicatorVisibility(!0):(this.changeFocusIndicatorVisibility(!1),this.setFocusedTab(null))},TabsComponent.prototype.getTabs=function(){return this.tabs},TabsComponent.prototype.onFocusedChange=function(e){for(var t=0,o=this.tabs;t<o.length;t++){var s=o[t];if(s.id===e){this.focus(s);break}}},TabsComponent.prototype.onDirectionChange=function(){var e=this;this.indicatorEl.removeAttribute("style"),this.updateFocusIndicator(),setTimeout((function(){e.updateFocusIndicator()}),300)},TabsComponent.prototype.setFocusedTab=function(e){var t=this;this.focusedTabResizeUnsubscribe&&(this.focusedTabResizeUnsubscribe(),this.focusedTabResizeUnsubscribe=null),this.focusedTab=e,this.hasFocusedTab=null!==this.focusedTab,this.focusedTab&&this.focusedTab.$refs.toggle&&(this.focusedTabResizeUnsubscribe=b.useResizeObserver(this.focusedTab.$refs.toggle,(function(){t.updateFocusIndicator()})).stop)},TabsComponent.prototype.changeFocusIndicatorVisibility=function(e){this.indicatorEl&&(this.indicatorEl.style.display=e?"block":"none")},TabsComponent.prototype.updateFocusIndicator=function(){if(this.indicatorEl&&this.focusedTab&&this.focusedTab.$refs.toggle){var e=o.getElementOffset(this.focusedTab.$refs.toggle,!1),t=getComputedStyle(this.focusedTab.$refs.toggle);if(this.direction===h.TabsDirection.Top){var s=parseFloat(t.paddingLeft),i=parseFloat(t.paddingRight);this.indicatorEl.style.left="".concat(Math.round(e.left+s),"px"),this.indicatorEl.style.width="".concat(Math.round(this.focusedTab.$refs.toggle.offsetWidth-(s+i)),"px")}else if(this.direction===h.TabsDirection.Left||this.direction===h.TabsDirection.Right){var a=parseFloat(t.paddingTop),n=parseFloat(t.paddingBottom);this.indicatorEl.style.top="".concat(Math.round(e.top+a),"px"),this.indicatorEl.style.height="".concat(Math.round(this.focusedTab.$refs.toggle.offsetHeight-(a+n)),"px")}}},TabsComponent.prototype.observeDOMMutations=function(){var e=this;this.observer=new MutationObserver(s.throttle((function(){e.tabs=e.tabs.sort((function(t,o){return e.getTabToggleDomIndex(t.$el)-e.getTabToggleDomIndex(o.$el)})),e.$forceUpdate(),null!==e.focusedTab&&e.$nextTick((function(){e.updateFocusIndicator()}))}),100)),this.observer.observe(this.$refs.content,{childList:!0,attributes:!1,subtree:!1})},TabsComponent.prototype.getTabToggleDomIndex=function(e){var t=0;if(e.parentNode)for(var o=0,s=Object.values(e.parentNode.childNodes);o<s.length;o++){var i=s[o];if(i===e)return t;i.nodeType===Node.ELEMENT_NODE&&i instanceof HTMLElement&&i.classList.contains("bt-tab")&&++t}return t},e.__decorate([n.Prop({type:String,default:h.TabsDirection.Top,transform:function(e){return t.enumToArray(h.TabsDirection).indexOf(e)>-1?e:h.TabsDirection.Top}}),e.__metadata("design:type",String)],TabsComponent.prototype,"direction",void 0),e.__decorate([n.Prop({type:Boolean,default:!0}),e.__metadata("design:type",Boolean)],TabsComponent.prototype,"preRender",void 0),e.__decorate([n.Prop({type:String,default:null}),e.__metadata("design:type",String)],TabsComponent.prototype,"focused",void 0),e.__decorate([a.Expose(),e.__metadata("design:type",Array)],TabsComponent.prototype,"toggleElements",void 0),e.__decorate([a.Expose(),e.__metadata("design:type",Boolean)],TabsComponent.prototype,"hasFocusedTab",void 0),e.__decorate([r.TemplateRef("indicator"),e.__metadata("design:type",HTMLElement)],TabsComponent.prototype,"indicatorEl",void 0),e.__decorate([a.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",Array)],TabsComponent.prototype,"getTabs",null),e.__decorate([u.Watch("focused"),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Object]),e.__metadata("design:returntype",void 0)],TabsComponent.prototype,"onFocusedChange",null),e.__decorate([u.Watch("direction"),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],TabsComponent.prototype,"onDirectionChange",null),TabsComponent=e.__decorate([c.Themeable(f.ThemeConfiguration),i.Component({name:"bt-tabs",components:[T],directives:[l.TeleportDirective,d.BindThemeDirective],emits:["update:focused"]})],TabsComponent)}(p.Vue);module.exports=m;
