<script>
import { h } from 'vue';

export default {
    name: 'i-remix-edit',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2.03 18 19.97' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.414 16 16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"},[])]);
return h('svg',{"viewBox":c ? '3 2.03 18 19.97' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"},[])]);
    }
}
</script>