<script>
import { h } from 'vue';

export default {
    name: 'i-material-desk',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 8h4v2h-4zm0 4h4v2h-4z","opacity":"0.3"},[]),h('path',{d:"M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 8h-4v-2h4v2zm0-4h-4V8h4v2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 7v10c0 .55.45 1 1 1s1-.45 1-1V8h10v9c0 .55.45 1 1 1s1-.45 1-1v-1h4v1c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1zm18 1v2h-4V8h4zm-4 6v-2h4v2h-4z"},[])]);
return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 2v2h-4V8h4zm-4 6v-2h4v2h-4z"},[])]);
    }
}
</script>