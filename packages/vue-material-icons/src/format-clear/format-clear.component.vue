<script>
import { h } from 'vue';

export default {
    name: 'i-material-format-clear',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '2.42 5 17.58 15.57' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 8c.83 0 1.5-.67 1.5-1.5S19.33 5 18.5 5H6.39l3 3h1.83l-.55 1.28 2.09 2.09L14.21 8h4.29zm-1.06 10.88L4.12 5.56a.996.996 0 1 0-1.41 1.41l6.26 6.26-1.65 3.84c-.39.92.28 1.93 1.27 1.93.55 0 1.05-.33 1.27-.84l1.21-2.83 4.95 4.95c.39.39 1.02.39 1.41 0 .4-.38.4-1.01.01-1.4z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4.86 18 16.14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 8V5H6.39l3 3h1.83l-.55 1.28 2.09 2.1L14.21 8zM3.41 4.86 2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21l1.41-1.41z"},[])]);
return h('svg',{"viewBox":c ? '2 5 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.27 5 2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"},[])]);
    }
}
</script>