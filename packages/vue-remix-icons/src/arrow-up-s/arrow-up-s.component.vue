<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-up-s',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '5.64 8 12.73 7.78' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 10.828-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '6 8 12 6' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 8 6 6H6z"},[])]);
    }
}
</script>