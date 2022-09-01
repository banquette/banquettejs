<script>
import { h } from 'vue';

export default {
    name: 'i-remix-capsule',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2.46 2.46 19.07 19.07' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.778 4.222a6 6 0 0 1 0 8.485l-7.07 7.071a6.001 6.001 0 0 1-8.486-8.485l7.07-7.071a6.001 6.001 0 0 1 8.486 0zm-5.656 11.313L8.465 9.878l-2.829 2.83a4 4 0 1 0 5.657 5.656l2.829-2.83zm4.242-9.899a4 4 0 0 0-5.657 0L9.88 8.464l5.657 5.657 2.828-2.828a4 4 0 0 0 0-5.657z"},[])]);
return h('svg',{"viewBox":c ? '2.46 2.46 19.07 19.07' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.778 4.222a6 6 0 0 1 0 8.485l-2.122 2.12-4.949 4.951a6 6 0 0 1-8.485-8.485l7.07-7.071a6.001 6.001 0 0 1 8.486 0zm-4.95 10.606L9.172 9.172l-3.536 3.535a4 4 0 0 0 5.657 5.657l3.535-3.536z"},[])]);
    }
}
</script>