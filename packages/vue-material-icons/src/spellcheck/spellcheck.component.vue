<script>
import { h } from 'vue';

export default {
    name: 'i-material-spellcheck',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '2.91 3 19.67 19.09' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13.12 16c.69 0 1.15-.69.9-1.32L9.77 3.87a1.363 1.363 0 0 0-2.54 0L2.98 14.68c-.25.63.22 1.32.9 1.32.4 0 .76-.25.91-.63L5.67 13h5.64l.9 2.38c.15.37.51.62.91.62zm-6.69-5L8.5 5.48 10.57 11H6.43zm14.46 1.29-7.39 7.39-2.97-2.97a.996.996 0 1 0-1.41 1.41l3.68 3.68c.39.39 1.02.39 1.41 0l8.08-8.09a.996.996 0 0 0 0-1.41.993.993 0 0 0-1.4-.01z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2.46 3 20.54 19.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"},[])]);
    }
}
</script>