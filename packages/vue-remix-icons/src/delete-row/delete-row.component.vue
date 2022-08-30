<script>
import { h } from 'vue';

export default {
    name: 'i-remix-delete-row',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3 5 18 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1 5 5 0 1 1-8 0H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16zm-7 10v2h6v-2h-6zm6-8H5v4h14V7z"},[])]);
    }
}
</script>