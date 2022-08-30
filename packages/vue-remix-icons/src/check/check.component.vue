<script>
import { h } from 'vue';

export default {
    name: 'i-remix-check',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3.64 5.98 16.97 12.02' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"},[])]);
    }
}
</script>