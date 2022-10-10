/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-phishing',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '5 2 14 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 9c0-1.3-.84-2.4-2-2.82V3c0-.55-.45-1-1-1s-1 .45-1 1v3.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82v3.01c0 2.09-1.52 3.96-3.6 4.16C9.02 19.21 7 17.34 7 15v-1h1.79c.45 0 .67-.54.35-.85l-3.29-3.3a.5.5 0 0 0-.85.36v4.58c0 3.05 2.19 5.77 5.21 6.16C13.87 21.42 17 18.57 17 15v-3.18c1.16-.42 2-1.52 2-2.82zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '5 2 14 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 6.18V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1.17l1.59 1.59L10 14 5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.41 2-1.51 2-2.82s-.84-2.4-2-2.82zM16 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"},[])]); }
return h('svg',{"viewBox":c ? '5 2 14 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 9c0-1.3-.84-2.4-2-2.82V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1h3L5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.42 2-1.52 2-2.82zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"},[])]);
    }
};

export { script as default };
