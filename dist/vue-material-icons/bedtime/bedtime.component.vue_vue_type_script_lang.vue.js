/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-bedtime',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 2.01 18.66 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.27 4.49A7.997 7.997 0 0 0 4 12c0 4.41 3.59 8 8 8 1.81 0 3.54-.62 4.93-1.71-3.91-1.39-9.29-6.26-7.66-13.8z","opacity":"0.3"},[]),h('path',{d:"M12.34 2.02c-.12 0-.23-.01-.35-.01C6.4 2.01 2 6.54 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96zM12 20c-4.41 0-8-3.59-8-8 0-3.45 2.2-6.4 5.27-7.51-1.63 7.54 3.75 12.41 7.66 13.8A7.993 7.993 0 0 1 12 20z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 2.11 17.89 19.9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.65 3.46c.27-.71-.36-1.45-1.12-1.34-5.52.8-9.47 6.07-8.34 11.88.78 4.02 4.09 7.21 8.14 7.87 3.74.61 7.16-.87 9.32-3.44.48-.57.19-1.48-.55-1.62-6.02-1.15-9.68-7.54-7.45-13.35z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '2 2.01 18.66 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.27 4.49c-1.63 7.54 3.75 12.41 7.66 13.8A7.993 7.993 0 0 1 12 20c-4.41 0-8-3.59-8-8 0-3.45 2.2-6.4 5.27-7.51m2.72-2.48C6.4 2.01 2 6.54 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.97h-.35z"},[])]); }
return h('svg',{"viewBox":c ? '2 2.01 18.66 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96z"},[])]);
    }
};

export { script as default };
