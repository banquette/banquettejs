<script>
import { h } from 'vue';

export default {
    name: 'i-material-museum',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 20h12V9H6v11zm2-9h2l2 3 2-3h2v7h-2v-4l-2 3-2-3v4H8v-7z","opacity":"0.3"},[]),h('path',{d:"M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-4 9H6V9h12v11z"},[]),h('path',{d:"m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2.22 20 19.78' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.5 11c.28 0 .5-.22.5-.5V9.26c0-.16-.08-.32-.21-.41L12.57 2.4c-.34-.24-.8-.24-1.15 0L2.21 8.85c-.13.09-.21.25-.21.41v1.24c0 .28.22.5.5.5H4v9H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1v-9h1.5zM16 17c0 .55-.45 1-1 1s-1-.45-1-1v-3l-1.17 1.75a1 1 0 0 1-1.66 0L10 14v3c0 .55-.45 1-1 1s-1-.45-1-1v-4.7a1.297 1.297 0 0 1 2.38-.72L12 14l1.61-2.42c.25-.36.65-.58 1.09-.58.72 0 1.3.58 1.3 1.3V17z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-4 9H6V9h12v11z"},[]),h('path',{d:"m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-6 7h-2v-4l-2 3-2-3v4H8v-7h2l2 3 2-3h2v7z"},[])]);
    }
}
</script>