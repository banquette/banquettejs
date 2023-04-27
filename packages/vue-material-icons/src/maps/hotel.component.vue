<script>
import { h } from 'vue';

export default {
    name: 'i-material-hotel',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 5 22 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 9h-6v6h8v-4c0-1.1-.9-2-2-2z","opacity":"0.3"},[]),h('circle',{"cx":"7","cy":"11",r:"1","opacity":"0.3"},[]),h('path',{d:"M4 11c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm11-4h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 5 22 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm16-6H11v7H3V5H1v15h2v-3h18v3h2V7z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 5 22 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-6c-1.1 0-2 .9-2 2v5H3V6c0-.55-.45-1-1-1s-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1v-2h18v2c0 .55.45 1 1 1s1-.45 1-1v-8c0-2.21-1.79-4-4-4z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 5 22 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z"},[])]);
return h('svg',{"viewBox":c ? '1 5 22 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"},[])]);
    }
}
</script>