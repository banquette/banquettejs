<script>
import { h } from 'vue';

export default {
    name: 'i-material-local-drink',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M7 20.01 17 20l1.1-10H5.89L7 20.01zm5-9.41s3 3.4 3 5.4c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-2 3-5.4 3-5.4z","opacity":"0.3"},[]),h('path',{d:"M5.01 20.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3l2.01 18.23zM17 20l-10 .01L5.89 10H18.1L17 20zm1.76-16-.43 4H5.67l-.44-4h13.53zM12 19c1.66 0 3-1.34 3-3 0-2-3-5.4-3-5.4S9 14 9 16c0 1.66 1.34 3 3 3zm0-5.09c.59.91 1 1.73 1 2.09 0 .55-.45 1-1 1s-1-.45-1-1c0-.37.41-1.19 1-2.09z"},[])]);
if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m3 2 2.21 20H18.8L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '3.23 2 17.54 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M5.23 2C4.04 2 3.11 3.04 3.24 4.22l1.77 16.01C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77l1.77-16.01c.13-1.18-.8-2.22-1.99-2.22H5.23zM12 19c-1.66 0-3-1.34-3-3 0-1.55 1.81-3.95 2.62-4.94.2-.25.57-.25.77 0 .81 1 2.62 3.39 2.62 4.94A3.01 3.01 0 0 1 12 19zm6.33-11H5.67l-.32-2.89c-.06-.59.4-1.11 1-1.11h11.3c.59 0 1.06.52.99 1.11L18.33 8z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m3 2 2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm14 18-10 .01L5.89 10H18.1L17 20zm1.33-12H5.67l-.44-4h13.53l-.43 4zM12 19c1.66 0 3-1.34 3-3 0-2-3-5.4-3-5.4S9 14 9 16c0 1.66 1.34 3 3 3zm0-5.09c.59.91 1 1.73 1 2.09 0 .55-.45 1-1 1s-1-.45-1-1c0-.37.41-1.19 1-2.09z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m3 2 2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"},[])]);
    }
}
</script>