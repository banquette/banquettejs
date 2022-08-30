<script>
import { h } from 'vue';

export default {
    name: 'i-remix-subtract',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '5 11 14 2' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M5 11h14v2H5z"},[])]);
    }
}
</script>