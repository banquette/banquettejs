<script>
import { h } from 'vue';

export default {
    name: 'i-remix-merge-cells-vertical',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16zm-2-9V5h-5.999v2H15l-3 3-3-3h2V5H5v6h2v2H5v6h6v-2H9l3-3 3 3h-1.999v2H19v-6h-2v-2h2zm-8 2H9v-2h2v2zm4 0h-2v-2h2v2z"},[])]);
    }
}
</script>