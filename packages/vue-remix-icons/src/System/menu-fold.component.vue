<script>
import { h } from 'vue';

export default {
    name: 'i-remix-menu-fold',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3.9 19 16.1' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 18v2H3v-2h18zM6.596 3.904 8.01 5.318 4.828 8.5l3.182 3.182-1.414 1.414L2 8.5l4.596-4.596zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z"},[])]);
return h('svg',{"viewBox":c ? '2 3.55 19 16.45' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 18v2H3v-2h18zM6.95 3.55v9.9L2 8.5l4.95-4.95zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z"},[])]);
    }
}
</script>