<script>
import { h } from 'vue';

export default {
    name: 'i-remix-building-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '1 1.21 22 19.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2h2zm2 0h7V3.855L5 6.401V19zm14 0v-8.558l-5-1.667V19h5z"},[])]);
return h('svg',{"viewBox":c ? '1 1.27 22 19.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 19h2V6l6.394 2.74a1 1 0 0 1 .606.92V19h2v2H1v-2h2V5.65a1 1 0 0 1 .594-.914l7.703-3.424A.5.5 0 0 1 12 1.77V19z"},[])]);
    }
}
</script>