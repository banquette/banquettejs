<script>
import { h } from 'vue';

export default {
    name: 'i-material-move-up',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 3 21 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M15 15h5v3h-5z"},[]),h('path',{d:"M3 13c0-2.45 1.76-4.47 4.08-4.91l-1.49 1.5L7 11l4-4.01L7 3 5.59 4.41l1.58 1.58v.06A7.007 7.007 0 0 0 1 13c0 3.87 3.13 7 7 7h3v-2H8c-2.76 0-5-2.24-5-5zm10 0v7h9v-7h-9zm7 5h-5v-3h5v3zM13 4h9v7h-9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.01 3.41 20.99 16.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.01 13.28A4.985 4.985 0 0 1 7.08 8.1l-.79.78a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L7.71 3.7A.996.996 0 1 0 6.3 5.11l.88.88v.06a6.995 6.995 0 0 0-6.15 7.47C1.29 17.22 4.55 20 8.26 20H10c.55 0 1-.45 1-1s-.45-1-1-1H8.22c-2.7 0-5.07-2.04-5.21-4.72zM13 15v3c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2zm7 3h-5v-3h5v3zm0-14h-5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"},[])]);
return h('svg',{"viewBox":c ? '1 3 21 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 13c0-2.45 1.76-4.47 4.08-4.91l-1.49 1.5L7 11l4-4.01L7 3 5.59 4.41l1.58 1.58v.06A7.007 7.007 0 0 0 1 13c0 3.87 3.13 7 7 7h3v-2H8c-2.76 0-5-2.24-5-5zm10 0v7h9v-7h-9zm7 5h-5v-3h5v3zM13 4h9v7h-9z"},[])]);
    }
}
</script>