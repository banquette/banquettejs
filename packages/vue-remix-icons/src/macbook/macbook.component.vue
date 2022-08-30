<script>
import { h } from 'vue';

export default {
    name: 'i-remix-macbook',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '1 3 22 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M4 5v11h16V5H4zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2V4.007zM1 19h22v2H1v-2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '1 3 22 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M2 4.007C2 3.45 2.455 3 2.992 3h18.016c.548 0 .992.45.992 1.007V17H2V4.007zM1 19h22v2H1v-2z"},[])]);
    }
}
</script>