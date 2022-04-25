import '@/assets/css/tailwind.css';

import HintAtom from '../components/atoms/HintAtom.vue';

export default {
  title: 'Design System/Atoms/Hint',
};

export const asDefault = () => ({
  components: { HintAtom },
  template:
  `
  <div class="flex flex-col space-y-4 w-16">
    <hint-atom text="Hint Atom 1"/>
    <hint-atom text="Hint Atom 2"/>
    <hint-atom text="Hint Atom 3"/>
  </div>
  `,
});
