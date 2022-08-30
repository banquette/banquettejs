<script>
import { h } from 'vue';

export default {
    name: 'i-remix-voice-recognition',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8-9v12h-2V6h2zM9 9v6H7V9h2zm8 0v6h-2V9h2zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M21 3v18H3V3h18zm-8 3h-2v12h2V6zM9 9H7v6h2V9zm8 0h-2v6h2V9z"},[])]);
    }
}
</script>