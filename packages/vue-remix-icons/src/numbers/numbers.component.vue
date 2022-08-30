<script>
import { h } from 'vue';

export default {
    name: 'i-remix-numbers',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 2 19 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M9 18H4v-8h5v8zm-2-2v-4H6v4h1zm6 0V8h-1v8h1zm2 2h-5V6h5v12zm4-2V4h-1v12h1zm2 2h-5V2h5v16zm1 4H3v-2h19v2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 2 19 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M9 18H4v-8h5v8zm6 0h-5V6h5v12zm6 0h-5V2h5v16zm1 4H3v-2h19v2z"},[])]);
    }
}
</script>