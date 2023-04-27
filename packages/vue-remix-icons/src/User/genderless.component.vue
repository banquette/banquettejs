<script>
import { h } from 'vue';

export default {
    name: 'i-remix-genderless',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '4.49 1 15 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 7.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934V1h2v6.066zM12 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"},[])]);
return h('svg',{"viewBox":c ? '4.49 1 15 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 7.066V1h2v6.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934z"},[])]);
    }
}
</script>