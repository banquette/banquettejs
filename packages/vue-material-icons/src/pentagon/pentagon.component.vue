<script>
import { h } from 'vue';

export default {
    name: 'i-material-pentagon',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{"opacity":"0.3",d:"M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44z"},[]),h('path',{d:"M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44l7.63 5.34zM2 9l4 12h12l4-12-10-7L2 9z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '2.37 2.44 19.26 18.56' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m2.47 10.42 3.07 9.22c.28.81 1.04 1.36 1.9 1.36h9.12a2 2 0 0 0 1.9-1.37l3.07-9.22c.28-.84-.03-1.76-.75-2.27L13.15 2.8a2 2 0 0 0-2.29 0L3.22 8.14c-.72.51-1.03 1.44-.75 2.28z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44l7.63 5.34zM2 9l4 12h12l4-12-10-7L2 9z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m2 9 4 12h12l4-12-10-7z"},[])]);
    }
}
</script>