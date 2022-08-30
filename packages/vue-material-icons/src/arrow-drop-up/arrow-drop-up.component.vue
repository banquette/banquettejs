<script>
import { h } from 'vue';

export default {
    name: 'i-material-arrow-drop-up',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '8.41 9.41 7.18 4.59' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M8.71 12.29 11.3 9.7a.996.996 0 0 1 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"},[])]);
if (this.version === 'outlined' || this.version === 'sharp' || this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 9 10 5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m7 14 5-5 5 5H7z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '7 9 10 5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m7 14 5-5 5 5z"},[])]);
    }
}
</script>