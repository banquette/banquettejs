<script>
import { h } from 'vue';

export default {
    name: 'i-remix-home-4',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '1 1.35 22 19.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z"},[])]);
return h('svg',{"viewBox":c ? '1 1.35 22 19.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-9-7v6h2v-6h-2z"},[])]);
    }
}
</script>