import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HelloWorld from '../src/components/HelloWorld.vue';

storiesOf('HelloWorld', module).add('to Storybook', () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />'
}));
