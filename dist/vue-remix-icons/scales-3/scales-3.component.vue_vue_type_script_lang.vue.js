/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-scales-3',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '1.67 2 20.66 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512A5.986 5.986 0 0 1 18 17a5.985 5.985 0 0 1-4.329-1.845l3.094-8.512L13 5.387V19h4v2H7v-2h4V5.387L7.232 6.643l3.096 8.512A5.982 5.982 0 0 1 6 17a5.985 5.985 0 0 1-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2h2zm5 7.103-1.958 5.386A3.975 3.975 0 0 0 18 15c.7 0 1.37-.18 1.958-.51L18 9.102zm-12 0-1.958 5.386A3.975 3.975 0 0 0 6 15c.7 0 1.37-.18 1.958-.51L6 9.102z"},[])]); }
return h('svg',{"viewBox":c ? '1.67 2 20.66 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512A5.986 5.986 0 0 1 18 17a5.985 5.985 0 0 1-4.329-1.845l3.094-8.512L13 5.387V19h4v2H7v-2h4V5.387L7.232 6.643l3.096 8.512A5.982 5.982 0 0 1 6 17a5.985 5.985 0 0 1-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2h2zm5 7.103L16.582 13h2.835L18 9.103zm-12 0L4.582 13h2.835L6 9.103z"},[])]);
    }
};

export { script as default };