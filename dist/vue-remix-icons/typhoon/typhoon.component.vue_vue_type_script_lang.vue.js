/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-typhoon',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '3 1.7 18 20.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.654 1.7-2.782 2.533a9.137 9.137 0 0 1 3.49 1.973c3.512 3.2 3.512 8.388 0 11.588-2.592 2.36-6.598 3.862-12.016 4.506l2.782-2.533a9.137 9.137 0 0 1-3.49-1.973c-3.512-3.2-3.533-8.369 0-11.588C8.23 3.846 12.237 2.344 17.655 1.7zM12 6c-3.866 0-7 2.686-7 6s3.134 6 7 6 7-2.686 7-6-3.134-6-7-6zm0 2.3c2.21 0 4 1.657 4 3.7s-1.79 3.7-4 3.7-4-1.657-4-3.7 1.79-3.7 4-3.7zm0 2c-1.138 0-2 .797-2 1.7 0 .903.862 1.7 2 1.7s2-.797 2-1.7c0-.903-.862-1.7-2-1.7z"},[])]); }
return h('svg',{"viewBox":c ? '3 1.7 18 20.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.654 1.7-2.782 2.533a9.137 9.137 0 0 1 3.49 1.973c3.512 3.2 3.512 8.388 0 11.588-2.592 2.36-6.598 3.862-12.016 4.506l2.782-2.533a9.137 9.137 0 0 1-3.49-1.973c-3.512-3.2-3.533-8.369 0-11.588C8.23 3.846 12.237 2.344 17.655 1.7zM12 8c-2.485 0-4.5 1.79-4.5 4s2.015 4 4.5 4 4.5-1.79 4.5-4-2.015-4-4.5-4z"},[])]);
    }
};

export { script as default };
