<script>
import { h } from 'vue';

export default {
    name: 'i-remix-wubi-input',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M3 21v-2h3.662l1.234-7H5v-2h3.249l.881-5H4V3h16v2h-8.839l-.882 5H18v9h3v2H3zm13-9H9.927l-1.235 7H16v-7z"},[])]);
    }
}
</script>