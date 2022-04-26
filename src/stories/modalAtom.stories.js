import '@/assets/css/tailwind.css';

import ModalAtom from '@/components/atoms/ModalAtom.vue';

export default {
  title: 'Design System/Atoms/ModalAtom',
};

export const asDefault = () => ({
  components: { ModalAtom },
  template:
  `
  <div class="flex flex-col space-y-4">
    <div>
      <modal-atom>
        <template #title>
          modal title
        </template>
        <template #content>
          modal content
        </template>
        <template #footer>
          modal footer
        </template>
      </modal-atom>
    </div>
    <div class="dark">
      <modal-atom>
        <template #title>
          modal title
        </template>
        <template #content>
          modal content
        </template>
        <template #footer>
          modal footer
        </template>
      </modal-atom>
    </div>
  </div>
  `,
});
