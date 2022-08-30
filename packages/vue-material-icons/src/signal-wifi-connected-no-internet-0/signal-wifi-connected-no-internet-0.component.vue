<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-wifi-connected-no-internet-0',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '0 4 24 17' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21v-9h8.99L24 8.98z","fill-opacity":"0.3"},[]),h('path',{d:"m19.59 14-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z"},[])]);
    }
}
</script>