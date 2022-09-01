<script>
import { h } from 'vue';

export default {
    name: 'i-material-foundation',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z","opacity":"0.3"},[]),h('path',{d:"M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.8 3.34 18.4 16.66' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 12h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v3H4c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"},[])]);
    }
}
</script>