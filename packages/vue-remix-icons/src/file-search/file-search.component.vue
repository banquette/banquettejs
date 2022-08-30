<script>
import { h } from 'vue';

export default {
    name: 'i-remix-file-search',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zm10.529 11.454a4.002 4.002 0 0 1-4.86-6.274 4 4 0 0 1 6.274 4.86l2.21 2.21-1.414 1.415-2.21-2.21zm-.618-2.032a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-2.471 12.446 2.21 2.21 1.415-1.413-2.21-2.21a4.002 4.002 0 0 0-6.276-4.861 4 4 0 0 0 4.861 6.274zm-.618-2.032a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828z"},[])]);
    }
}
</script>