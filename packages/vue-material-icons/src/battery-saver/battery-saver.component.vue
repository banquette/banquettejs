<script>
import { h } from 'vue';

export default {
    name: 'i-material-battery-saver',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 4h-3V2h-4v2H7v18h10V4zm-2 10h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M16 4h-2V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-2 10h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M16 4h-2V2h-4v2H8c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"},[])]);
    }
}
</script>