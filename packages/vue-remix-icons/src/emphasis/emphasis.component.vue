<script>
import { h } from 'vue';

export default {
    name: 'i-remix-emphasis',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '5 3 14 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM18 3v2H8v4h9v2H8v4h10v2H6V3h12z"},[])]);
    }
}
</script>