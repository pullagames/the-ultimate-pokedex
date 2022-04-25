import '@/assets/css/tailwind.css';

import SubtitleAtom from '../components/atoms/SubtitleAtom.vue';

export default {
  title: 'Design System/Atoms/Subtitle',
};

export const asDefault = () => ({
  components: { SubtitleAtom },
  template: '<subtitle-atom />',
});
