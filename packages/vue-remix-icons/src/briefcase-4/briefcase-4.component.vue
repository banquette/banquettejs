<script>
import { h } from 'vue';

export default {
    name: 'i-remix-briefcase-4',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 1 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm2 8H4v6h16v-6h-5v3H9v-3zm11-6H4v4h5V9h6v2h5V7zm-9 4v3h2v-3h-2zM9 3v2h6V3H9z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 1 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M9 13v3h6v-3h7v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7h7zm2-2h2v3h-2v-3zM7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v5h-7V9H9v2H2V6a1 1 0 0 1 1-1h4zm2-2v2h6V3H9z"},[])]);
    }
}
</script>