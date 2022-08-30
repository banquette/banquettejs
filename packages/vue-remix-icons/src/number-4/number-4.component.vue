<script>
import { h } from 'vue';

export default {
    name: 'i-remix-number-4',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '4 1.5 15 20.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M16 1.5V16h3v2h-3v4h-2v-4H4v-1.102L14 1.5h2zM14 16V5.171L6.968 16H14z"},[])]);
    }
}
</script>