<script>
import { h } from 'vue';

export default {
    name: 'i-remix-font-size-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '2 4 19 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 6v15H8V6H2V4h14v2h-6zm8 8v7h-2v-7h-3v-2h8v2h-3z"},[])]);
    }
}
</script>