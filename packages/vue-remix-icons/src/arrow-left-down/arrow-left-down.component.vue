<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-left-down',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 4.98 12.02 12.02' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m9 13.59 8.607-8.607 1.414 1.414-8.607 8.607H18v2H7v-11h2v7.585z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '6 5.98 12.02 12.02' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12.36 13.05 17.31 18H5.998V6.688l4.95 4.95 5.656-5.657 1.415 1.414z"},[])]);
    }
}
</script>