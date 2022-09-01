<script>
import { h } from 'vue';

export default {
    name: 'i-material-trending-flat',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '3 8.71 18.79 6.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21.65 11.65-2.79-2.79a.501.501 0 0 0-.86.35V11H4c-.55 0-1 .45-1 1s.45 1 1 1h14v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '3 8 19 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m22 12-4-4v3H3v2h15v3l4-4z"},[])]);
return h('svg',{"viewBox":c ? '3 8 19 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m22 12-4-4v3H3v2h15v3z"},[])]);
    }
}
</script>