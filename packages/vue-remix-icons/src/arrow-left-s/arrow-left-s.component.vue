<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-left-s',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '8 5.64 7.78 12.73' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '8 6 6 12' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m8 12 6-6v12z"},[])]);
    }
}
</script>