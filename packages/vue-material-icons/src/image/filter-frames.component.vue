<script>
import { h } from 'vue';

export default {
    name: 'i-material-filter-frames',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 10h8v6H8z","opacity":"0.3"},[]),h('path',{d:"M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM6 18h12V8H6v10zm2-8h8v6H8v-6z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 4h-6l-4-4-4 4H2v18h20V4zm-2 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 0.42 20 21.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4h-4L12.71.71a.996.996 0 0 0-1.41 0L8 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 16H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3.52l3.52-3.5L15.52 6H19c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM17 8H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM6 18h12V8H6v10zm2-8h8v6H8v-6z"},[])]);
return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"},[])]);
    }
}
</script>