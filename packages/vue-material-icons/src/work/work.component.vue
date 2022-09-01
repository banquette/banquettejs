<script>
import { h } from 'vue';

export default {
    name: 'i-material-work',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 8h16v11H4z","opacity":"0.3"},[]),h('path',{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-8 0h-4V4h4v2z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"},[])]);
    }
}
</script>