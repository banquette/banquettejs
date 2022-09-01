<script>
import { h } from 'vue';

export default {
    name: 'i-material-dehaze',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1zm0-5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1zm0-5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"},[])]);
return h('svg',{"viewBox":c ? '2 5.5 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"},[])]);
    }
}
</script>