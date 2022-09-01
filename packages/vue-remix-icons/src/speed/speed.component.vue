<script>
import { h } from 'vue';

export default {
    name: 'i-remix-speed',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 4.43 21.6 15.13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 13.333-9.223 6.149A.5.5 0 0 1 2 19.066V4.934a.5.5 0 0 1 .777-.416L12 10.667V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832l-10.599 7.066a.5.5 0 0 1-.777-.416v-5.733zM10.394 12 4 7.737v8.526L10.394 12zM14 7.737v8.526L20.394 12 14 7.737z"},[])]);
return h('svg',{"viewBox":c ? '2 4.43 21.6 15.13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 13.333-9.223 6.149A.5.5 0 0 1 2 19.066V4.934a.5.5 0 0 1 .777-.416L12 10.667V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832l-10.599 7.066a.5.5 0 0 1-.777-.416v-5.733z"},[])]);
    }
}
</script>