<script>
import { h } from 'vue';

export default {
    name: 'i-material-woman-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13.41 7h-2.82L7 16h3.5v6h3v-6H17z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '7.47 2 9.06 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13.94 8.31a2.078 2.078 0 0 0-2.48-1.24c-.66.17-1.18.7-1.43 1.34l-2.48 6.22c-.27.66.22 1.37.92 1.37h2.03v5c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-5h2.03c.71 0 1.19-.71.93-1.37l-2.52-6.32z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13.94 8.31C13.62 7.52 12.85 7 12 7s-1.62.52-1.94 1.31L7 16h3.5v6h3v-6H17l-3.06-7.69z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
    }
}
</script>