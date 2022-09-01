<script>
import { h } from 'vue';

export default {
    name: 'i-remix-mind-map',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '2 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 3a3 3 0 1 1 0 6h-3a3 3 0 0 1-2.829-2H11c-1.1 0-2 .9-2 2v.171a3 3 0 0 1 0 5.658V15c0 1.1.9 2 2 2h1.17A3.003 3.003 0 0 1 15 15h3a3 3 0 1 1 0 6h-3a3 3 0 0 1-2.829-2H11c-2.21 0-4-1.79-4-4H5a3 3 0 1 1 0-6h2c0-2.21 1.79-4 4-4h1.17A3.003 3.003 0 0 1 15 3h3zm0 14h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zM8 11H5a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm10-6h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z"},[])]);
    }
}
</script>