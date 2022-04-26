<template>
  <div class=" dark:bg-gray-800 bg-white border-b border-gray-200 dark:border-gray-700 p-4 w-full">
    <div class="lg:container mx-auto flex justify-between items-center">
      <div class=" space-x-16 hidden lg:flex">
        <div v-if="$route" class="flex space-x-4">
          <router-link :to="{ path: '/'}">
            <navbar-item-atom text="Pokedex" :active="$route.name === 'home'" />
          </router-link>
          <router-link :to="{ path: '/team'}">
            <navbar-item-atom text="Mon équipe" :active="$route.name === 'team'" />
          </router-link>
        </div>
        <div v-else class="flex space-x-4">
          <navbar-item-atom text="Pokedex" active />
          <navbar-item-atom text="Mon équipe" />
        </div>
      </div>
      <div class="w-full lg:w-fit">
        <div class="flex w-full lg:w-fit justify-between lg:justify-start items-center space-x-4">
          <div class="order-2 lg:order-1 font-semibold text-gray-800 dark:text-gray-400">
            {{ me && me.username || 'Username' }}
          </div>
          <avatar-atom class="hidden lg:block lg:order-1" />
          <transition name="fade" mode="out-in">
            <icon-atom class="order-1 lg:order-3" key="dark" v-if="isDarkMode === 'true'" :action="() => setDarkMode('false')">
              <template>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2.75V4.25" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L16.0659 7.93416" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 12.0001L19.75 12.0001" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 17.2501L16.0659 16.066" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19.75V21.25" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.9341 16.0659L6.74996 17.25" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.25 12.0001L2.75 12.0001" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.93405 7.93423L6.74991 6.75003" />
                </svg>
              </template>
            </icon-atom>

            <icon-atom class="order-1 lg:order-3" key="light" v-if="isDarkMode === 'false'" :action="() => setDarkMode('true')">
              <template>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z" />
                </svg>
              </template>
            </icon-atom>
          </transition>
          <icon-atom class="order-2 lg:order-4" :action="() => logout()">
            <template>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 8.75L19.25 12L15.75 15.25" />
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H10.75" />
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25" />
              </svg>
            </template>
          </icon-atom>
        </div>
      </div>
    </div>
    <div v-if="$route" class="flex justify-center mt-4 space-x-4 lg:hidden">
      <router-link :to="{ path: '/'}">
        <navbar-item-atom text="Pokedex" :active="$route.name === 'home'" />
      </router-link>
      <router-link :to="{ path: '/team'}">
        <navbar-item-atom text="Mon équipe" :active="$route.name === 'team'" />
      </router-link>
    </div>
  </div>
</template>

<script>
import IconAtom from '@/components/atoms/IconAtom.vue';
import AvatarAtom from '@/components/atoms/AvatarAtom.vue';
import NavbarItemAtom from '@/components/atoms/NavbarItemAtom.vue';

export default {
  components: {
    AvatarAtom,
    NavbarItemAtom,
    IconAtom,
  },
  name: 'NavbarMolecule',
  component: {
    AvatarAtom,
  },
  computed: {
    me() {
      return this.$store?.state?.auth?.me || '';
    },
    isDarkMode() {
      return this.$store?.state?.theme?.isDarkMode || '';
    },
  },
  methods: {
    setDarkMode(value) {
      this.$store.dispatch('theme/setDarkMode', value);
    },
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>
