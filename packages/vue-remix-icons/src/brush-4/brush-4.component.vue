<script>
import { h } from 'vue';

export default {
    name: 'i-remix-brush-4',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M9 5v6.273H7V5H5v9h14V5H9zm11 11H4v2h16v-2zM3 14V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5h1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 16H4v2h16v-2zM3 14V4a1 1 0 0 1 1-1h3v8.273h2V3h11a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5h1z"},[])]);
    }
}
</script>