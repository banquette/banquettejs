<script>
import { h } from 'vue';

export default {
    name: 'i-remix-loader-5',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '12 3 9 9' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z"},[])]);
    }
}
</script>