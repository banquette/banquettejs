<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-wifi-1-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '0.36 3 23.28 18.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"},[]),h('path',{d:"M6.67 14.86 12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z"},[])]);
    }
}
</script>