<script>
import { h } from 'vue';

export default {
    name: 'i-material-bookmark-border',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '5 3 14 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19 3H5v18l7-3 7 3V3zm-2 15-5-2.18L7 18V5h10v13z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '5 3 14 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"},[])]);
if (this.version === 'outlined' || this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '5 3 14 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '5 3 14 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z"},[])]);
    }
}
</script>