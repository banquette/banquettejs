<script>
import { h } from 'vue';

export default {
    name: 'i-material-bookmarks',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2zm0 14.97-4.21-1.81-.79-.34-.79.34L5 19.97V7h10v12.97z"},[]),h('path',{d:"m5 19.97 5-2.15 5 2.15V7H5z","opacity":"0.3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19 18 2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19 18 2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"},[])]);
    }
}
</script>