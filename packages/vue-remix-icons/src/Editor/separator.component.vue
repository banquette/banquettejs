<script>
import { h } from 'vue';

export default {
    name: 'i-remix-separator',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '2 11 20 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z"},[])]);
    }
}
</script>