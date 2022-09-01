<script>
import { h } from 'vue';

export default {
    name: 'i-material-label-important',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 5 17 13.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 7H7.89l3.57 5-3.57 5H15l3.55-5z","opacity":"0.3"},[]),h('path',{d:"M16.63 5.84C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16zM15 17H7.89l3.57-5-3.57-5H15l3.55 5L15 17z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 5 17 13.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4.94 5 15.82 13.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57a.99.99 0 0 0 0-1.16l-3.96-5.58A1.95 1.95 0 0 0 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 5 17 13.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 18.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99z"},[])]);
return h('svg',{"viewBox":c ? '3.5 5 17 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3.5 18.99 11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z"},[])]);
    }
}
</script>