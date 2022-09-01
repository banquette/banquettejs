<script>
import { h } from 'vue';

export default {
    name: 'i-material-category',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"17.5","cy":"17.5","opacity":"0.3",r:"2.5"},[]),h('path',{d:"M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z","opacity":"0.3"},[]),h('path',{d:"m12 2-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM11 13.5H3v8h8v-8zm-2 6H5v-4h4v4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 2.92 19 19.08' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.15 3.4 7.43 9.48c-.41.66.07 1.52.85 1.52h7.43c.78 0 1.26-.86.85-1.52L12.85 3.4a.993.993 0 0 0-1.7 0z"},[]),h('circle',{"cx":"17.5","cy":"17.5",r:"4.5"},[]),h('path',{d:"M4 21.5h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 2-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"},[])]);
return h('svg',{"viewBox":c ? '3 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 2-5.5 9h11z"},[]),h('circle',{"cx":"17.5","cy":"17.5",r:"4.5"},[]),h('path',{d:"M3 13.5h8v8H3z"},[])]);
    }
}
</script>