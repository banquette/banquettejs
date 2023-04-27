<script>
import { h } from 'vue';

export default {
    name: 'i-material-snowing',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '5 5 14 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM5 6c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm12 8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zM8 18c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"},[])]);
    }
}
</script>