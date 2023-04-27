<script>
import { h } from 'vue';

export default {
    name: 'i-material-skip-previous',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 14.14V9.86L12.97 12z","opacity":"0.3"},[]),h('path',{d:"M6 6h2v12H6zm12 12V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 6h2v12H6V6zm3.5 6 8.5 6V6l-8.5 6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 6 12.01 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zm3.66 6.82 5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07a1 1 0 0 0 0 1.64z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 6h2v12H6zm3.5 6 8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z"},[])]);
return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 6h2v12H6zm3.5 6 8.5 6V6z"},[])]);
    }
}
</script>