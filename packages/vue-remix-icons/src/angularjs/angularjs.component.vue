<script>
import { h } from 'vue';

export default {
    name: 'i-remix-angularjs',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2.7 2 18.6 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m17.523 16.65.49-.27 1.118-9.71L12 4.123 4.869 6.669l1.119 9.71.473.263L12 4.21l5.523 12.44zm-1.099.61h-.798l-1.169-2.92H9.523l-1.17 2.92h-.777L12 19.713l4.424-2.453zM12 2l9.3 3.32-1.418 12.31L12 22l-7.882-4.37L2.7 5.32 12 2zm1.698 10.54L12 8.45l-1.698 4.09h3.396z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2.7 2 18.6 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 2 9.3 3.32-1.418 12.31L12 22l-7.882-4.37L2.7 5.32 12 2zm0 2.21L6.186 17.26h2.168l1.169-2.92h4.934l1.17 2.92h2.167L12 4.21zm1.698 8.33h-3.396L12 8.45l1.698 4.09z"},[])]);
    }
}
</script>