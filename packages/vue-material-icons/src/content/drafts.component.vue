<script>
import { h } from 'vue';

export default {
    name: 'i-material-drafts',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 1 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 15.36-8-5.02V18h16l-.01-7.63z","opacity":"0.3"},[]),h('path',{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 3.32 19.99 8v.01L12 13 4 8l8-4.68zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 1 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.99 6.86 12 1 2 6.86V20h20l-.01-13.14zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 1.31 20 18.69' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.99 8c0-.72-.37-1.35-.94-1.7l-8.04-4.71c-.62-.37-1.4-.37-2.02 0L2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zm-11.05 4.34-7.2-4.5 7.25-4.25c.62-.37 1.4-.37 2.02 0l7.25 4.25-7.2 4.5c-.65.4-1.47.4-2.12 0z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 1 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zm-2 0v.01L12 13 4 8l8-4.68L19.99 8zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z"},[])]);
return h('svg',{"viewBox":c ? '2 1 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z"},[])]);
    }
}
</script>