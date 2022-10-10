/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-change-history',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7.77 5.61 18h12.78z","opacity":"0.3"},[]),h('path',{d:"M12 4 2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2.8 4.89 18.4 15.11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7.77 18.39 18H5.61L12 7.77m-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0z"},[])]); }
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z"},[])]);
    }
};

export { script as default };
