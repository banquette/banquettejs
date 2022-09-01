<script>
import { h } from 'vue';

export default {
    name: 'i-material-arrow-downward',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '4.41 4 15.18 15.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 1 0-1.41-1.41L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z"},[])]);
return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"},[])]);
    }
}
</script>