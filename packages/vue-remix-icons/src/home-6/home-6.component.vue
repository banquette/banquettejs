<script>
import { h } from 'vue';

export default {
    name: 'i-remix-home-6',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2.27 18 18.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14zM7 15h10v2H7v-2z"},[])]);
return h('svg',{"viewBox":c ? '3 2.27 18 18.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zM7 15v2h10v-2H7z"},[])]);
    }
}
</script>