<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-cellular-nodata',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '3.41 3.41 18.59 18.59' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M22 13h-7c-1.1 0-2 .9-2 2v7H4.41c-.89 0-1.34-1.08-.71-1.71L20.29 3.71c.63-.63 1.71-.19 1.71.7V13zm-1.7 1.71a.996.996 0 0 0-1.41 0L17.5 16.1l-1.39-1.39a.996.996 0 1 0-1.41 1.41l1.39 1.39-1.39 1.39a.996.996 0 1 0 1.41 1.41l1.39-1.38 1.39 1.38a.996.996 0 1 0 1.41-1.41l-1.38-1.39 1.38-1.39a.996.996 0 0 0 0-1.41z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M22 13h-9v9H2L22 2v11zm-1 2.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z"},[])]);
    }
}
</script>