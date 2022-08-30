<script>
import { h } from 'vue';

export default {
    name: 'i-material-autofps-select',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12.03 6.3h-.06l-1.02 2.89h2.1zM4 22c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1z"},[]),h('path',{d:"M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0-10c.38 0 .71.23.85.59l2.12 5.65a.56.56 0 0 1-.53.76c-.24 0-.45-.15-.53-.38l-.49-1.41h-2.83l-.5 1.41a.564.564 0 1 1-1.06-.38l2.12-5.65c.14-.36.47-.59.85-.59zM8 22c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1zm4 0c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1zm3-4v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 3 18 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12.03 6.3h-.06l-1.02 2.89h2.1zM3 17h2v5H3z"},[]),h('path',{d:"M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm-.63-10h1.25l2.63 7h-1.21l-.63-1.79h-2.83L9.96 12H8.74l2.63-7zM7 17h2v5H7zm4 0h2v5h-2zm4 0h6v5h-6z"},[])]);
    }
}
</script>