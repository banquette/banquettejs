<script>
import { h } from 'vue';

export default {
    name: 'i-remix-bar-chart',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M3 12h2v9H3v-9zm16-4h2v13h-2V8zm-8-6h2v19h-2V2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M3 12h4v9H3v-9zm14-4h4v13h-4V8zm-7-6h4v19h-4V2z"},[])]);
    }
}
</script>