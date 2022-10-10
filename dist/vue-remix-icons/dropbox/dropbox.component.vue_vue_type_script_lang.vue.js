/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-dropbox',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '1.53 3.49 20.93 18.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8.646 17.26 3.392 2.162 3.392-2.161 1.86 1.185-5.252 3.346-5.252-3.346 1.86-1.185zm-.877-8.28 2.393-1.553-2.425-1.574L5.28 7.37l2.49 1.61zm1.84 1.19L12 11.719l2.39-1.547L12 8.619l-2.391 1.552zm4.231 2.74 2.424 1.568 2.45-1.502-2.485-1.612-2.389 1.545zM12 6.234l4.237-2.748L22.46 7.33l-4.392 2.843 4.393 2.85-6.226 3.819L12 14.1l-4.235 2.74-6.23-3.817 4.396-2.851L1.539 7.33l6.224-3.843L12 6.235zm1.837 1.192L16.23 8.98l2.489-1.61-2.456-1.517-2.426 1.574zM10.16 12.91l-2.39-1.546-2.486 1.613 2.451 1.502 2.425-1.569z"},[])]); }
return h('svg',{"viewBox":c ? '1.5 4 21 17.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.285 10.668 5.215 3.323-5.252 3.346L12 13.993l-5.248 3.344L1.5 13.99l5.215-3.323L1.5 7.346 6.752 4 12 7.343 17.248 4 22.5 7.346l-5.215 3.322zm-.074 0L12 7.348l-5.211 3.32L12 13.988l5.211-3.32zM6.786 18.446l5.252-3.346 5.252 3.346-5.252 3.346-5.252-3.346z"},[])]);
    }
};

export { script as default };
