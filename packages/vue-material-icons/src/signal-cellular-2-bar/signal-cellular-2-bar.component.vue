<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-cellular-2-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M2 22h20V2L2 22z","fill-opacity":"0.3"},[]),h('path',{d:"M14 10 2 22h12V10z"},[])]);
    }
}
</script>