import * as components from './components';

export const pharos = {
    install(Vue, options = {}) {
        for (const componentName in components) {
            const component = components[componentName];
            Vue.component(component.name, component);
          }
    }
}