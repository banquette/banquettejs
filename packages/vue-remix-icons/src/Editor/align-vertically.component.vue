<script>
import { h } from 'vue';

export default {
    name: 'i-remix-align-vertically',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 11h18v2H3v-2zm15 7v3h-2v-3h-3l4-4 4 4h-3zM8 18v3H6v-3H3l4-4 4 4H8zM18 6h3l-4 4-4-4h3V3h2v3zM8 6h3l-4 4-4-4h3V3h2v3z"},[])]);
    }
}
</script>