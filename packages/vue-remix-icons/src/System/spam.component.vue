<script>
import { h } from 'vue';

export default {
    name: 'i-remix-spam',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2.5 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.5 2.5 23 12l-5.5 9.5h-11L1 12l5.5-9.5h11zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5-4.342-7.5zM11 15h2v2h-2v-2zm0-8h2v6h-2V7z"},[])]);
return h('svg',{"viewBox":c ? '1 2.5 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.5 2.5 23 12l-5.5 9.5h-11L1 12l5.5-9.5h11zM11 15v2h2v-2h-2zm0-8v6h2V7h-2z"},[])]);
    }
}
</script>