<script>
import { h } from 'vue';

export default {
    name: 'i-remix-align-top',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M3 3h18v2H3V3zm5 8v10H6V11H3l4-4 4 4H8zm10 0v10h-2V11h-3l4-4 4 4h-3z"},[])]);
    }
}
</script>