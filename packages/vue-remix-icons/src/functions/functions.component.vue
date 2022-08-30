<script>
import { h } from 'vue';

export default {
    name: 'i-remix-functions',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '5 4 14 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m5 18 7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5v-2z"},[])]);
    }
}
</script>