<script>
import { h } from 'vue';

export default {
    name: 'i-material-segment',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 18h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm7 6h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1z"},[])]);
return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z"},[])]);
    }
}
</script>