<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-cellular-connected-no-internet-3-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M22 8V2L2 22h16V8h4z","fill-opacity":"0.3"},[]),h('path',{d:"M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z"},[])]);
    }
}
</script>