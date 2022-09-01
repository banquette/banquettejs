<script>
import { h } from 'vue';

export default {
    name: 'i-material-emoji-flags',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 2 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M12 9H7v6h6l1 2h4v-6h-5z"},[]),h('path',{d:"m14 9-1-2H7V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V21h2v-4h5l1 2h7V9h-6zm4 8h-4l-1-2H7V9h5l1 2h5v6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 9h-5l-.72-1.45c-.17-.34-.52-.55-.9-.55H7V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V20c0 .55.45 1 1 1s1-.45 1-1v-3h5l.72 1.45a1 1 0 0 0 .89.55H19c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1zm-1 8h-4l-1-2H7V9h5l1 2h5v6z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 9-1-2H7V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V21h2v-4h5l1 2h7V9h-6zm4 8h-4l-1-2H7V9h5l1 2h5v6z"},[])]);
    }
}
</script>