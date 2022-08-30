<script>
import { h } from 'vue';

export default {
    name: 'i-remix-add',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '5 5 14 14' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"},[])]);
    }
}
</script>