<script>
import { h } from 'vue';

export default {
    name: 'i-material-subscript',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5.88 4 17.12 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 18v1h3v1h-4v-3h3v-1h-3v-1h4v3h-3zM5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73L5.88 18z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6.8 4 16.2 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.52 10.73 7.3 5.72a1.112 1.112 0 1 1 1.88-1.19l2.76 4.46h.12l2.74-4.45c.21-.34.57-.54.96-.54.88 0 1.42.98.94 1.72l-3.23 5 3.55 5.55c.48.75-.06 1.73-.94 1.73-.38 0-.74-.2-.95-.52l-3.07-4.89h-.12l-3.07 4.89c-.2.32-.56.52-.95.52-.88 0-1.42-.97-.94-1.72l3.54-5.55zM23 19.5c0-.28-.22-.5-.5-.5H20v-1h2c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2.5c-.28 0-.5.22-.5.5s.22.5.5.5H22v1h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2.5c.28 0 .5-.22.5-.5z"},[])]);
return h('svg',{"viewBox":c ? '5.88 4 17.12 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 18h-2v1h3v1h-4v-2c0-.55.45-1 1-1h2v-1h-3v-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73L5.88 18z"},[])]);
    }
}
</script>