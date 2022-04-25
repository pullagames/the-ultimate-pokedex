import '@/assets/css/tailwind.css';

import AuthCard from '@/components/atoms/AuthCardAtom.vue';

export default {
  title: 'Design System/Atoms/AuthCard',
};

export const asDefault = () => ({
  components: { AuthCard },
  template:
  `
  <div class="flex flex-col space-y-4">
    <div>
      <auth-card>
        <template #contentSlotOne>
          slot 1 - auth-card-light
        </template>
        <template #contentSlotTwo>
          slot 2 - auth-card-light
        </template>
      </auth-card>
    </div>
    <div class="dark">
      <auth-card>
        <template #contentSlotOne>
          slot 1 - auth-card-dark
        </template>
        <template #contentSlotTwo>
          slot 2 - auth-card-dark
        </template>
      </auth-card>
    </div>
  </div>
  `,
});
