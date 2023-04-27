<script>
import { h } from 'vue';

export default {
    name: 'i-remix-notification-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm4.5 3h5a2.5 2.5 0 1 1-5 0z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM9.5 21h5a2.5 2.5 0 1 1-5 0z"},[])]);
    }
}
</script>