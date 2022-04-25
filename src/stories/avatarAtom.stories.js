import '@/assets/css/tailwind.css';

import AvatarAtom from '@/components/atoms/AvatarAtom.vue';

export default {
  title: 'Design System/Atoms/AvatarAtom',
};

export const asDefault = () => ({
  components: { AvatarAtom },
  template:
  `
  <div class="flex flex-col space-y-4">
    <div>
      <avatar-atom />
    </div>
    <div class="dark">
      <avatar-atom />
    </div>
  </div>
  `,
});
