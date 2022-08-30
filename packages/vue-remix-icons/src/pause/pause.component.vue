<script>
import { h } from 'vue';

export default {
    name: 'i-remix-pause',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '6 5 12 14' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M6 5h2v14H6V5zm10 0h2v14h-2V5z"},[])]);
    }
}
</script>