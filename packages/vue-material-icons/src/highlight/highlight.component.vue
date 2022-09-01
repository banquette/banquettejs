<script>
import { h } from 'vue';

export default {
    name: 'i-material-highlight',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3.5 2 16.99 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 20h2v-3.83l3-3V11H8v2.17l3 3z","opacity":"0.3"},[]),h('path',{d:"m6 14 3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zm3-9h2v3h-2zM4.916 4.464l2.12 2.122L5.62 8 3.5 5.877zM18.372 8l-1.414-1.414 2.12-2.12 1.415 1.413z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.92 2 16.17 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.29 14.29 9 17v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4l2.71-2.71a.99.99 0 0 0 .29-.71V10c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3.59c0 .26.11.52.29.7zM12 2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1zM4.21 5.17c.39-.39 1.02-.39 1.42 0l.71.71a.996.996 0 1 1-1.41 1.41l-.72-.71a.996.996 0 0 1 0-1.41zm13.46.71.71-.71a.996.996 0 1 1 1.41 1.41l-.71.71a.996.996 0 1 1-1.41-1.41z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3.5 2 16.99 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6 14 3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zm3-9h2v3h-2zM3.502 5.874 4.916 4.46l2.122 2.12-1.414 1.415zm13.458.708 2.123-2.12 1.413 1.416-2.123 2.12z"},[])]);
return h('svg',{"viewBox":c ? '3.5 2 16.99 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6 14 3 3v5h6v-5l3-3V9H6v5zm5-12h2v3h-2V2zM3.5 5.88l1.41-1.41 2.12 2.12L5.62 8 3.5 5.88zm13.46.71 2.12-2.12 1.41 1.41L18.38 8l-1.42-1.41z"},[])]);
    }
}
</script>