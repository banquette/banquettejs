/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-air',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.35 17.95c-.28.89-1.01 1.62-1.9 1.9-1.51.48-2.94-.23-3.59-1.42-.35-.65.17-1.43.91-1.43h.01c.34 0 .68.16.84.46.17.32.5.54.89.54.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1-.45-1-1s.45-1 1-1h8.5c1.96 0 3.5 1.9 2.85 3.95zm4.56-12.28a3.492 3.492 0 0 0-2.58-2.58c-1.76-.4-3.37.53-4.02 1.98-.31.67.17 1.43.9 1.43.39 0 .75-.22.9-.57A1.5 1.5 0 0 1 15.5 5c.83 0 1.5.67 1.5 1.5S16.33 8 15.5 8H3c-.55 0-1 .45-1 1s.45 1 1 1h12.5c2.2 0 3.93-2.04 3.41-4.33zM18.4 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.5c.83 0 1.5.67 1.5 1.5a1.5 1.5 0 0 1-.93 1.39c-.36.15-.57.51-.57.9 0 .73.76 1.21 1.43.91a3.51 3.51 0 0 0 2-3.93C21.59 12.13 20.07 11 18.4 11z"},[])]); }
return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"},[])]);
    }
};

export { script as default };
