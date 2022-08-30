<script>
import { h } from 'vue';

export default {
    name: 'i-remix-order-play',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '2 1.57 20.12 18.43' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 4V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H2V4h15zM2 18h20v2H2v-2zm0-7h20v2H2v-2z"},[])]);
    }
}
</script>