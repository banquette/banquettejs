<script>
import { h } from 'vue';

export default {
    name: 'i-material-developer-mode',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 1 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 5h10v2h2V1.01L5 1v6h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17 6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v6h14v-6h-2v2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4.41 1 15.18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 5h10v1c0 .55.45 1 1 1s1-.45 1-1V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1V5zm9.12 10.88 3.17-3.17a.996.996 0 0 0 0-1.41l-3.17-3.17c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41L17.17 12l-2.47 2.47a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42 0zm-6.83-1.42L6.83 12l2.46-2.46a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0L4.7 11.3a.996.996 0 0 0 0 1.41l3.17 3.17c.39.39 1.03.39 1.42 0 .4-.39.39-1.03 0-1.42zM17 19H7v-1c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v1z"},[])]);
return h('svg',{"viewBox":c ? '4 1 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17 6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"},[])]);
    }
}
</script>