/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-loader-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor';this.version;var c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm10-5a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415zM8.464 8.464a1 1 0 0 1-1.414 0l-2.12-2.12a1 1 0 0 1 1.414-1.415l2.12 2.121a1 1 0 0 1 0 1.414zM4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0zM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 0 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0z"},[])]);
    }
};

export { script as default };
