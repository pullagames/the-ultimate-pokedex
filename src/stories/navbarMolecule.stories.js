import '@/assets/css/tailwind.css';

import NavbarMolecule from '@/components/molecules/NavbarMolecule.vue';

export default {
  title: 'Design System/Molecules/Navbar',
};

export const asDefault = () => ({
  components: { NavbarMolecule },
  template:
  `
  <div class="flex flex-col space-y-4">
    <div>
      <navbar-molecule />
    </div>
    <div class="dark">
      <navbar-molecule />
    </div>
  </div>
  `,
});
