<script>
import { h } from 'vue';

export default {
    name: 'i-remix-terminal',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '2.52 4.93 18.48 16.07' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m11 12-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93 11 12zm0 7h10v2H11v-2z"},[])]);
    }
}
</script>