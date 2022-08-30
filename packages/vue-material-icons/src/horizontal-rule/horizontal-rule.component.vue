<script>
import { h } from 'vue';

export default {
    name: 'i-material-horizontal-rule',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '4 11 16 2' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z","fill-rule":"evenodd"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4 11 16 2' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{"fill-rule":"evenodd",d:"M4 11h16v2H4z"},[])]);
    }
}
</script>