<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-down-s',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '5.64 8.22 12.73 7.78' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 13.172 4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '6 10 12 6' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 16-6-6h12z"},[])]);
    }
}
</script>