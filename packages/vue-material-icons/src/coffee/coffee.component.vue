<script>
import { h } from 'vue';

export default {
    name: 'i-material-coffee',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 11c0 2.76 2.24 5 5 5s5-2.24 5-5v-1H6v1z","opacity":"0.3"},[]),h('path',{d:"M4 19h16v2H4zM18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 11c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1h10v1zm0-3H6V5h10v3zm2.5 0H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 3H4v8c0 3.87 3.13 7 7 7s7-3.13 7-7v-1h.4c1.67 0 3.19-1.13 3.52-2.77A3.494 3.494 0 0 0 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm0 5v1c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1m12.5-2H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"},[])]);
return h('svg',{"viewBox":c ? '4 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"},[])]);
    }
}
</script>