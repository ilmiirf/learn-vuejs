<script setup>
import { ref } from 'vue';
const passwordLength = ref(12);
const includeUppercase = ref(true);
const includeNumbers = ref(true);
const includeSymbols = ref(true);
const generatedPassword = ref('');

const generatePassword = () => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = includeUppercase.value ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
  const numberChars = includeNumbers.value ? '0123456789' : '';
  const symbolChars = includeSymbols.value ? '!@#$%^&*()_+-=[]{}|;:,.<>/?' : '';

  const allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;

  let password = '';
  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  generatedPassword.value = password;
};
</script>

<template>
  <div class="password-generator-container">
    <h2 class="password-generator-title">Password Generator</h2>
    <div class="checkbox-container">
      <label for="password-length">Password Length:</label>
      <input type="number" id="password-length" v-model="passwordLength" min="8" max="32" />
    </div>
    <br />
    <div class="checkbox-container">
      <label for="includeUppercase">Include Uppercase Letters:</label>
      <input type="checkbox" id="includeUppercase" v-model="includeUppercase" />
    </div>
    <br />
    <div class="checkbox-container">
      <label for="includeNumbers">Include Numbers Letters:</label>
      <input type="checkbox" id="includeNumbers" v-model="includeNumbers" />
    </div>
    <br />
    <div class="checkbox-container">
      <label for="includeSymbols">Include Symbols Letters:</label>
      <input type="checkbox" id="includeSymbols" v-model="includeSymbols" />
    </div>
    <br />

    <button @click="generatePassword" class="generated-button">Generate Password</button>
    <div v-if="generatedPassword" class="generated-password">
      Your Password: <b>{{ generatedPassword }}</b>
    </div>
  </div>
</template>

<style scoped>
.password-generator-container {
  max-width: 500px;
  margin: 50px auto;
}

.password-generator-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.checkbox-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 82%;

  &:nth-child(2) {
    width: 90%;
  }

  label {
    flex-grow: 1;
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin: 0;
    accent-color: var(--light-green);
  }

  input[type='number'] {
    width: 70px;
  }
}

.generated-button {
  margin-top: 16px;
  width: 90%;
  padding: 10px 15px;
  font-size: 16px;
  background-color: var(--primary-green);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.generated-button:hover {
  background-color: var(--light-green);
}

.generated-password {
  margin-top: 50px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: rgba(133, 159, 61, 0.1);
  color: #333;

  b {
    margin-left: 16px;
  }
}
</style>
