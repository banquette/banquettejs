<script>
import { h } from 'vue';

export default {
    name: 'i-material-arrow-drop-down',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '8.41 10 7.18 4.59' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m8.71 11.71 2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"},[])]);
if (this.version === 'outlined' || this.version === 'sharp' || this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 10 10 5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m7 10 5 5 5-5H7z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '7 10 10 5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m7 10 5 5 5-5z"},[])]);
    }
}
</script>