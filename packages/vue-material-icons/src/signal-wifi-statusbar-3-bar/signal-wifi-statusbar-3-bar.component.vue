<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-wifi-statusbar-3-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '0 4 24 17' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M21.18 11.8 24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98l2.82 2.82C5.17 9.45 8.41 8 12 8s6.83 1.45 9.18 3.8z","fill-opacity":"0.3"},[]),h('path',{d:"M21.18 11.8C18.83 9.45 15.59 8 12 8s-6.83 1.45-9.18 3.8L12 21l9.18-9.2z"},[])]);
    }
}
</script>