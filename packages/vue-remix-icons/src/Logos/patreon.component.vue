<script>
import { h } from 'vue';

export default {
    name: 'i-remix-patreon',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM2 2h5v20H2V2zm2 2v16h1V4H4z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM2 2h4v20H2V2z"},[])]);
    }
}
</script>