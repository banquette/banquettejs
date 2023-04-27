<script>
import { h } from 'vue';

export default {
    name: 'i-material-lock',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0V0z"},[]),h('path',{d:"M0 0h24v24H0V0z","opacity":"0.87"},[])]),h('path',{d:"M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z","opacity":"0.3"},[]),h('path',{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0V0z"},[]),h('path',{d:"M0 0h24v24H0V0z","opacity":"0.87"},[])]),h('path',{d:"M20 8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19A5.008 5.008 0 0 0 7 6v2H4v14h16V8zm-8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0V0z"},[]),h('path',{d:"M0 0h24v24H0V0z","opacity":"0.87"},[])]),h('path',{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0V0z"},[]),h('path',{d:"M0 0h24v24H0V0z","opacity":"0.87"},[])]),h('path',{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"},[])]);
return h('svg',{"viewBox":c ? '4 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"},[])]);
    }
}
</script>