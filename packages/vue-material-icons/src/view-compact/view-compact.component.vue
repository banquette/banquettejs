<script>
import { h } from 'vue';

export default {
    name: 'i-material-view-compact',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 5 19 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 13h9v4h-9zm-6 0h4v4H5zm0-6h15v4H5z","opacity":"0.3"},[]),h('path',{d:"M3 5v14h19V5H3zm6 12H5v-4h4v4zm11 0h-9v-4h9v4zm0-6H5V7h15v4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 5 19 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 19h4v-7H3v5c0 1.1.9 2 2 2zm5 0h10c1.1 0 2-.9 2-2v-5H10v7zM3 7v4h19V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 5 19 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 5v14h19V5H3zm2 2h15v4H5V7zm0 10v-4h4v4H5zm6 0v-4h9v4h-9z"},[])]);
return h('svg',{"viewBox":c ? '3 5 19 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"},[])]);
    }
}
</script>