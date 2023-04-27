<script>
import { h } from 'vue';

export default {
    name: 'i-material-arrow-forward-ios',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '7.01 2.61 10.74 18.76' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"},[])]);
return h('svg',{"viewBox":c ? '6.23 2 11.77 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"},[])]);
    }
}
</script>