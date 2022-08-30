<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-wifi-statusbar-1-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '0 4 24 17' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17.65 15.34 24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98l6.35 6.36C7.8 13.89 9.79 13 12 13s4.2.89 5.65 2.34z","fill-opacity":"0.3"},[]),h('path',{d:"M17.65 15.34C16.2 13.89 14.21 13 12 13s-4.2.89-5.65 2.34L12 21l5.65-5.66z"},[])]);
    }
}
</script>