<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-drop-right',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '9.34 7.76 5.66 8.49' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12.172 12 9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '10 8 4 8' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m14 12-4 4V8z"},[])]);
    }
}
</script>