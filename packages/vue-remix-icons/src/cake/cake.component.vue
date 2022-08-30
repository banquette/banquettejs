<script>
import { h } from 'vue';

export default {
    name: 'i-remix-cake',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '1 0.4 22 21.6' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7h2zm6 6H5v7h14v-7zM13.83.402A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098l1.732-1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '1 0.4 22 21.6' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7h2zm.83-6.598A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098l1.732-1z"},[])]);
    }
}
</script>