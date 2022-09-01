<script>
import { h } from 'vue';

export default {
    name: 'i-remix-play-list-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3.5 20 16.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 18v2H2v-2h20zM2 3.5l8 5-8 5v-10zM22 11v2H12v-2h10zM4 7.108v2.784L6.226 8.5 4 7.108zM22 4v2H12V4h10z"},[])]);
return h('svg',{"viewBox":c ? '2 3.5 20 16.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 18v2H2v-2h20zM2 3.5l8 5-8 5v-10zM22 11v2H12v-2h10zm0-7v2H12V4h10z"},[])]);
    }
}
</script>