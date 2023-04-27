<script>
import { h } from 'vue';

export default {
    name: 'i-material-power',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8 13.65 3.5 3.52V19h1v-1.83l3.5-3.51V9H8z","opacity":"0.3"},[]),h('path',{d:"M16 7V3h-2v4h-4V3H8v4h-.01C6.89 7 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.5V9c0-1.1-.9-2-2-2zm0 6.66-3.5 3.51V19h-1v-1.83L8 13.65V9h8v4.66z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 7V3h-2v4h-4V3H8v4H6v7.5L9.5 18v3h5v-3l3.5-3.51V7h-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.01 7 16 4c0-.55-.45-1-1-1s-1 .45-1 1v3h-4V4c0-.55-.45-1-1-1s-1 .45-1 1v3h-.01C6.9 7 6 7.9 6 8.99v4.66c0 .53.21 1.04.58 1.41L9.5 18v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2l2.92-2.92c.37-.38.58-.89.58-1.42V8.99C18 7.89 17.11 7 16.01 7z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 9v4.66l-3.5 3.51V19h-1v-1.83L8 13.65V9h8m0-6h-2v4h-4V3H8v4h-.01C6.9 6.99 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.51V9c0-1.1-.9-2-2-2V3z"},[])]);
return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.01 7 16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"},[])]);
    }
}
</script>