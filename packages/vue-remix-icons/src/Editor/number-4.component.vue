<script>
import { h } from 'vue';

export default {
    name: 'i-remix-number-4',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '4 1.5 15 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 1.5V16h3v2h-3v4h-2v-4H4v-1.102L14 1.5h2zM14 16V5.171L6.968 16H14z"},[])]);
    }
}
</script>