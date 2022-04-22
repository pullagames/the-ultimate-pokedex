import '@/assets/css/tailwind.css';

import ResponsiveWrapper from '@/components/core/ResponsiveWrapper.vue';

export default {
  title: 'Design System/Core/ResponsiveWrapper',
};

export const asDefault = () => ({
  components: { ResponsiveWrapper },
  template: '<responsive-wrapper><template #content> Content Here </template></responsive-wrapper>',
});
