<script>
import { h } from 'vue';

export default {
    name: 'i-remix-feedback',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385 5.763 17H20V5H4v13.385zM11 13h2v2h-2v-2zm0-6h2v5h-2V7z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 13v2h2v-2h-2zm0-6v5h2V7h-2z"},[])]);
    }
}
</script>