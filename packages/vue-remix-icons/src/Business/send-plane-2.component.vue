<script>
import { h } from 'vue';

export default {
    name: 'i-remix-send-plane-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1.35 19.46 21.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3.741 1.408 18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V1.846a.5.5 0 0 1 .741-.438zM5 13v6.617L18.85 12 5 4.383V11h5v2H5z"},[])]);
return h('svg',{"viewBox":c ? '3 1.35 19.46 21.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"},[])]);
    }
}
</script>