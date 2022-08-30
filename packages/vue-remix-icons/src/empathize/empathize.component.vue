<script>
import { h } from 'vue';

export default {
    name: 'i-remix-empathize',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '4.46 1 15.07 21.59' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M18.364 10.98a4 4 0 0 1 0 5.656l-5.657 5.657a1 1 0 0 1-1.414 0l-5.657-5.657a4 4 0 0 1 5.657-5.657l.706.707.708-.707a4 4 0 0 1 5.657 0zM7.05 12.392a2.003 2.003 0 0 0 0 2.829l4.95 4.95 4.95-4.95c.78-.781.78-2.048 0-2.829a2.002 2.002 0 0 0-2.83.002l-2.122 2.118-2.12-2.12a2.001 2.001 0 0 0-2.828 0zM12 1c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 3z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4.46 1 15.07 21.59' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M18.364 10.98a4 4 0 0 1 0 5.656l-5.657 5.657a1 1 0 0 1-1.414 0l-5.657-5.657a4 4 0 0 1 5.657-5.657l.706.707.708-.707a4 4 0 0 1 5.657 0zM12 1c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"},[])]);
    }
}
</script>