<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import { auth, googleProvider } from './firebase'; 
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { pingServer, initiateOAuthLogin } from './api'; // Import the pingServer function

// State to keep track of the authenticated user
const user = ref(null);

// State to store the ping result
const pingResult = ref(''); // Initial state to store ping response

// Function to handle Google login
const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    user.value = result.user;
  } catch (error) {
    console.error('Error during Google login:', error);
  }
};

// Function to handle logout
const logout = async () => {
  try {
    await signOut(auth);
    user.value = null;
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

const loginViaOAuth = async () => {
  try {
    await initiateOAuthLogin(); // This will handle the redirection
  } catch (error) {
    console.error('Error during OAuth login:', error);
  }
};


// Function to ping the server and update the ping result state
const handlePing = async () => {
  try {
    const result = await pingServer();
    pingResult.value = result.message || 'Ping successful!'; // Display the response or a default message
  } catch (error) {
    console.error('Error during server ping:', error);
    pingResult.value = 'Ping failed. Please try again.'; // Update on error
  }
};

// On component mount, check if a user is already logged in
onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });
});
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <!-- Google Login/Logout Button -->
      <div class="auth">
        <button v-if="!user" @click="loginWithGoogle">Login with Google</button>
        <div v-else>
          <p>Welcome, {{ user.displayName }}!</p>
          <button @click="logout">Logout</button>
        </div>

        <!-- Ping Server Button -->
        <button @click="handlePing">Ping Server</button>
        <p v-if="pingResult">{{ pingResult }}</p> <!-- Display the ping result -->

        <div>
          <button @click="loginViaOAuth">Login with Google (OAuth)</button>
        </div>

      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
