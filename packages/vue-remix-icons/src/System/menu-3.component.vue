<script>
import { h } from 'vue';

export default {
    name: 'i-remix-menu-3',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"},[])]);
    }
}
</script>