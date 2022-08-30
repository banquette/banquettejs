<script>
import { h } from 'vue';

export default {
    name: 'i-remix-sd-card-mini',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '4 2 16 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M8 4v5.793a2.5 2.5 0 0 1-.73 1.765L6 12.833V20h12V4H8zM7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.706l1.562-1.568A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1zm8 3h2v4h-2V5zm-3 0h2v4h-2V5zM9 5h2v4H9V5z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4 2 16 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.706l1.562-1.568A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1zm8 2v4h2V4h-2zm-3 0v4h2V4h-2zM9 4v4h2V4H9z"},[])]);
    }
}
</script>