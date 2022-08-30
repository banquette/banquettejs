<script>
import { h } from 'vue';

export default {
    name: 'i-remix-menu-5',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3 4 18 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"},[])]);
    }
}
</script>