/* eslint-disable import/no-extraneous-dependencies */
import '@/assets/css/tailwind.css';
import MyButton from '../components/MyButton.vue';

export default {
  title: 'Button',
};

export const withText = () => ({
  components: { MyButton },
  template: '<my-button>Hello Button</my-button>',
});
