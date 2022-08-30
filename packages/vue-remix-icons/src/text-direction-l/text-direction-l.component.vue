<script>
import { h } from 'vue';

export default {
    name: 'i-remix-text-direction-l',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '5 3 16 18.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5h-2zM9 5a2 2 0 1 0 0 4V5zm8 12v-2.5l4 3.5-4 3.5V19H5v-2h12z"},[])]);
    }
}
</script>