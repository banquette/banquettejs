<script>
import { h } from 'vue';

export default {
    name: 'i-remix-nurse',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '4.06 2 15.88 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 15a8.001 8.001 0 0 1 7.938 7H4.062A8.001 8.001 0 0 1 12 15zm-1.813 2.28A6.025 6.025 0 0 0 6.8 20H12l-1.813-2.72zm3.627 0L12 20h5.199a6.02 6.02 0 0 0-3.385-2.72zM18 2v6A6 6 0 1 1 6 8V2h12zM8 8c0 2.21 1.79 4 4 4s4-1.79 4-4H8zm8-4H8v2h8V4z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4.06 2 15.88 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M14.956 15.564A8.008 8.008 0 0 1 19.938 22H4.062a8.008 8.008 0 0 1 4.982-6.436L12 20l2.956-4.436zM18 2v6A6 6 0 1 1 6 8V2h12zm-2 6H8c0 2.21 1.79 4 4 4s4-1.79 4-4z"},[])]);
    }
}
</script>