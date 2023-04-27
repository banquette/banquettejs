<script>
import { h } from 'vue';

export default {
    name: 'i-remix-h-1',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '2 4 19 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z"},[])]);
    }
}
</script>