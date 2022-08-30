<script>
import { h } from 'vue';

export default {
    name: 'i-material-snowing',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '5 5 14 14' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M6 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM5 6c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm12 8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zM8 18c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"},[])]);
    }
}
</script>