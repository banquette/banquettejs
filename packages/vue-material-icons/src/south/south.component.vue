<script>
import { h } from 'vue';

export default {
    name: 'i-material-south',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '5.42 2 13.17 19.59' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M18.3 14.29a.996.996 0 0 0-1.41 0L13 18.17V3c0-.55-.45-1-1-1s-1 .45-1 1v15.18L7.12 14.3a.996.996 0 1 0-1.41 1.41l5.59 5.59c.39.39 1.02.39 1.41 0l5.59-5.59c.38-.39.38-1.03 0-1.42z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '5 2 14 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7z"},[])]);
    }
}
</script>