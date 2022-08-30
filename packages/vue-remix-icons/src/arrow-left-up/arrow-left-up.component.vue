<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-left-up',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '6 6 12.02 12.02' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m9.414 8 8.607 8.607-1.414 1.414L8 9.414V17H6V6h11v2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '6 6 12.02 12.02' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12.36 10.947 5.658 5.656-1.415 1.415-5.656-5.657-4.95 4.95V5.997H17.31z"},[])]);
    }
}
</script>