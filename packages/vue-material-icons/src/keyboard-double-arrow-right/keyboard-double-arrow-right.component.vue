<script>
import { h } from 'vue';

export default {
    name: 'i-material-keyboard-double-arrow-right',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '5.41 6.42 13.18 11.17' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12 5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0z"},[]),h('path',{d:"M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '5 6 14 12' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"},[]),h('path',{d:"m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"},[])]);
    }
}
</script>