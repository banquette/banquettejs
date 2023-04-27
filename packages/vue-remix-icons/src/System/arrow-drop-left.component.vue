<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-drop-left',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '9 7.76 5.66 8.49' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m11.828 12 2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"},[])]);
return h('svg',{"viewBox":c ? '9 8 4 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m9 12 4-4v8z"},[])]);
    }
}
</script>