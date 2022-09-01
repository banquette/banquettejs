<script>
import { h } from 'vue';

export default {
    name: 'i-material-keyboard-arrow-left',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '8.42 6.42 6.59 11.17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.71 15.88 10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"},[])]);
return h('svg',{"viewBox":c ? '8 6 7.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},[])]);
    }
}
</script>