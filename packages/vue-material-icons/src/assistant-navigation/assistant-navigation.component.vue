<script>
import { h } from 'vue';

export default {
    name: 'i-material-assistant-navigation',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '1 1 22 22' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm3.57 16L12 15.42 8.43 17l-.37-.37L12 7l3.95 9.63-.38.37z"},[])]);
    }
}
</script>