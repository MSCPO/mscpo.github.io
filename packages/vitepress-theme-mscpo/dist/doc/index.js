// vitepress styles ==> /dist/client/theme-default/styles
import vitepressTheme from 'vitepress/theme';
// for dev (prod should import .css)
import '../styles/index.scss';
import '../styles/rewrite/index.scss';
import VTLayout from './components/VTLayout.vue';
const DocsTheme = {
    ...vitepressTheme,
    Layout: VTLayout,
};
export * from 'vitepress/theme';
export default DocsTheme;
