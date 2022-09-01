<script>
import { h } from 'vue';

export default {
    name: 'i-material-nightlight-round',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '5.49 2.01 11.03 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.5 22h.21c.84-.02 1.12-1.11.41-1.56a9.99 9.99 0 0 1-4.63-8.43c0-3.55 1.85-6.66 4.63-8.44.7-.45.44-1.54-.39-1.56h-.13c-4.9-.05-9.21 3.53-9.98 8.37C4.64 16.61 9.45 22 15.5 22z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '5.5 2 13 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.5 22c1.05 0 2.05-.16 3-.46-4.06-1.27-7-5.06-7-9.54s2.94-8.27 7-9.54c-.95-.3-1.95-.46-3-.46-5.52 0-10 4.48-10 10s4.48 10 10 10z"},[])]);
return h('svg',{"viewBox":c ? '5 2 12.93 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.01 12c0-3.57 2.2-6.62 5.31-7.87.89-.36.75-1.69-.19-1.9-1.1-.24-2.27-.3-3.48-.14-4.51.6-8.12 4.31-8.59 8.83C4.44 16.93 9.13 22 15.01 22c.73 0 1.43-.08 2.12-.23.95-.21 1.1-1.53.2-1.9A8.46 8.46 0 0 1 12.01 12z"},[])]);
    }
}
</script>