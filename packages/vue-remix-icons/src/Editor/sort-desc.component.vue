<script>
import { h } from 'vue';

export default {
    name: 'i-remix-sort-desc',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '3 4 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4v12h3l-4 5-4-5h3V4h2zm-8 14v2H3v-2h9zm2-7v2H3v-2h11zm0-7v2H3V4h11z"},[])]);
    }
}
</script>