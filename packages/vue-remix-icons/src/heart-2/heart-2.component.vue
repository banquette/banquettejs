<script>
import { h } from 'vue';

export default {
    name: 'i-remix-heart-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18.48' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.243 4.757a6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464 5.998 5.998 0 0 1 8.242.228zM5.172 6.172a4 4 0 0 0-.192 5.451L12 18.654l7.02-7.03a4 4 0 0 0-5.646-5.64l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069a4 4 0 0 0-5.328.295z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18.49' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.243 4.757a6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6.002 6.002 0 0 1 6.74-9.553L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013a5.998 5.998 0 0 1 8.242.228z"},[])]);
    }
}
</script>