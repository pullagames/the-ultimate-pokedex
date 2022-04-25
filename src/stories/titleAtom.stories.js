import '@/assets/css/tailwind.css';

import TitleAtom from '../components/atoms/TitleAtom.vue';

export default {
  title: 'Design System/Atoms/Title',
};

export const asDefault = () => ({
  components: { TitleAtom },
  template: '<title-atom />',
});
