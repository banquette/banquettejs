<script>
import { h } from 'vue';

export default {
    name: 'i-remix-trademark',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '0 6 23 12' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M10 6v2H6v10H4V8H0V6h10zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2V6z"},[])]);
    }
}
</script>