<script>
import { h } from 'vue';

export default {
    name: 'i-material-horizontal-rule',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '4 11 16 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z","fill-rule":"evenodd"},[])]);
return h('svg',{"viewBox":c ? '4 11 16 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-rule":"evenodd",d:"M4 11h16v2H4z"},[])]);
    }
}
</script>