<script>
import { h } from 'vue';

export default {
    name: 'i-remix-map-pin-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 21.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 23.728-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 21.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.364 17.364 12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},[])]);
    }
}
</script>