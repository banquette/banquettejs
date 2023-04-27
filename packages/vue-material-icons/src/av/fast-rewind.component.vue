<script>
import { h } from 'vue';

export default {
    name: 'i-material-fast-rewind',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2.5 6 17.5 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 14.14V9.86L5.97 12zm9 0V9.86L14.97 12z","opacity":"0.3"},[]),h('path',{d:"m11 6-8.5 6 8.5 6V6zm-2 8.14L5.97 12 9 9.86v4.28zM20 6l-8.5 6 8.5 6V6zm-2 8.14L14.97 12 18 9.86v4.28z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.23 6.93 16.78 10.15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 16.07V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.56.4-.56 1.24 0 1.63l5.77 4.07c.67.47 1.58 0 1.58-.81zm1.66-3.25 5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07a1 1 0 0 0 0 1.64z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2.5 6 17.5 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 9.86v4.28L14.97 12 18 9.86m-9 0v4.28L5.97 12 9 9.86M20 6l-8.5 6 8.5 6V6zm-9 0-8.5 6 8.5 6V6z"},[])]);
return h('svg',{"viewBox":c ? '2.5 6 17.5 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 18V6l-8.5 6 8.5 6zm.5-6 8.5 6V6l-8.5 6z"},[])]);
    }
}
</script>