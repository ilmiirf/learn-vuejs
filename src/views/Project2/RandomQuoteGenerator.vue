<template>
  <div class="quote-generator">
    <h1 class="app-title">Random Quote Generator</h1>
    <blockquote class="quote-container">
      <p>{{ currentQuote.text }}</p>
      <cite>{{ currentQuote.author }}</cite>
    </blockquote>
    <button @click="getRandomQuote" class="quote-button">Get Random Quote</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const quotes = ref([
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
]);
const currentQuote = ref({ text: '', author: '' });
const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.value.length);
  currentQuote.value = quotes.value[randomIndex];
};

onMounted(getRandomQuote);
</script>

<style scoped>
.quote-generator {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid var(--light-green);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.quote-container {
  background-color: var(--lighter-green);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--light-green);
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
}

cite {
  font-style: normal;
  color: #777;
}

.quote-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--primary-green);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.quote-button:hover {
  background-color: var(--light-green);
}
</style>
