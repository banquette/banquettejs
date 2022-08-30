<script>
import { h } from 'vue';

export default {
    name: 'i-remix-pulse',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '1 2.46 22 19.08' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m9 7.539 6 14L18.659 13H23v-2h-5.659L15 16.461l-6-14L5.341 11H1v2h5.659z"},[])]);
    }
}
</script>