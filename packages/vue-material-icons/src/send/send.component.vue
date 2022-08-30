<script>
import { h } from 'vue';

export default {
    name: 'i-material-send',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 21 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m4 8.25 7.51 1-7.5-3.22zm.01 9.72 7.5-3.22-7.51 1z","opacity":"0.3"},[]),h('path',{d:"M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z"},[])]);
if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 21 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3.52 19.46 16.97' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m3.4 20.4 17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 21 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m4.01 6.03 7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 3 21 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"},[])]);
    }
}
</script>