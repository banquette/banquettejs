<script>
import { h } from 'vue';

export default {
    name: 'i-remix-text',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '5 4 14 17' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13 6v15h-2V6H5V4h14v2z"},[])]);
    }
}
</script>