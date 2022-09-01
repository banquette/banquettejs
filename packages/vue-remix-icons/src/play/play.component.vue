<script>
import { h } from 'vue';

export default {
    name: 'i-remix-play',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '8 4.43 11.6 15.13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.394 12 10 7.737v8.526L16.394 12zm2.982.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"},[])]);
return h('svg',{"viewBox":c ? '8 4.43 11.6 15.13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.376 12.416 8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"},[])]);
    }
}
</script>