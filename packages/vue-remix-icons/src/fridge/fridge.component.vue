<script>
import { h } from 'vue';

export default {
    name: 'i-remix-fridge',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '4 1 16 22' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19 1a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h14zm-1 11H6v9h12v-9zm-8 2v4H8v-4h2zm8-11H6v7h12V3zm-8 2v3H8V5h2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4 1 16 22' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 12v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V12h16zM9 14H7v5h2v-5zM19 1a1 1 0 0 1 1 1v8H4V2a1 1 0 0 1 1-1h14zM9 4H7v4h2V4z"},[])]);
    }
}
</script>