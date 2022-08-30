<script>
import { h } from 'vue';

export default {
    name: 'i-remix-menu-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3 4 18 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"},[])]);
    }
}
</script>