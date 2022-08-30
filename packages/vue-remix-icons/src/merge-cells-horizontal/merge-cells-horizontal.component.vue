<script>
import { h } from 'vue';

export default {
    name: 'i-remix-merge-cells-horizontal',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16zm-9 2H5v5.999h2V9l3 3-3 3v-2H5v6h6v-2h2v2h6v-6h-2v2l-3-3 3-3v1.999h2V5h-6v2h-2V5zm2 8v2h-2v-2h2zm0-4v2h-2V9h2z"},[])]);
    }
}
</script>