/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-blind',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '3.91 1.5 17.33 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"11.41","cy":"3.5",r:"2"},[]),h('path',{d:"M12.04 7.12c-.17-.35-.44-.65-.8-.85a1.98 1.98 0 0 0-1.93-.03v-.01l-4.39 2.5c-.62.35-1.01 1.01-1.01 1.73V13c0 .55.45 1 1 1s1-.45 1-1v-2.54l1.5-.85c-.32 1.1-.5 2.24-.5 3.39v5.33l-2 2.67c-.33.44-.24 1.07.2 1.4.44.33 1.07.24 1.4-.2l2.04-2.72c.23-.31.37-.69.4-1.08l.18-2.94L10.91 18v4c0 .55.45 1 1 1s1-.45 1-1v-4.87c0-.41-.13-.81-.36-1.15l-1.6-2.29v-.01c-.11-1.16.07-2.32.46-3.4.75 1.14 1.88 1.98 3.2 2.41l5.7 9.87c.14.24.44.32.68.18.24-.14.32-.44.18-.68L15.92 13c.54 0 .98-.44.98-.98v-.05c0-.5-.37-.94-.87-.99-.95-.1-2.37-.52-3.21-2.18"},[])]); }
return h('svg',{"viewBox":c ? '4 1.5 17.5 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"11.5","cy":"3.5",r:"2"},[]),h('path',{d:"M12.13 7.12c-.17-.35-.44-.65-.8-.85a1.98 1.98 0 0 0-1.93-.03v-.01L4 9.3V14h2v-3.54l1.5-.85C7.18 10.71 7 11.85 7 13v5.33L4.4 21.8 6 23l3-4 .22-3.54L11 18v5h2v-6.5l-1.97-2.81c-.04-.52-.14-1.76.45-3.4.75 1.14 1.88 1.98 3.2 2.41L20.63 23l.87-.5-5.48-9.5H17v-2c-.49 0-2.88.17-4.08-2.21"},[])]);
    }
};

export { script as default };
