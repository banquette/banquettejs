/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-donut-large',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 2.37 19.63 19.26' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.07 5.32C16.26 6 18 7.74 18.68 9.93c.19.63.76 1.07 1.41 1.07h.04c1 0 1.72-.96 1.43-1.91-.97-3.18-3.48-5.69-6.66-6.66-.94-.29-1.9.43-1.9 1.43v.04c0 .66.44 1.23 1.07 1.42zm4.61 8.75a7.014 7.014 0 0 1-4.61 4.61c-.63.19-1.07.76-1.07 1.41v.04c0 1 .96 1.72 1.91 1.43 3.18-.97 5.69-3.48 6.66-6.66.29-.95-.43-1.91-1.42-1.91h-.05c-.66.01-1.23.45-1.42 1.08zM11 20.11c0-.67-.45-1.24-1.09-1.44C7.07 17.78 5 15.13 5 12s2.07-5.78 4.91-6.67c.64-.2 1.09-.77 1.09-1.44v-.01c0-1-.97-1.74-1.93-1.44C4.98 3.69 2 7.5 2 12c0 4.5 2.98 8.31 7.07 9.56.96.3 1.93-.44 1.93-1.45z"},[])]); }
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 2.05 19.95 19.9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 5.08A7 7 0 0 1 18.92 11h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03zM18.92 13A7 7 0 0 1 13 18.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"},[])]);
    }
};

export { script as default };
