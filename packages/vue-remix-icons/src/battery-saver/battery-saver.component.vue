<script>
import { h } from 'vue';

export default {
    name: 'i-remix-battery-saver',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h4zm-1 2h-2v2H7v14h10V6h-4V4zm0 5v3h3v2h-3v3h-2v-3H8v-2h3V9h2z"},[])]);
return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h4zm-1 7h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"},[])]);
    }
}
</script>