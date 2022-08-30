<script>
import { h } from 'vue';

export default {
    name: 'i-remix-insert-column-left',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '1 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm-1 2h-4v14h4V5zM6 7a5 5 0 1 1-.001 10.001A5 5 0 0 1 6 7zm1 2H5v1.999L3 11v2l2-.001V15h2v-2.001L9 13v-2l-2-.001V9z"},[])]);
    }
}
</script>