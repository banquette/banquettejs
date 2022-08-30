<script>
import { h } from 'vue';

export default {
    name: 'i-remix-italic',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '7 4 10 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z"},[])]);
    }
}
</script>