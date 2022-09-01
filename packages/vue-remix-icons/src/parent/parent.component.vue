<script>
import { h } from 'vue';

export default {
    name: 'i-remix-parent',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10.5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm2.5 6v-.5a2.5 2.5 0 1 0-5 0v.5h-2v-.5a4.5 4.5 0 1 1 9 0v.5h-2zm-10 0v-4a3 3 0 0 0-6 0v4H2v-4a5 5 0 0 1 10 0v4h-2z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10.5 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1a4.5 4.5 0 0 1 4.5 4.5v.5h-9v-.5a4.5 4.5 0 0 1 4.5-4.5zM7 12a5 5 0 0 1 5 5v4H2v-4a5 5 0 0 1 5-5z"},[])]);
    }
}
</script>