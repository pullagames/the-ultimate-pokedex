<template>
  <div class="flex flex-col space-y-2">
    <title-atom :text="title" />
    <subtitle-atom :text="subtitle" />
  </div>
</template>

<script>
import TitleAtom from '@/components/atoms/TitleAtom.vue';
import SubtitleAtom from '@/components/atoms/SubtitleAtom.vue';

export default {
  name: 'TitleSubtitleMolecule',
  components: {
    TitleAtom,
    SubtitleAtom,
  },
  props: {
    title: {
      type: String,
      default: 'Title atom',
    },
    subtitle: {
      type: String,
      default: 'Subtitle atom',
    },
  },
};
</script>
