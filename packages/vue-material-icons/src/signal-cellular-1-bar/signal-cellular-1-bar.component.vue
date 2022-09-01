<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-cellular-1-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 22h20V2L2 22z","fill-opacity":"0.3"},[]),h('path',{d:"M12 12 2 22h10V12z"},[])]);
    }
}
</script>