<script setup>
import { ref } from 'vue';
const username = ref('');
const userProfile = ref(null);
const error = ref(null);
const getUserProfile = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${username.value}`);
    if (response.ok) {
      userProfile.value = await response.json();
      error.value = null;
    } else {
      userProfile.value = null;
      error.value = 'User not found';
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    error.value = 'An error occurred while fetching data';
  }
};
</script>

<template>
  <div class="github-profile-viewer">
    <h1 class="app-title">Github User Profile View</h1>
    <div class="input-container">
      <input v-model="username" placeholder="Enter GitHub username" @input="getUserProfile" />
    </div>

    <div class="user-profile" v-if="userProfile">
      <img :src="userProfile.avatar_url" alt="User Profile" />
      <h2>{{ userProfile.name }}</h2>
      <div class="user-details">
        <p><strong>Username:</strong> {{ userProfile.login }}</p>
        <p><strong>Location:</strong> {{ userProfile.location }}</p>
        <p><strong>Followers:</strong> {{ userProfile.followers }}</p>
        <p><strong>Following:</strong> {{ userProfile.following }}</p>
        <p><strong>Public Repos:</strong> {{ userProfile.public_repos }}</p>
      </div>
    </div>

    <div class="error-message" v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.github-profile-viewer {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.input-container {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.user-profile {
  margin-top: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

img {
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.user-details {
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}

.error-message {
  color: #e74c3c;
  margin-top: 20px;
}
</style>
