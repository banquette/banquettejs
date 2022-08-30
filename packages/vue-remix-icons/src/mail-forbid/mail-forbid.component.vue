<script>
import { h } from 'vue';

export default {
    name: 'i-remix-mail-forbid',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 21 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m20 7.238-7.928 7.1L4 7.216V19h7.07a6.95 6.95 0 0 0 .604 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255a6.972 6.972 0 0 0-2-.965V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zm-2.794 15.708a3 3 0 0 0 4.001-4.001l-4.001 4zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 3 21 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m15.266 11.554 4.388-3.798-1.308-1.512-6.285 5.439-6.414-5.445-1.294 1.524 7.702 6.54A6.967 6.967 0 0 0 11 18c0 1.074.242 2.09.674 3H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255A6.968 6.968 0 0 0 18 11c-.97 0-1.894.197-2.734.554zm1.44 9.154a3 3 0 0 0 4.001-4.001l-4 4zm-1.414-1.415 4.001-4a3 3 0 0 0-4.001 4.001zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"},[])]);
    }
}
</script>