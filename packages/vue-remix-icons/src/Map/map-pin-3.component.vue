<script>
import { h } from 'vue';

export default {
    name: 'i-remix-map-pin-3',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3.01 2 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 19.945A9.001 9.001 0 0 1 12 2a9 9 0 0 1 1 17.945V24h-2v-4.055zM12 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"},[])]);
return h('svg',{"viewBox":c ? '3.01 2 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 19.945A9.001 9.001 0 0 1 12 2a9 9 0 0 1 1 17.945V24h-2v-4.055z"},[])]);
    }
}
</script>