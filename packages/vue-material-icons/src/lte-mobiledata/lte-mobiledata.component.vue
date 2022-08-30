<script>
import { h } from 'vue';

export default {
    name: 'i-material-lte-mobiledata',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '4 8 17 8' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M6 14h2c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v5zm4-4h1v5c0 .55.45 1 1 1s1-.45 1-1v-5h1c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm11-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-2v-1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-1h2c.55 0 1-.45 1-1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4 8 17 8' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M6 14h3v2H4V8h2v6zm3-4h2v6h2v-6h2V8H9v2zm12 0V8h-5v8h5v-2h-3v-1h3v-2h-3v-1h3z"},[])]);
    }
}
</script>