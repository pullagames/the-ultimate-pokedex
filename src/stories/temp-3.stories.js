import '@/assets/css/tailwind.css';
import MyButton from '../components/MyButton.vue';

export default {
  title: 'Design System/Pages/Button',
};

export const withText = () => ({
  components: { MyButton },
  template: '<my-button>Hello Button</my-button>',
});
