<script>
import { h } from 'vue';

export default {
    name: 'i-remix-paint',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '1.51 1.08 21.98 21.92' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19.228 18.732 1.768-1.768 1.767 1.768a2.5 2.5 0 1 1-3.535 0zM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.414 0l-8.485-8.485a1 1 0 0 1 0-1.415l7.778-7.778-2.122-2.121L8.88 1.08zM11 6.03 3.929 13.1 11 20.173l7.071-7.071L11 6.029z"},[])]);
return h('svg',{"viewBox":c ? '1.51 1.08 21.98 21.92' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19.228 18.732 1.768-1.768 1.767 1.768a2.5 2.5 0 1 1-3.535 0zM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.414 0l-8.485-8.485a1 1 0 0 1 0-1.415l7.778-7.778-2.122-2.121L8.88 1.08zM11 6.03 3.929 13.1H18.07L11 6.03z"},[])]);
    }
}
</script>