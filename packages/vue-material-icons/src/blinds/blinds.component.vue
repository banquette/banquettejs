<script>
import { h } from 'vue';

export default {
    name: 'i-material-blinds',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M6 9h8v2H6zm0-4h8v2H6zm10 4h2v2h-2zm0-4h2v2h-2z"},[]),h('path',{d:"M20 19V3H4v16H2v2h20v-2h-2zM6 5h8v2H6V5zm0 4h8v2H6V9zm12 10H6v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6zm0-8h-2V9h2v2zm0-4h-2V5h2v2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM16 9h2v2h-2V9zm-2 2H6V9h8v2zm4-4h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6H6z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V3H4v16H2v2h20v-2h-2zM16 9h2v2h-2V9zm-2 2H6V9h8v2zm4-4h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6H6z"},[])]);
    }
}
</script>