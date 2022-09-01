<script>
import { h } from 'vue';

export default {
    name: 'i-material-merge-type',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5.59 3.5 12.81 16.91' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59zm11.407 1.41-3.408-3.407 1.4-1.407 3.41 3.408z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 3.71 12 16.28' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.7 19.7a.996.996 0 0 0 0-1.41l-2.7-2.7L13.59 17l2.7 2.7c.39.39 1.03.39 1.41 0zM8.71 8H11v5.59l-4.71 4.7A.996.996 0 1 0 7.7 19.7l4.71-4.7c.38-.38.59-.88.59-1.41V8h2.29c.45 0 .67-.54.35-.85l-3.29-3.29c-.2-.2-.51-.2-.71 0L8.35 7.15a.5.5 0 0 0 .36.85z"},[])]);
return h('svg',{"viewBox":c ? '5.59 3.5 12.82 16.91' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 20.41 18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"},[])]);
    }
}
</script>