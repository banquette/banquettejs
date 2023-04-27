<script>
import { h } from 'vue';

export default {
    name: 'i-remix-settings',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2.5 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},[])]);
return h('svg',{"viewBox":c ? '2.5 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"},[])]);
    }
}
</script>