<script>
import { h } from 'vue';

export default {
    name: 'i-material-system-security-update-warning',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '5 1 14 22' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M11 7h2v6h-2V7zm0 8h2v2h-2v-2z","opacity":"0.3"},[]),h('path',{d:"M11 15h2v2h-2zm0-8h2v6h-2z"},[]),h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1z"},[]),h('path',{d:"M7 21h10v-1H7v1zM7 3v1h10V3H7z","opacity":"0.3"},[])]);
if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '5.01 1 13.99 22' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M11 15h2v2h-2zm0-8h2v6h-2z"},[]),h('path',{d:"M5.01 1v22H19V1H5.01zM17 18H7V6h10v12z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '5.01 1 13.99 22' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('circle',{"cx":"12","cy":"16",r:"1"},[]),h('path',{d:"M12 13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z"},[]),h('path',{d:"M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '5 1 14 22' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M11 15h2v2h-2zm0-8h2v6h-2z"},[]),h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '5.01 1 13.99 22' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M11 15h2v2h-2zm0-8h2v6h-2z"},[]),h('path',{d:"M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12z"},[])]);
    }
}
</script>