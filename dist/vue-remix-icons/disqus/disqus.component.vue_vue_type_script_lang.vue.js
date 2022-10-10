/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-disqus',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '0.98 2 20.97 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.95 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.962 9.962 0 0 1-6.249-2.192l-4.718.59 1.72-4.586A9.944 9.944 0 0 1 1.95 12c0-5.523 4.477-10 10-10zm0 2a8 8 0 0 0-8 8c0 1.178.254 2.318.738 3.362l.176.38-.847 2.26 2.315-.289.338.297A7.96 7.96 0 0 0 11.95 20a8 8 0 0 0 0-16zM8 7h3.79c3.42 0 5.44 1.956 5.54 4.729l.003.215v.027c0 2.814-1.962 4.922-5.337 5.025l-.263.004H8V7h3.79H8zm3.831 2.458h-1.108v5.085h1.108c1.566 0 2.625-.845 2.704-2.345l.005-.183v-.028c0-1.6-1.08-2.53-2.709-2.53z"},[])]); }
return h('svg',{"viewBox":c ? '1.5 2 20.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-2.53 0-4.84-.94-6.601-2.488L1.5 20l1.424-3.797A9.945 9.945 0 0 1 2 12C2 6.477 6.477 2 12 2zM8 7v10h3.733l.263-.004c3.375-.103 5.337-2.211 5.337-5.025v-.027l-.003-.215C17.23 8.956 15.21 7 11.79 7H8zm3.831 2.458c1.628 0 2.709.928 2.709 2.529v.028l-.005.183c-.079 1.5-1.138 2.345-2.704 2.345h-1.108V9.458h1.108z"},[])]);
    }
};

export { script as default };
