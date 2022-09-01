<script>
import { h } from 'vue';

export default {
    name: 'i-material-format-quote',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.62 16h.76L19 12.76V8h-4v4h3.62zm-10 0h.76L9 12.76V8H5v4h3.62z","opacity":"0.3"},[]),h('path',{d:"M18.62 18 21 13.24V6h-8v8h2.38l-2 4h5.24zM15 12V8h4v4.76L17.38 16h-.76l2-4H15zM3.38 18h5.24L11 13.24V6H3v8h2.38l-2 4zM5 12V8h4v4.76L7.38 16h-.76l2-4H5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 7 16 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 17h3l2-4V7H4v6h3l-2 4zm10 0h3l2-4V7h-6v6h3l-2 4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 7 16 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"},[])]);
return h('svg',{"viewBox":c ? '5 7 14 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"},[])]);
    }
}
</script>