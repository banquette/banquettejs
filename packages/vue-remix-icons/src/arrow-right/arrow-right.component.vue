<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-right',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '4 4.22 16 15.56' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.172 11-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"},[])]);
return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 13H4v-2h8V4l8 8-8 8z"},[])]);
    }
}
</script>