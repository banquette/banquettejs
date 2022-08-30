<script>
import { h } from 'vue';

export default {
    name: 'i-material-north',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '5.42 2.41 13.16 19.59' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M5.71 9.7c.39.39 1.02.39 1.41 0L11 5.83V21c0 .55.45 1 1 1s1-.45 1-1V5.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 2.7a.996.996 0 0 0-1.41 0L5.71 8.29a.996.996 0 0 0 0 1.41z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '5 2 14 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z"},[])]);
    }
}
</script>