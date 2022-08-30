<script>
import { h } from 'vue';

export default {
    name: 'i-remix-number-7',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '6 2 13 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19 2v1.5L10.763 22H8.574l8.013-18H6V2z"},[])]);
    }
}
</script>