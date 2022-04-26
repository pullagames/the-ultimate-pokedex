import '@/assets/css/tailwind.css';

import LoaderAtom from '@/components/atoms/LoaderAtom.vue';

export default {
  title: 'Design System/Atoms/LoaderAtom',
};

export const asDefault = () => ({
  components: { LoaderAtom },
  template:
  '<loader-atom />',
});
