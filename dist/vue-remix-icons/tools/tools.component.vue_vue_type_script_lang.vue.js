/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-tools',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '3 3.07 17.29 17.29' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.33 3.271a3.5 3.5 0 0 1 4.254 4.963l10.709 10.71-1.414 1.414-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884 3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-6.718 8.132 1.414 1.414-5.303 5.303a1 1 0 0 1-1.492-1.327l.078-.087 5.303-5.303z"},[])]); }
return h('svg',{"viewBox":c ? '3 3.07 17.64 17.64' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.33 3.271a3.5 3.5 0 0 1 4.472 4.474L20.647 18.59l-2.122 2.121L7.68 9.867a3.5 3.5 0 0 1-4.472-4.474L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884 3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-7.071 7.778 2.121 2.122-4.95 4.95A1.5 1.5 0 0 1 3.58 17.99l.097-.107 4.95-4.95z"},[])]);
    }
};

export { script as default };
