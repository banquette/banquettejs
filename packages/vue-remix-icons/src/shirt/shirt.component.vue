<script>
import { h } from 'vue';

export default {
    name: 'i-remix-shirt',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13 20h6v-4h-4v-2h4V6h-2v5l-4-1.6V20zm-2 0V9.4L7 11V6H5v14h6zM7 4V3h10v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm5 4 3.5-3h-7L12 8z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M7 4v7l5-2.5 5 2.5V4h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm5 4L7.5 3h9L12 8zm1 3.236-1-.5-1 .5V20h2v-8.764zM15 14v2h4v-2h-4z"},[])]);
    }
}
</script>