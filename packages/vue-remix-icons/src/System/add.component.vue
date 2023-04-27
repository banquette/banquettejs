<script>
import { h } from 'vue';

export default {
    name: 'i-remix-add',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '5 5 14 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"},[])]);
    }
}
</script>