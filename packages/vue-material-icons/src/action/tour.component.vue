<script>
import { h } from 'vue';

export default {
    name: 'i-material-tour',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 12V6h11.05l-1.2 3 1.2 3z","opacity":"0.3"},[]),h('path',{d:"M21 4H7V2H5v20h2v-8h14l-2-5 2-5zM7 12V6h11.05l-1.2 3 1.2 3H7zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 2 15.52 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.45 5.37A.999.999 0 0 0 19.52 4H7V3c0-.55-.45-1-1-1s-1 .45-1 1v19h2v-8h12.52c.71 0 1.19-.71.93-1.37L19 9l1.45-3.63zM15 9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-3.86 5.74.9 2.26H7V6h11.05l-.9 2.26-.3.74.29.74zM14 9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"},[])]);
return h('svg',{"viewBox":c ? '5 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-6 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"},[])]);
    }
}
</script>