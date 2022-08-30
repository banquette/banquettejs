<script>
import { h } from 'vue';

export default {
    name: 'i-material-local-pharmacy',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 1 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M5.11 19h13.78l-1.79-5.37-.21-.63.21-.63L18.89 7H5.11l1.79 5.37.21.63-.21.63L5.11 19zM8 12h3V9h2v3h3v2h-3v3h-2v-3H8v-2z","opacity":"0.3"},[]),h('path',{d:"M3 21h18v-2l-2-6 2-6V5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2zm3.9-8.63L5.11 7h13.78l-1.79 5.37-.21.63.21.63L18.89 19H5.11l1.79-5.37.21-.63-.21-.63zM11 17h2v-3h3v-2h-3V9h-2v3H8v2h3z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '3.1 1.35 17.79 19.65' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M18.89 5h-.53l.71-1.97c.24-.65-.1-1.37-.75-1.6-.65-.24-1.37.1-1.61.75L15.69 5H5.1a2 2 0 0 0-1.9 2.63L5 13l-1.79 5.37C2.77 19.66 3.74 21 5.1 21h13.78c1.36 0 2.33-1.34 1.9-2.63L19 13l1.78-5.37C21.21 6.34 20.25 5 18.89 5zM15 14h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 1 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-3.9 8.63L18.89 19H5.11l1.79-5.37.21-.63-.21-.63L5.11 7h13.78l-1.79 5.37-.21.63.21.63zM13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 1 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"},[])]);
    }
}
</script>