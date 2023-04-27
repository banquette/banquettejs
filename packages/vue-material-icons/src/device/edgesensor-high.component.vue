<script>
import { h } from 'vue';

export default {
    name: 'i-material-edgesensor-high',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 2 24 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 4h8v1H8zm0 15h8v1H8z","opacity":"0.3"},[]),h('path',{d:"M16 2.01 8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 20H8v-1h8v1zm0-3H8V7h8v10zm0-12H8V4h8v1zm3 5h2v7h-2zm3-3h2v7h-2zM3 7h2v7H3zm-3 3h2v7H0z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 2 24 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 7h2v7H3V7zm-3 3h2v7H0v-7zm22-3h2v7h-2V7zm-3 3h2v7h-2v-7zm-1-8H6v20h12V2zm-2 15H8V7h8v10z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0 2 24 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 7c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-3 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1zm22-3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-3 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1zm-4-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 17H8V7h8v10z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 2 24 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 7h2v7H3V7zm-3 3h2v7H0v-7zm22-3h2v7h-2V7zm-3 3h2v7h-2v-7zm-3-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 20H8v-1h8v1zm0-3H8V7h8v10zM8 5V4h8v1H8z"},[])]);
return h('svg',{"viewBox":c ? '0 2 24 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 7h2v7H3V7zm-3 3h2v7H0v-7zm22-3h2v7h-2V7zm-3 3h2v7h-2v-7zm-3-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 17H8V7h8v10z"},[])]);
    }
}
</script>