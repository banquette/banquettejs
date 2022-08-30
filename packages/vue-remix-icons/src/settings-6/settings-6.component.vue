<script>
import { h } from 'vue';

export default {
    name: 'i-remix-settings-6',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '1 2.47 22 19.05' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17.5 2.474 23 12l-5.5 9.526h-11L1 12l5.5-9.526h11zm-1.155 2h-8.69L3.309 12l4.346 7.526h8.69L20.691 12l-4.346-7.526zM8.634 8.17l1.732-1 5 8.66-1.732 1-5-8.66z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '1 2.47 22 19.05' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17.5 2.474 23 12l-5.5 9.526h-11L1 12l5.5-9.526h11zM8.634 8.17l5 8.66 1.732-1-5-8.66-1.732 1z"},[])]);
    }
}
</script>