export * from './alert';
export * from './button';
export * from './debug';
export * from './dialog';
export * from './dropdown';
export * from './form';
export * from './icon';
export * from './misc';
export * from './popover';
export * from './popover-confirm';
export * from './progress';
export * from './table';
export * from './tabs';
export * from './tag';
export * from './tree';

console.error(`Avoid importing components from the index of the package, use specific imports instead. For example, instead of doing "import { ButtonComponent } from '@banquette/vue-ui';", do "import { ButtonComponent } from '@vue-ui/button'".`);
