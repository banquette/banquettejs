<script>
import { h } from 'vue';

export default {
    name: 'i-material-stop',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 8h8v8H8z","opacity":"0.3"},[]),h('path',{d:"M6 18h12V6H6v12zM8 8h8v8H8V8z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 6h12v12H6V6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 8v8H8V8h8m2-2H6v12h12V6z"},[])]);
return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 6h12v12H6z"},[])]);
    }
}
</script>