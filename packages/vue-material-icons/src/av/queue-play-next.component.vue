<script>
import { h } from 'vue';

export default {
    name: 'i-material-queue-play-next',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 3 23 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 15v-3h3v-2h-3V7h-2v3H8v2h3v3zm5 0 3 3-3 3 1.5 1.5L24 18l-4.5-4.5zM8 19v2h8v-2h2v-2H3V5h18v8h2V5a2 2 0 0 0-2-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 3 23 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 3H1v16h7v2h8v-2h2v-2H3V5h18v8h2V3zm-10 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 3 22.58 19.06' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v6c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2zm-8 7V8c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2zm10.29 8.71-3.04 3.04c-.41.41-1.09.41-1.5 0-.41-.41-.41-1.09 0-1.5L21 18l-2.25-2.25c-.41-.41-.41-1.09 0-1.5.41-.41 1.09-.41 1.5 0l3.04 3.04c.39.39.39 1.03 0 1.42z"},[])]);
return h('svg',{"viewBox":c ? '1 3 23 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5a2 2 0 0 0-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"},[])]);
    }
}
</script>