<script>
import { h } from 'vue';

export default {
    name: 'i-material-chat-bubble-outline',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 18.59' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 4v12H5.17L4 17.17V4h16m0-2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"},[])]);
    }
}
</script>