<script>
import { h } from 'vue';

export default {
    name: 'i-remix-tornado',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M2 3h20v2H2V3zm2 4h16v2H4V7zm4 4h14v2H8v-2zm2 4h8v2h-8v-2zm-2 4h6v2H8v-2z"},[])]);
    }
}
</script>