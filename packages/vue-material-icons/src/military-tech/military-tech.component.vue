<script>
import { h } from 'vue';

export default {
    name: 'i-material-military-tech',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{"opacity":"0.3",d:"m13 11.07 2-1.2V4h-2zM9 4v5.87l2 1.2V4z"},[]),h('path',{d:"M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86zm-6 .64-2-1.2V4h2v7.07zm4-1.2-2 1.2V4h2v5.87z"},[])]);
if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 11V2H7v9l4.66 2.8-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34L17 11zm-4 1.23-1 .6-1-.6V3h2v9.23z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 19.46' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 10.43V3c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v7.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-2.22.19c-.46.04-.64.59-.3.88l1.69 1.46-.51 2.18c-.1.43.37.77.75.54L12 20.23l1.91 1.15c.38.23.85-.11.75-.54l-.51-2.18 1.69-1.46c.33-.29.16-.84-.29-.88l-2.22-.19-.99-2.34 4.18-2.51c.3-.17.48-.49.48-.85zm-4 1.8-1 .6-1-.6V3h2v9.23z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86zm-6 .64-2-1.2V4h2v7.07zm4-1.2-2 1.2V4h2v5.87z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '7 2 10 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86zm-4 1.8-1 .6-1-.6V3h2v9.23z"},[])]);
    }
}
</script>