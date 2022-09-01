<script>
import { h } from 'vue';

export default {
    name: 'i-material-file-upload',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M9.83 8H11v6h2V8h1.17L12 5.83z"},[]),h('path',{d:"M5 18h14v2H5zm0-8h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2V8H9.83L12 5.83 14.17 8H13z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 3.41 14 16.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.4 10h1.59v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.7 3.7a.996.996 0 0 0-1.41 0L6.7 8.29c-.63.63-.19 1.71.7 1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z"},[])]);
return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"},[])]);
    }
}
</script>