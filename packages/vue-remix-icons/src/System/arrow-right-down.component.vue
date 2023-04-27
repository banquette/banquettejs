<script>
import { h } from 'vue';

export default {
    name: 'i-remix-arrow-right-down',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '5.98 5.98 12.02 12.02' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.59 16.004 5.982 7.397l1.414-1.414 8.607 8.606V7.004h2v11h-11v-2z"},[])]);
return h('svg',{"viewBox":c ? '5.98 5.98 12.02 12.02' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.637 13.05 5.98 7.395 7.394 5.98l5.657 5.657L18 6.687V18H6.687z"},[])]);
    }
}
</script>