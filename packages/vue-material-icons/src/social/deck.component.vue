<script>
import { h } from 'vue';

export default {
    name: 'i-material-deck',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 4.44 8.34 7h7.32z","opacity":"0.3"},[]),h('path',{d:"M22 9 12 2 2 9h9v13h2V9h9zM12 4.44 15.66 7H8.34L12 4.44z"},[]),h('path',{d:"m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.34 2.44 19.31 19.56' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.41 9c.49 0 .69-.63.29-.91L13.15 2.8a2 2 0 0 0-2.29 0L3.3 8.09c-.4.28-.2.91.29.91H11v12c0 .55.45 1 1 1s1-.45 1-1V9h7.41z"},[]),h('path',{d:"M8 16H4.9l-.57-3.02a1.003 1.003 0 0 0-1.97.37L3 16.74V21c0 .55.45 1 1 1h.01c.55 0 1-.44 1-.99L5.02 18H7v3c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm12.84-3.82c-.54-.1-1.06.26-1.17.8L19.1 16H16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-3h1.98l.02 3.01c0 .55.45.99 1 .99s1-.45 1-1v-4.26l.64-3.39c.1-.54-.26-1.07-.8-1.17z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 9 12 2 2 9h9v13h2V9h9zM12 4.44 15.66 7H8.34L12 4.44z"},[]),h('path',{d:"m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 9 12 2 2 9h9v13h2V9z"},[]),h('path',{d:"m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"},[])]);
    }
}
</script>