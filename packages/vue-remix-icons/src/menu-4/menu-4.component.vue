<script>
import { h } from 'vue';

export default {
    name: 'i-remix-menu-4',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3 4 18 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"},[])]);
    }
}
</script>