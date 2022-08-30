<script>
import { h } from 'vue';

export default {
    name: 'i-remix-test-tube',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 2v2h-1v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V4H7V2h10zm-3 8h-4v8a2 2 0 1 0 4 0v-8zm-1 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3-8h-4v4h4V4z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 2v2h-1v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V4H7V2h10zm-4 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3-8h-4v4h4V4z"},[])]);
    }
}
</script>