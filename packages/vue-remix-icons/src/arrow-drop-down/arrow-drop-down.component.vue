<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-drop-down',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '7.76 9.34 8.49 5.66' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 15-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '8 10 8 4' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 14-4-4h8z"},[])]);
    }
}
</script>