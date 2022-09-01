<script>
import { h } from 'vue';

export default {
    name: 'i-remix-map-pin-4',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '4.01 2 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938V21h-2v-3.062zM12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-7 6h14v2H5v-2z"},[])]);
return h('svg',{"viewBox":c ? '4.01 2 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938V21h-2v-3.062zM5 22h14v2H5v-2z"},[])]);
    }
}
</script>