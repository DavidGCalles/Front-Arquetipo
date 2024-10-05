<!-- src/components/Login.vue -->
<template>
    <div>
      <button @click="loginWithGoogle">Login with Google</button>
      <p v-if="user">Welcome, {{ user.displayName }}</p>
    </div>
  </template>
  
  <script>
  import { auth, googleProvider } from '../firebase';
  
  export default {
    data() {
      return {
        user: null,
      };
    },
    methods: {
      async loginWithGoogle() {
        try {
          const result = await auth.signInWithPopup(googleProvider);
          this.user = result.user;
        } catch (error) {
          console.error('Error during Google login:', error);
        }
      },
    },
    mounted() {
      auth.onAuthStateChanged((user) => {
        this.user = user;
      });
    },
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  