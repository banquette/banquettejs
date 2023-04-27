<script>
import { h } from 'vue';

export default {
    name: 'i-material-reply-all',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '0.42 6.41 23.58 13.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 7.56c0-.94-1.14-1.42-1.81-.75L.71 11.29a.996.996 0 0 0 0 1.41l4.48 4.48c.67.68 1.81.2 1.81-.74 0-.28-.11-.55-.31-.75L3 12l3.69-3.69c.2-.2.31-.47.31-.75zM13 9V7.41c0-.89-1.08-1.34-1.71-.71L6.7 11.29a.996.996 0 0 0 0 1.41l4.59 4.59c.63.63 1.71.18 1.71-.71V14.9c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"},[])]);
return h('svg',{"viewBox":c ? '0 5 24 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"},[])]);
    }
}
</script>