/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-exchange-funds',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '1.54 2 20.92 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.375 15.103A8.001 8.001 0 0 0 8.03 5.053l-.992-1.737A9.996 9.996 0 0 1 17 3.34c4.49 2.592 6.21 8.142 4.117 12.77l1.342.774-4.165 2.214-.165-4.714 1.246.719zM4.625 8.897a8.001 8.001 0 0 0 11.345 10.05l.992 1.737A9.996 9.996 0 0 1 7 20.66C2.51 18.068.79 12.518 2.883 7.89L1.54 7.117l4.165-2.214.165 4.714-1.246-.719zm8.79 5.931L10.584 12l-2.828 2.828-1.414-1.414 4.243-4.242L13.414 12l2.829-2.828 1.414 1.414-4.243 4.242z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.373 4.51A9.962 9.962 0 0 1 12 2c5.523 0 10 4.477 10 10a9.954 9.954 0 0 1-1.793 5.715L17.5 12H20A8 8 0 0 0 6.274 6.413l-.9-1.902zm13.254 14.98A9.962 9.962 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.125.663-4.095 1.793-5.715L6.5 12H4a8 8 0 0 0 13.726 5.587l.9 1.902zm-5.213-4.662L10.586 12l-2.829 2.828-1.414-1.414 4.243-4.242L13.414 12l2.829-2.828 1.414 1.414-4.243 4.242z"},[])]);
    }
};

export { script as default };
