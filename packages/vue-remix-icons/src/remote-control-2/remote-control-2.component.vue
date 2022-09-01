<script>
import { h } from 'vue';

export default {
    name: 'i-remix-remote-control-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-1 2H7v16h10V4zm-2 11v2h-2v-2h2zm-4 0v2H9v-2h2zm2-9v2h2v2h-2.001L13 12h-2l-.001-2H9V8h2V6h2z"},[])]);
return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-3 13h-2v2h2v-2zm-4 0H9v2h2v-2zm2-9h-2v2H9v2h1.999L11 12h2l-.001-2H15V8h-2V6z"},[])]);
    }
}
</script>