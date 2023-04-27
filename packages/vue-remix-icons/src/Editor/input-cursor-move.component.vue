<script>
import { h } from 'vue';

export default {
    name: 'i-remix-input-cursor-move',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 21v-2h3V5H8V3h8v2h-3v14h3v2H8zM18.05 7.05 23 12l-4.95 4.95-1.414-1.414L20.172 12l-3.536-3.536L18.05 7.05zm-12.1 0 1.414 1.414L3.828 12l3.536 3.536L5.95 16.95 1 12l4.95-4.95z"},[])]);
    }
}
</script>