<script>
import { h } from 'vue';

export default {
    name: 'i-remix-image-edit',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 3 20.19 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 3a1 1 0 0 1 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.415 1.413L9 11.93l-4 3.999V19h10.533l.708.001 1.329-1.33L18.9 19h.1v-2.758l2-2V20a1 1 0 0 1-1 1H4c-.55 0-1-.45-1-1V4a1 1 0 0 1 1-1h16zm1.778 4.808 1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 15.5 7z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 3 20.19 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 3a1 1 0 0 1 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16zm1.778 4.808 1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 15.5 7z"},[])]);
    }
}
</script>