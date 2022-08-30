<script>
import { h } from 'vue';

export default {
    name: 'i-remix-foggy',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '1.02 2.05 21.98 18.95' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M1.584 13.007a8 8 0 0 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908h-2.013A3.5 3.5 0 0 0 15 10.05V10a6 6 0 1 0-11.193 3.007H1.584zM4 19h17v2H4v-2zm-2-4h21v2H2v-2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '1.02 2.05 21.98 18.95' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M1.584 13.007a8 8 0 0 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908H1.584zM4 19h17v2H4v-2zm-2-4h21v2H2v-2z"},[])]);
    }
}
</script>