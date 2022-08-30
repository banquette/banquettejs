<script>
import { h } from 'vue';

export default {
    name: 'i-remix-bar-chart-horizontal',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 3 19 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 3v2H3V3h9zm4 16v2H3v-2h13zm6-8v2H3v-2h19z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 3 19 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 3v4H3V3h9zm4 14v4H3v-4h13zm6-7v4H3v-4h19z"},[])]);
    }
}
</script>