<script>
import { h } from 'vue';

export default {
    name: 'i-remix-question-mark',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '6 2 12 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 19a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 12 19zm0-17a6 6 0 0 1 6 6c0 2.165-.753 3.29-2.674 4.923C13.399 14.56 13 15.297 13 17h-2c0-2.474.787-3.695 3.031-5.601C15.548 10.11 16 9.434 16 8c0-2.21-1.79-4-4-4S8 5.79 8 8v1H6V8a6 6 0 0 1 6-6z"},[])]);
    }
}
</script>