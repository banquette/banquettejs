<script>
import { h } from 'vue';

export default {
    name: 'i-material-double-arrow',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '5.72 5 14.55 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20.08 11.42-4.04-5.65c-.34-.48-.89-.77-1.48-.77-1.49 0-2.35 1.68-1.49 2.89L16 12l-2.93 4.11c-.87 1.21 0 2.89 1.49 2.89.59 0 1.15-.29 1.49-.77l4.04-5.65c.24-.35.24-.81-.01-1.16z"},[]),h('path',{d:"M13.08 11.42 9.05 5.77C8.7 5.29 8.15 5 7.56 5 6.07 5 5.2 6.68 6.07 7.89L9 12l-2.93 4.11C5.2 17.32 6.07 19 7.56 19c.59 0 1.15-.29 1.49-.77l4.04-5.65c.24-.35.24-.81-.01-1.16z"},[])]);
return h('svg',{"viewBox":c ? '4 5 16.5 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.5 5H11l5 7-5 7h4.5l5-7z"},[]),h('path',{d:"M8.5 5H4l5 7-5 7h4.5l5-7z"},[])]);
    }
}
</script>