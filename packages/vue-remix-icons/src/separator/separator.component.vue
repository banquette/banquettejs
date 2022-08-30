<script>
import { h } from 'vue';

export default {
    name: 'i-remix-separator',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '2 11 20 2' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z"},[])]);
    }
}
</script>