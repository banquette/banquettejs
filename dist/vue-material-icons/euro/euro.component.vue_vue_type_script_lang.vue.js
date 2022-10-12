/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-euro',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '2.61 3 17.74 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 18.5A6.48 6.48 0 0 1 9.24 15h5.14c.38 0 .73-.21.89-.55.33-.66-.15-1.45-.89-1.45h-5.8c-.05-.33-.08-.66-.08-1s.03-.67.08-1h5.8c.38 0 .73-.21.89-.55A.994.994 0 0 0 14.38 9H9.24A6.491 6.491 0 0 1 15 5.5c1.25 0 2.42.36 3.42.97.5.31 1.15.26 1.57-.16.58-.58.45-1.53-.25-1.96A9.034 9.034 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6h-2.9c-.38 0-.73.21-.9.55-.33.67.15 1.45.9 1.45h2.44a8.262 8.262 0 0 0 0 2H3.62c-.38 0-.73.21-.89.55-.34.67.14 1.45.89 1.45h2.9c1.24 3.49 4.56 6 8.48 6 1.74 0 3.36-.49 4.74-1.35.69-.43.82-1.39.24-1.97-.42-.42-1.07-.47-1.57-.15-.99.62-2.15.97-3.41.97z"},[])]); }
return h('svg',{"viewBox":c ? '2 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 18.5A6.48 6.48 0 0 1 9.24 15H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24A6.491 6.491 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06a8.262 8.262 0 0 0 0 2H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"},[])]);
    }
};

export { script as default };