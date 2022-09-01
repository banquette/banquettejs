<script>
import { h } from 'vue';

export default {
    name: 'i-remix-luggage-deposit',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 3a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v12h2v2H1v-2h2V7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1h6zM8 8H5v11h3V8zm6 0h-4v11h4V8zm5 0h-3v11h3V8zm-5-3h-4v1h4V5z"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 3a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v12h2v2H1v-2h2V7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1h6zm-5 5H8v11h2V8zm6 0h-2v11h2V8zm-2-3h-4v1h4V5z"},[])]);
    }
}
</script>