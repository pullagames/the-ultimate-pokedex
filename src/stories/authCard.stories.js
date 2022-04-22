import '@/assets/css/tailwind.css';

import AuthCard from '@/components/atoms/AuthCard.vue';

export default {
  title: 'Design System/Atoms/AuthCard',
};

export const asDefault = () => ({
  components: { AuthCard },
  template: '<auth-card></auth-card>',
});
