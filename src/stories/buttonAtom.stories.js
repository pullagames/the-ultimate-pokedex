import '@/assets/css/tailwind.css';

import ButtonAtom from '../components/atoms/ButtonAtom.vue';

export default {
  title: 'Design System/Atoms/Button',
};

export const asDefault = () => ({
  components: { ButtonAtom },
  template:
  `
  <div class="flex flex-col space-y-4 w-16">
    <div>
      <button-atom text="Default button atom" />
    </div>
    <div>
      <button-atom  is-disabled text="Default button atom disabled" />
    </div>
    <div>
      <button-atom  is-link  text="Default link button atom" />
    </div>
    <div>
      <button-atom is-link is-disabled text="Default link button atom disabled" />
    </div>
  </div>
  `,
});
