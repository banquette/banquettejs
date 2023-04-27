<script>
import { h } from 'vue';

export default {
    name: 'i-material-filter-alt',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4.04 4 15.91 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 6h10l-5.01 6.3L7 6zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"},[]),h('path',{d:"M7 6h10l-5.01 6.3z","opacity":"0.3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9H3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4.04 4 15.92 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.25 5.61C6.57 8.59 10 13 10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-5s3.43-4.41 5.75-7.39c.51-.66.04-1.61-.8-1.61H5.04c-.83 0-1.3.95-.79 1.61z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4.04 4 15.91 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 6h10l-5.01 6.3L7 6zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"},[])]);
return h('svg',{"viewBox":c ? '4.04 4 15.91 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"},[])]);
    }
}
</script>