import '@/assets/css/tailwind.css';

import TitleSubtitleMolecule from '../components/molecules/TitleSubtitleMolecule.vue';

export default {
  title: 'Design System/Molecules/TitleSubtitleMolecule',
};

export const asDefault = () => ({
  components: { TitleSubtitleMolecule },
  template: '<title-subtitle-molecule />',
});
