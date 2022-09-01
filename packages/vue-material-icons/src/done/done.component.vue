<script>
import { h } from 'vue';

export default {
    name: 'i-material-done',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '3.81 6.01 16.78 12.57' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m9 16.2-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z"},[])]);
return h('svg',{"viewBox":c ? '3.4 5.6 17.6 13.4' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"},[])]);
    }
}
</script>