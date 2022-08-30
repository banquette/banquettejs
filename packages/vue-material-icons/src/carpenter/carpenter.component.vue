<script>
import { h } from 'vue';

export default {
    name: 'i-material-carpenter',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '3.11 1.5 17.2 20.39' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M5.71 5.62 7 4.33l8.49 8.49-2.81 2.81L5.71 5.62z","opacity":"0.3"},[]),h('path',{d:"M19.73 14.23 7 1.5 3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zM5.71 5.62 7 4.33l8.49 8.49-2.81 2.81L5.71 5.62zm8.36 14.26-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24z"},[])]);
if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '3.11 1.5 18.03 21.21' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M7 1.5 3.11 5.39l8.13 11.67-1.41 1.41 4.24 4.24 7.07-7.07L7 1.5zm5.66 16.97 4.24-4.24 1.41 1.41-4.24 4.24-1.41-1.41z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '3.41 1.92 16.91 19.97' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19.73 14.23 7.71 2.21a.996.996 0 0 0-1.41 0L3.7 4.8a1 1 0 0 0-.11 1.28l7.65 10.98c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zm-5.66 5.65-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '3.11 1.5 17.2 20.39' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19.73 14.23 7 1.5 3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zM5.71 5.62 7 4.33l8.49 8.49-2.81 2.81L5.71 5.62zm8.36 14.26-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3.11 1.5 17.2 20.39' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19.73 14.23 7 1.5 3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zm-5.66 5.65-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24z"},[])]);
    }
}
</script>