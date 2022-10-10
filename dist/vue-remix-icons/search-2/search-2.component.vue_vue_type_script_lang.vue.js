/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-search-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '2 2 20.31 20.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 20.31 20.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm8.485 16.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"},[])]);
    }
};

export { script as default };
