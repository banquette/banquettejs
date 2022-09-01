<script>
import { h } from 'vue';

export default {
    name: 'i-material-data-thresholding',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M19 19v-1.73L17.27 19zM5 17.72 6.72 16h2.12l-3 3h1.83l3-3h2.12l-3 3h1.62l3-3h2.12l-3 3h1.62l3-3H19V5H5v12.72zm5.67-9.55 2 2 3.67-3.67 1.41 1.41L12.67 13l-2-2-3 3-1.41-1.41 4.41-4.42z"},[]),h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-1.73L19 17.27V19zm0-3h-.85l-3 3h-1.62l3-3h-2.12l-3 3H9.8l3-3h-2.12l-3 3H5.84l3-3H6.72L5 17.72V5h14v11z"},[]),h('path',{d:"m10.67 11 2 2 5.08-5.09-1.41-1.41-3.67 3.67-2-2-4.42 4.42L7.66 14z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3H3v18h18V3zM10.67 8.17l2 2 3.67-3.67 1.41 1.41L12.67 13l-2-2-3 3-1.41-1.41 4.41-4.42zM5 16h1.72L5 17.72V16zm.84 3 3-3h1.83l-3 3H5.84zm3.96 0 3-3h1.62l-3 3H9.8zm3.73 0 3-3h1.62l-3 3h-1.62zM19 19h-1.73L19 17.27V19z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.62 5.88 1.29 1.29 2.96-2.96a.996.996 0 1 1 1.41 1.41l-3.67 3.67a.996.996 0 0 1-1.41 0L10.67 11l-2.3 2.3a.996.996 0 1 1-1.41-1.41l3-3a.982.982 0 0 1 1.42-.01zM5 16h1.72L5 17.72V16zm.84 3 3-3h1.83l-3 3H5.84zm3.96 0 3-3h1.62l-3 3H9.8zm3.73 0 3-3h1.62l-3 3h-1.62zM19 19h-1.73L19 17.27V19z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-1.73L19 17.27V19zm0-3h-.85l-3 3h-1.62l3-3h-2.12l-3 3H9.8l3-3h-2.12l-3 3H5.84l3-3H6.72L5 17.72V5h14v11z"},[]),h('path',{d:"m10.67 11 2 2 5.08-5.09-1.41-1.41-3.67 3.67-2-2-4.42 4.42L7.66 14z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.33 5.17 2 2 3.67-3.67 1.41 1.41L12.67 13l-2-2-3 3-1.41-1.41 4.41-4.42zM5 16h1.72L5 17.72V16zm.84 3 3-3h1.83l-3 3H5.84zm3.96 0 3-3h1.62l-3 3H9.8zm3.73 0 3-3h1.62l-3 3h-1.62zM19 19h-1.73L19 17.27V19z"},[])]);
    }
}
</script>