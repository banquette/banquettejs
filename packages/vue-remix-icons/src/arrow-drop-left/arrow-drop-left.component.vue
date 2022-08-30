<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-drop-left',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '9 7.76 5.66 8.49' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m11.828 12 2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '9 8 4 8' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m9 12 4-4v8z"},[])]);
    }
}
</script>