<template>
  <div id="auth-view" class="h-full lg:h-fit">
    <div class="w-full h-full">
      <auth-card-atom>
        <template #contentSlotOne>
          <div class="flex justify-center items-center h-full">
            <img src="@/assets/logo.png" alt="logo">
          </div>
        </template>
        <template #contentSlotTwo>
          <div class="flex flex-col justify-between h-full lg:h-auto lg:justify-start lg:space-y-8">
            <div class="flex justify-between">
              <title-subtitle-molecule
                :title="currentForm === 'login' ? 'Connexion' : 'Inscription'"
                :subtitle="currentForm === 'login' ? 'Conntectez vous à votre compte d\'entraîneur pokémon.' : 'Configurons votre compte d\'entraineur pokémon ensemble.'"
              />
              <icon-atom v-if="isDarkMode === 'true'" :action="() => setDarkMode('false')">
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
              <icon-atom v-if="isDarkMode === 'false'" :action="() => setDarkMode('true')">
                <template>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z" />
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z" />
                  </svg>
                </template>
              </icon-atom>
            </div>

            <div v-if="currentForm === 'register'" class="flex flex-col space-y-4">
              <input-atom
                @getValue="formRegister.username = $event"
                type="text"
                placeholder="Surnom"
              />
              <input-atom
                @getValue="formRegister.email = $event"
                type="text"
                placeholder="Email"
              />
              <input-atom
                @getValue="formRegister.password = $event"
                type="password"
                placeholder="Mot de passe"
              />
              <input-atom
                @getValue="formRegister.confirmation = $event"
                type="password"
                placeholder="Confirmation"
              />
              <div class="flex flex-col">
                <hint-atom
                  v-if="!validationRegister.isAnyEmptyField"
                  text="Tous les champs doivent être renseignés."
                />
                <hint-atom
                  v-if="!validationRegister.isEmailValid"
                  text="L'adresse électronique n'est pas valide."
                />
                <hint-atom
                  v-if="!validationRegister.isPasswordMatch"
                  text="Le mot de passe ainsi que la confirmation ne correspondent pas."
                />
                <hint-atom
                  v-if="!validationRegister.isStrongPassword"
                  text="Le mot de passe doit contenir 8 caractères, 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère particulier."
                />
              </div>
            </div>
            <div v-else class="flex flex-col space-y-4">
              <input-atom
                @getValue="formLogin.username = $event"
                type="text"
                placeholder="Surnom"
              />
              <input-atom
                @getValue="formLogin.password = $event"
                type="password"
                placeholder="Mot de passe"
              />
              <div class="flex flex-col">
                <hint-atom
                  v-if="!validationLogin.isAnyEmptyField"
                  text="Tous les champs doivent être renseignés."
                />
                <hint-atom
                  v-if="loginError"
                  :text="loginError"
                />
              </div>
            </div>
            <div class="flex flex-col space-y-2">
              <button-atom
                v-if="currentForm === 'register'"
                :is-disabled="!validationRegister.anyError"
                :action="register"
                text="Créer un compte"
              />
              <button-atom
                v-else
                :is-disabled="!validationLogin.anyError"
                :action="login"
                text="Connexion"
              />
              <div class="flex justify-end items-center space-x-2">
                <div class="text-sm">
                  {{ currentForm === 'login' ? 'Pas encore entraineur  ?' : 'Déja entraineur ?' }}
                </div>
                <button-atom
                  v-if="currentForm === 'register'"
                  text="Connexion"
                  is-link
                  :action="() => changeForm('login')"
                />
                <button-atom
                  v-else
                  text="Inscription"
                  is-link
                  :action="() => changeForm('register')"
                />
              </div>
            </div>
          </div>
        </template>
      </auth-card-atom>
      <div class="hidden lg:block text-center mt-2 font-semibold text-xs">
        © 2022 The Ultimate Pokedex - All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
import AuthCardAtom from '@/components/atoms/AuthCardAtom.vue';
import ButtonAtom from '@/components/atoms/ButtonAtom.vue';
import IconAtom from '@/components/atoms/IconAtom.vue';
import InputAtom from '@/components/atoms/InputAtom.vue';
import HintAtom from '@/components/atoms/HintAtom.vue';

import TitleSubtitleMolecule from '@/components/molecules/TitleSubtitleMolecule.vue';

import validation from '@/utils/validation.js';

export default {
  name: 'AuthView',
  components: {
    AuthCardAtom,
    ButtonAtom,
    IconAtom,
    InputAtom,
    HintAtom,
    TitleSubtitleMolecule,
  },
  data() {
    return {
      currentForm: 'login',
      formRegister: {
        username: undefined,
        email: undefined,
        password: undefined,
        confirmation: undefined,
      },
      formLogin: {
        username: undefined,
        password: undefined,
      },
    };
  },
  computed: {
    validationRegister() {
      const {
        username, email, password, confirmation,
      } = this.formRegister;

      const isAnyEmptyField = validation.isAnyNull([username, email, password, confirmation]);
      const isEmailValid = validation.isEmail(email);
      const isPasswordMatch = validation.isMatch(password, confirmation);
      const isStrongPassword = validation.isStrongPassword(password);

      return {
        isAnyEmptyField,
        isEmailValid,
        isPasswordMatch,
        isStrongPassword,
        anyError: isAnyEmptyField && isEmailValid && isPasswordMatch && isStrongPassword,
      };
    },
    validationLogin() {
      const {
        username, password,
      } = this.formLogin;

      const isAnyEmptyField = validation.isAnyNull([username, password]);

      return {
        isAnyEmptyField,
        anyError: isAnyEmptyField,
      };
    },
    loginError() {
      return this.$store.state.auth.loginError;
    },
    isDarkMode() {
      return this.$store.state.theme.isDarkMode;
    },
  },
  methods: {
    changeForm(form) {
      if (form === 'register') {
        this.currentForm = 'register';
      } else {
        this.currentForm = 'login';
      }
    },
    register() {
      const payload = {
        username: this.formRegister.username,
        email: this.formRegister.email,
        password: this.formRegister.password,
      };

      this.$store.dispatch('auth/register', payload);
    },
    login() {
      const payload = {
        username: this.formLogin.username,
        password: this.formLogin.password,
      };

      this.$store.dispatch('auth/getAuthToken', payload);
    },
    setDarkMode(value) {
      this.$store.dispatch('theme/setDarkMode', value);
    },
  },
};
</script>
