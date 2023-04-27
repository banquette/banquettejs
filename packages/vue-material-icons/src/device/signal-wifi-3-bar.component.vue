<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-wifi-3-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '0.36 3 23.28 18.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z"},[]),h('path',{d:"M3.53 10.95 12 21.5l8.47-10.55C20.04 10.62 16.81 8 12 8s-8.04 2.62-8.47 2.95z"},[])]);
    }
}
</script>