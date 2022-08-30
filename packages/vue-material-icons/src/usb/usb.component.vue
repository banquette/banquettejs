<script>
import { h } from 'vue';

export default {
    name: 'i-material-usb',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '4.8 1.33 14.21 20.87' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M18 7h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1v2h-3V5h1a.5.5 0 0 0 .4-.8l-2-2.67c-.2-.27-.6-.27-.8 0l-2 2.67a.5.5 0 0 0 .4.8h1v8H8v-2.07c.83-.44 1.38-1.36 1.14-2.43-.17-.77-.77-1.4-1.52-1.61C6.15 6.48 4.8 7.59 4.8 9c0 .85.5 1.56 1.2 1.93V13c0 1.1.9 2 2 2h3v3.05c-.86.45-1.39 1.42-1.13 2.49a2.204 2.204 0 0 0 4.34-.54c0-.85-.49-1.58-1.2-1.95V15h3c1.1 0 2-.9 2-2v-2c.55 0 1-.45 1-1V8C19 7.45 18.55 7 18 7z"},[])]);
if (this.version === 'outlined' || this.version === 'sharp' || this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '4.8 1 14.2 21.2' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2S4.8 7.79 4.8 9c0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95a2.2 2.2 0 0 0 4.4 0c0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4.8 1 14.2 21.2' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95a2.2 2.2 0 0 0 4.4 0c0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z"},[])]);
    }
}
</script>