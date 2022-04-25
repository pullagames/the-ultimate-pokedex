import '@/assets/css/tailwind.css';

import InputAtom from '../components/atoms/InputAtom.vue';

export default {
  title: 'Design System/Atoms/Input',
};

export const asDefault = () => ({
  components: { InputAtom },
  template:
  `
  <div class="flex flex-col space-y-4 w-16">
    <div>
      <input-atom type="text" placeholder="Default input atom light" />
    </div>
    <div class="dark">
      <input-atom type="text" placeholder="Default input atom dark" />
    </div>
  </div>
  `,
});
