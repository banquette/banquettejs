<script>
import { h } from 'vue';

export default {
    name: 'i-material-view-comfy-alt',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 18h16V6H4v12zm9-11h4v4h-4V7zm0 6h4v4h-4v-4zM7 7h4v4H7V7zm0 6h4v4H7v-4z","opacity":"0.3"},[]),h('path',{d:"M7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z"},[]),h('path',{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 4v16h20V4H2zm9 13H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9.5 13h-3c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5zm0-6h-3c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5zm6 6h-3c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5zm0-6h-3c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z"},[]),h('path',{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 13H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z"},[])]);
    }
}
</script>