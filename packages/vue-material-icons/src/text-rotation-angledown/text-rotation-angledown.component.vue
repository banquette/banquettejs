<script>
import { h } from 'vue';

export default {
    name: 'i-material-text-rotation-angledown',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '3.4 3.7 16.19 17.3' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M15 20.5v-2.54c0-.45-.54-.67-.85-.35l-.56.56L5.1 9.68a.996.996 0 1 0-1.41 1.41l8.49 8.49-.56.56c-.32.32-.1.86.34.86h2.54c.28 0 .5-.23.5-.5zM11.25 8.48l3.54 3.54-.67 1.6c-.15.36-.07.77.21 1.05.49.49 1.31.32 1.57-.32l3.61-9.09c.17-.42.07-.91-.25-1.23-.32-.32-.8-.42-1.23-.25l-9.1 3.6a.957.957 0 0 0-.32 1.57c.27.27.68.35 1.04.2l1.6-.67zm6.59-3.05-2.23 4.87-2.64-2.64 4.87-2.23z"},[])]);
if (this.version === 'outlined' || this.version === 'sharp' || this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '2.98 3.5 16.79 17.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M15 21v-4.24l-1.41 1.41-9.2-9.19-1.41 1.41 9.19 9.19L10.76 21H15zM11.25 8.48l3.54 3.54-.92 2.19 1.48 1.48 4.42-11.14-1.06-1.05L7.57 7.92 9.06 9.4l2.19-.92zm6.59-3.05-2.23 4.87-2.64-2.64 4.87-2.23z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2.6 3.85 16.8 17.15' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m19.4 4.91-1.06-1.06L7.2 8.27l1.48 1.48 2.19-.92 3.54 3.54-.92 2.19 1.48 1.48L19.4 4.91zm-6.81 3.1 4.87-2.23-2.23 4.87-2.64-2.64zM14.27 21v-4.24l-1.41 1.41-8.84-8.84-1.42 1.42 8.84 8.84L10.03 21h4.24z"},[])]);
    }
}
</script>