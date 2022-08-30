<script>
import { h } from 'vue';

export default {
    name: 'i-material-event-seat',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M9 5h6v7H9z","opacity":"0.3"},[]),h('path',{d:"M4 21h2v-4h12v4h2v-6H4zM17 5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v9h10V5zm-2 7H9V5h6v7zm4-2h3v3h-3zM2 10h3v3H2z"},[])]);
if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M4 21h3v-3h10v3h3v-6H4v6zm15-11h3v3h-3v-3zM2 10h3v3H2v-3zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M5.5 21c.83 0 1.5-.67 1.5-1.5V18h10v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2.5c0 .83.67 1.5 1.5 1.5zM20 10h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1zM3 10h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1zm14 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M15 5v7H9V5h6m0-2H9c-1.1 0-2 .9-2 2v9h10V5c0-1.1-.9-2-2-2zm7 7h-3v3h3v-3zM5 10H2v3h3v-3zm15 5H4v6h2v-4h12v4h2v-6z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 3 20 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h3v3h-3v-3zM2 10h3v3H2v-3zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"},[])]);
    }
}
</script>