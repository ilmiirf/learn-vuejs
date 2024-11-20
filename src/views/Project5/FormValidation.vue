<script setup>
import { ref, computed } from 'vue';
const formData = ref({
  name: '',
  email: '',
  password: '',
});

const isNameValid = computed(() => formData.value.name.trim() !== '');

const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email));

const isPasswordValid = computed(() => formData.value.password.length >= 8);

const isFormValid = computed(
  () => isNameValid.value && isEmailValid.value && isPasswordValid.value,
);

const submitForm = () => {
  if (isFormValid.value) {
    console.log('Form submitted', formData.value);
  } else {
    console.log('Form not submitted');
  }
};
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="submitForm" class="custom-form">
      <div class="form-group">
        <label for="name">Name: </label>
        <input v-model="formData.name" type="text" id="name" />
        <span v-if="!isNameValid" class="error">Name is required</span>
      </div>
      <div class="form-group">
        <label for="name">Email: </label>
        <input v-model="formData.email" type="email" id="email" />
        <span v-if="!isEmailValid" class="error">Please enter a valid email</span>
      </div>
      <div class="form-group">
        <label for="name">Password: </label>
        <input v-model="formData.password" type="password" id="password" />
        <span v-if="!isPasswordValid" class="error">Password must be at least 8 characters</span>
      </div>

      <button type="submit" :disabled="!isFormValid" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  margin-top: 60px;
  color: var(--text-dark);
}
.custom-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--dark-green);
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
}

.error {
  color: #e74c3c;
  font-size: 14px;
}

.submit-button {
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  background-color: var(--primary-green);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: rgba(133, 159, 61, 0.5);
  cursor: not-allowed;
}
</style>
