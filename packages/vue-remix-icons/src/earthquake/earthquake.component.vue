<script>
import { h } from 'vue';

export default {
    name: 'i-remix-earthquake',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '1 1.35 22 19.65' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M5 21a1 1 0 0 1-.993-.883L4 20v-9H1l10.327-9.388a1 1 0 0 1 1.246-.08l.1.08L23 11h-3v9a1 1 0 0 1-.883.993L19 21H5zm7-17.298L6 9.156V19h4.357l1.393-1.5L8 14l5-3-2.5-2 3-3-.5 3 2.5 2-4 3 3.5 3-1.25 2H18V9.157l-6-5.455z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '1 1.35 22 19.65' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M11.327 1.612a1 1 0 0 1 1.246-.08l.1.08L23 11h-3v9a1 1 0 0 1-.883.993L19 21h-6.5l2.5-4-3.5-3 4-3L13 9l.5-3-3 3 2.5 2-5 3 3.75 3.5L8.5 21H5a1 1 0 0 1-.993-.883L4 20v-9H1l10.327-9.388z"},[])]);
    }
}
</script>