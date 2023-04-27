<script>
import { h } from 'vue';

export default {
    name: 'i-material-markunread-mailbox',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 12H6V8H4v12h16V8H10z","opacity":"0.3"},[]),h('path',{d:"M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 6H10v6H8V4h6V0H6v6H2v16h20V6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6H10v5c0 .55-.45 1-1 1s-1-.45-1-1V4h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"},[])]);
return h('svg',{"viewBox":c ? '-618 -3000 1400 3600' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill":"none",d:"M-618-3000H782V600H-618zM0 0h24v24H0z"},[]),h('path',{d:"M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"},[])]);
    }
}
</script>