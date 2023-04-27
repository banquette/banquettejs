<script>
import { h } from 'vue';

export default {
    name: 'i-material-keyboard-return',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '2.42 6.42 18.58 11.17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 8v3H5.83l2.88-2.88A.996.996 0 1 0 7.3 6.71L2.71 11.3a.996.996 0 0 0 0 1.41L7.3 17.3a.996.996 0 1 0 1.41-1.41L5.83 13H20c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '2 6 19 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"},[])]);
return h('svg',{"viewBox":c ? '2 6 19 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"},[])]);
    }
}
</script>