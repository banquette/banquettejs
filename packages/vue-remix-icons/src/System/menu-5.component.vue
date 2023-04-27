<script>
import { h } from 'vue';

export default {
    name: 'i-remix-menu-5',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"},[])]);
    }
}
</script>