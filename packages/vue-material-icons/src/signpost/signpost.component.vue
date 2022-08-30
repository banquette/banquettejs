<script>
import { h } from 'vue';

export default {
    name: 'i-material-signpost',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M6 6h11.17l1 1-1 1H6V6zm12 10H6.83l-1-1 1-1H18v2z","opacity":"0.3"},[]),h('path',{d:"M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7v-2zM6 6h11.17l1 1-1 1H6V6zm12 10H6.83l-1-1 1-1H18v2z"},[])]);
if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '3.62 2 16.77 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 2c-.55 0-1 .45-1 1v1H5.5C4.67 4 4 4.67 4 5.5v3c0 .83.67 1.5 1.5 1.5H11v2H6.62c-.4 0-.78.16-1.06.44l-1.5 1.5a1.49 1.49 0 0 0 0 2.12l1.5 1.5c.28.28.66.44 1.06.44H11v3c0 .55.45 1 1 1s1-.45 1-1v-3h5.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H13v-2h4.38c.4 0 .78-.16 1.06-.44l1.5-1.5c.59-.59.59-1.54 0-2.12l-1.5-1.5c-.28-.28-.66-.44-1.06-.44H13V3c0-.55-.45-1-1-1z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7v-2zM6 6h11.17l1 1-1 1H6V6zm12 10H6.83l-1-1 1-1H18v2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7z"},[])]);
    }
}
</script>