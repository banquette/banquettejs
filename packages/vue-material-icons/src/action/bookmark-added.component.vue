<script>
import { h } from 'vue';

export default {
    name: 'i-material-bookmark-added',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 2.63 17.77 18.37' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 17.97V10.9A5 5 0 0 1 13 6c0-.34.03-.68.1-1H7v12.97l5-2.14 5 2.14z","opacity":"0.3"},[]),h('path',{d:"M17.83 9 15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9zM17 17.97l-5-2.14-5 2.14V5h6.1c.15-.74.46-1.42.9-2H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9c-.32.07-.66.1-1 .1-.34 0-.68-.03-1-.1v7.07z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 2.63 17.77 18.37' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19 21-7-3-7 3V3h9a5.002 5.002 0 0 0 5 7.9V21zM17.83 9 15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 3 17.36 17.48' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9v8.58c0 .72-.73 1.2-1.39.92L12 18l-5.61 2.4A.994.994 0 0 1 5 19.48V5zm17.07-1.66c.39.39.39 1.02 0 1.41l-3.54 3.54a.996.996 0 0 1-1.41 0l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71 2.83-2.83c.39-.4 1.02-.4 1.41-.01z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 2.63 17.77 18.37' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm.83-2L15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9z"},[])]);
return h('svg',{"viewBox":c ? '5 2.63 17.77 18.37' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19 21-7-3-7 3V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9V21zM17.83 9 15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9z"},[])]);
    }
}
</script>