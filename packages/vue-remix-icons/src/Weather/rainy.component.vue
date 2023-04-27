<script>
import { h } from 'vue';

export default {
    name: 'i-remix-rainy',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 18v-2h1a4 4 0 1 0-2.157-7.37A6 6 0 1 0 8 15.917v2.022A8.001 8.001 0 0 1 9 2a7.998 7.998 0 0 1 6.98 4.087A6 6 0 1 1 17 18h-1zm-5.768.732L12 16.964l1.768 1.768a2.5 2.5 0 1 1-3.536 0z"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15.86 18-3.153-3.153a1 1 0 0 0-1.414 0L8.18 17.96a8.001 8.001 0 1 1 7.8-11.873A6 6 0 1 1 17 18h-1.139zm-5.628.732L12 16.964l1.768 1.768a2.5 2.5 0 1 1-3.536 0z"},[])]);
    }
}
</script>