<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-right',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '4 4.22 16 15.56' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m16.172 11-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4 4 16 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 13H4v-2h8V4l8 8-8 8z"},[])]);
    }
}
</script>