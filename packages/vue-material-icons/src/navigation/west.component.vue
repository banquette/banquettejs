<script>
import { h } from 'vue';

export default {
    name: 'i-material-west',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '2.41 5.42 19.59 13.17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.7 18.3a.996.996 0 0 0 0-1.41L5.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1H5.83l3.88-3.88A.996.996 0 1 0 8.3 5.71L2.7 11.3a.996.996 0 0 0 0 1.41l5.59 5.59c.39.38 1.03.38 1.41 0z"},[])]);
return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"},[])]);
    }
}
</script>