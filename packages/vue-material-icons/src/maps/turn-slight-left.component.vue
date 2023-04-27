<script>
import { h } from 'vue';

export default {
    name: 'i-material-turn-slight-left',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    return h('svg',{"viewBox":c ? '6 4 9 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-8.41L9.41 6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 4 9 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.66 5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3.66c0 .55.45 1 1 1s1-.45 1-1V7.41l5 5V19c0 .55.45 1 1 1s1-.45 1-1v-6.58c0-.53-.21-1.04-.59-1.41l-5-5h1.24A1.02 1.02 0 0 0 11.66 5z"},[])]);
return h('svg',{"viewBox":c ? '6 4 9 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-7.58c0-.53-.21-1.04-.59-1.41l-5-5h2.25z"},[])]);
    }
}
</script>