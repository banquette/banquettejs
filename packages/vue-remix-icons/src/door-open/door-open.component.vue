<script>
import { h } from 'vue';

export default {
    name: 'i-remix-door-open',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 2.12 20 18.88' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M2 21v-2h2V4.835a1 1 0 0 1 .821-.984l9.472-1.722a.599.599 0 0 1 .707.59v1.28L19 4a1 1 0 0 1 1 1v14h2v2h-4V6h-3v15H2zM13 4.396 6 5.67V19h7V4.396zM12 11v2h-2v-2h2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 2.12 20 18.88' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M2 21v-2h2V4.835a1 1 0 0 1 .821-.984l9.472-1.722a.599.599 0 0 1 .707.59v1.28L19 4a1 1 0 0 1 1 1v14h2v2h-4V6h-3v15H2zm10-10h-2v2h2v-2z"},[])]);
    }
}
</script>