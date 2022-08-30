<script>
import { h } from 'vue';

export default {
    name: 'i-remix-hotspot',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '5 1 16 21' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M11 2v2H7v16h10v-9h2v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5zm2 5a2 2 0 0 1 2 2h-2V7zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3V4zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6V1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4 1 17 21' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M11 2v9h7v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6zm2 5a2 2 0 0 1 2 2h-2V7zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3V4zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6V1z"},[])]);
    }
}
</script>