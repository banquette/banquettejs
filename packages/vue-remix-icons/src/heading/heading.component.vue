<script>
import { h } from 'vue';

export default {
    name: 'i-remix-heading',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '5 4 14 17' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"},[])]);
    }
}
</script>