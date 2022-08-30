<script>
import { h } from 'vue';

export default {
    name: 'i-material-leaderboard',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M10 5h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z","opacity":"0.3"},[]),h('path',{d:"M16 11V3H8v6H2v12h20V11h-6zm-6-6h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M6.5 21H3c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1zm7.25-18h-3.5c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h3.5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM21 11h-3.5c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1H21c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M16 11V3H8v6H2v12h20V11h-6zm-6-6h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"},[])]);
    }
}
</script>