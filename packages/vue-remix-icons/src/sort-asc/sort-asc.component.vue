<script>
import { h } from 'vue';

export default {
    name: 'i-remix-sort-asc',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '3 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19 3 4 5h-3v12h-2V8h-3l4-5zm-5 15v2H3v-2h11zm0-7v2H3v-2h11zm-2-7v2H3V4h9z"},[])]);
    }
}
</script>