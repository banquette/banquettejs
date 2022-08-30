<script>
import { h } from 'vue';

export default {
    name: 'i-material-home-filled',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '4 3 16 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 3 4 9v12h5v-7h6v7h5V9z"},[])]);
    }
}
</script>