<script>
import { h } from 'vue';

export default {
    name: 'i-remix-celsius',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '1 3 21 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M4.5 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM22 10h-2a4 4 0 1 0-8 0v5a4 4 0 1 0 8 0h2a6 6 0 1 1-12 0v-5a6 6 0 1 1 12 0z"},[])]);
    }
}
</script>