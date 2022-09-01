<script>
import { h } from 'vue';

export default {
    name: 'i-material-install-mobile',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M7 20h10v1H7zM7 3h7v1H7z"},[]),h('path',{d:"M17 18H7V6h7V4H7V3h7V1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2v2zm0 3H7v-1h10v1z"},[]),h('path',{d:"M19 3h-2v7.17l-2.59-2.58L14 8l-1 1 1 1 4 4 3-3 2-2-1.41-1.41-.59.59-2 1.99z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 18H7V6h7V1H5v22h14v-7h-2z"},[]),h('path',{d:"m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 1 17.59 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.71 13.29 22.3 9.7a.996.996 0 1 0-1.41-1.41L19 10.17V4c0-.55-.45-1-1-1s-1 .45-1 1v6.17l-1.89-1.88A.996.996 0 1 0 13.7 9.7l3.59 3.59c.4.39 1.03.39 1.42 0z"},[]),h('path',{d:"M17 18H7V6h7V1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2v2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 18H7V6h7V4H7V3h7V1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2v2zm0 3H7v-1h10v1z"},[]),h('path',{d:"m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z"},[])]);
return h('svg',{"viewBox":c ? '5 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 18H7V6h7V1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2v2z"},[]),h('path',{d:"m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z"},[])]);
    }
}
</script>