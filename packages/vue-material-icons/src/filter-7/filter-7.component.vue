<script>
import { h } from 'vue';

export default {
    name: 'i-material-filter-7',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 17h14V3H7v14zm4-10V5h6v2l-4 8h-2l4-8h-4z","opacity":"0.3"},[]),h('path',{d:"M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zm10-8 4-8V5h-6v2h4l-4 8zm8-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14zm-8-2 4-8V5h-6v2h4l-4 8h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1zm19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-6.75-2.49 3.58-7.17c.11-.22.17-.47.17-.72 0-.9-.72-1.62-1.62-1.62H12c-.55 0-1 .45-1 1s.45 1 1 1h3l-3.36 6.71a.89.89 0 0 0 .8 1.29h.01c.34 0 .65-.19.8-.49z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2 4-8V5h-6v2h4l-4 8h2z"},[])]);
    }
}
</script>