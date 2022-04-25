import '@/assets/css/tailwind.css';

import NavbarItemAtom from '@/components/atoms/NavbarItemAtom.vue';

export default {
  title: 'Design System/Atoms/NavbarItemAtom',
};

export const asDefault = () => ({
  components: { NavbarItemAtom },
  template:
  `
  <div class="flex flex-col space-y-4">
    <div class="flex space-x-2">
      <navbar-item-atom active />
      <navbar-item-atom />
      <navbar-item-atom />
    </div>
    <div class="dark flex space-x-2">
      <navbar-item-atom active />
      <navbar-item-atom />
      <navbar-item-atom />
    </div>
  </div>
  `,
});
