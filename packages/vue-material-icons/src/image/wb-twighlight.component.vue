<script>
import { h } from 'vue';

export default {
    name: 'i-material-wb-twighlight',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.954 8.66 2.12-2.12 1.415 1.414-2.13 2.12zM17.9 14c-.5-2.85-2.95-5-5.9-5s-5.45 2.15-5.9 5h11.8zM2 16h20v4H2zm9-12h2v3h-2zM3.54 7.925 4.954 6.51l2.122 2.122-1.415 1.415z"},[])]);
    }
}
</script>