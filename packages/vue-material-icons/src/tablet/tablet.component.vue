<script>
import { h } from 'vue';

export default {
    name: 'i-material-tablet',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 4 22 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 6h14v12H5z","opacity":"0.3"},[]),h('path',{d:"M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 4 22 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z"},[])]);
return h('svg',{"viewBox":c ? '1 4 22 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"},[])]);
    }
}
</script>