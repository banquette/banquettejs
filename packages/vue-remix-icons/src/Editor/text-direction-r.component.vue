<script>
import { h } from 'vue';

export default {
    name: 'i-remix-text-direction-r',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '3 3 16 18.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5h-2zM9 5a2 2 0 1 0 0 4V5zM7 17h12v2H7v2.5L3 18l4-3.5V17z"},[])]);
    }
}
</script>