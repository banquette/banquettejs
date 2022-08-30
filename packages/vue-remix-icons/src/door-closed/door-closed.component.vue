<script>
import { h } from 'vue';

export default {
    name: 'i-remix-door-closed',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M3 21v-2h2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h2v2H3zM17 5H7v14h10V5zm-2 6v2h-2v-2h2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M3 21v-2h2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h2v2H3zm12-10h-2v2h2v-2z"},[])]);
    }
}
</script>