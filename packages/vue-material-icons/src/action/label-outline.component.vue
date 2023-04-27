<script>
import { h } from 'vue';

export default {
    name: 'i-material-label-outline',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 5 19 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.03 5H3v13.99l14.03.01L22 12l-4.97-7zM16 17H5V7h11l3.55 5L16 17z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 5 18.78 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16l-3.96-5.58zM16 17H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h10l3.55 5L16 17z"},[])]);
return h('svg',{"viewBox":c ? '3 5 19 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"},[])]);
    }
}
</script>