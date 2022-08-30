<script>
import { h } from 'vue';

export default {
    name: 'i-remix-coupon-4',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M10 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a2 2 0 1 0 4 0h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a2 2 0 1 0-4 0zm-1.465-2A3.998 3.998 0 0 1 12 17c1.48 0 2.773.804 3.465 2H20V5h-4.535A3.998 3.998 0 0 1 12 7a3.998 3.998 0 0 1-3.465-2H4v14h4.535zM6 8h2v8H6V8zm10 0h2v8h-2V8z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M10 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a2 2 0 1 0 4 0h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a2 2 0 1 0-4 0zM6 8v8h2V8H6zm10 0v8h2V8h-2z"},[])]);
    }
}
</script>