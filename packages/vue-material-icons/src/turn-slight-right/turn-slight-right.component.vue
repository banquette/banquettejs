<script>
import { h } from 'vue';

export default {
    name: 'i-material-turn-slight-right',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '9 4 9 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-8.41L14.59 6z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '9 4 9 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12.34 5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1v3.66c0 .55-.45 1-1 1s-1-.45-1-1V7.41l-5 5V19c0 .55-.45 1-1 1s-1-.45-1-1v-6.58c0-.53.21-1.04.59-1.41l5-5h-1.24A1.02 1.02 0 0 1 12.34 5z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '9 4 9 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-7.58c0-.53.21-1.04.59-1.41l5-5h-2.25z"},[])]);
    }
}
</script>