<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-wifi-2-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '0.36 3 23.28 18.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z","fill-opacity":"0.3"},[]),h('path',{d:"M4.79 12.52 12 21.5l7.21-8.99C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z"},[])]);
    }
}
</script>