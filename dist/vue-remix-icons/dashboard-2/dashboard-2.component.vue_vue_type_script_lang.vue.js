/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-dashboard-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 1c1.018 0 1.985.217 2.858.608L13.295 7.17a5 5 0 0 0-4.831 8.366L7.05 16.95l-.156-.161A7 7 0 0 1 12 5zm6.392 4.143c.39.872.608 1.84.608 2.857a6.982 6.982 0 0 1-2.05 4.95l-1.414-1.414a4.992 4.992 0 0 0 1.294-4.831l1.562-1.562zm-2.15-2.8 1.415 1.414-3.724 3.726A2.002 2.002 0 0 1 12 14a2 2 0 1 1 .517-3.933l3.726-3.724z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 0 0-5.106 11.789l.156.16 1.414-1.413a5 5 0 0 1 4.831-8.366l1.563-1.562A6.99 6.99 0 0 0 12 5zm6.392 4.143-1.561 1.562c.11.413.169.847.169 1.295 0 1.38-.56 2.63-1.464 3.536l1.414 1.414A6.982 6.982 0 0 0 19 12a6.965 6.965 0 0 0-.608-2.857zm-2.15-2.8-3.725 3.724A2.002 2.002 0 0 0 10 12a2 2 0 1 0 3.933-.517l3.724-3.726-1.414-1.414z"},[])]);
    }
};

export { script as default };
