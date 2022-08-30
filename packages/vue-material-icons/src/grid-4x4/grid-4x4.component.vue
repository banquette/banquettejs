<script>
import { h } from 'vue';

export default {
    name: 'i-material-grid-4x4',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M22 6c0-.55-.45-1-1-1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-4V3c0-.55-.45-1-1-1s-1 .45-1 1v2H7V3c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V7h2c.55 0 1-.45 1-1zM7 7h4v4H7V7zm0 10v-4h4v4H7zm10 0h-4v-4h4v4zm0-6h-4V7h4v4z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M22 7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7h3zM7 7h4v4H7V7zm0 10v-4h4v4H7zm10 0h-4v-4h4v4zm0-6h-4V7h4v4z"},[])]);
    }
}
</script>