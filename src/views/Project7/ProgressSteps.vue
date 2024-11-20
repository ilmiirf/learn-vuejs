<script setup>
import { ref } from 'vue';
const steps = ref(['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']);
const currentSteps = ref(0);

const nextSteps = () => {
  if (currentSteps.value < steps.value.length - 1) {
    currentSteps.value++;
  }
};

const prevSteps = () => {
  if (currentSteps.value > 0) {
    currentSteps.value--;
  }
};
</script>

<template>
  <div class="progress-container">
    <div class="progress-bar">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="{ 'step-active': index === currentSteps }"
      >
        {{ step }}
      </div>
    </div>
    <div class="controls">
      <button @click="prevSteps" :disabled="currentSteps === 0" class="btn">Previous</button>
      <button @click="nextSteps" :disabled="currentSteps === steps.length - 1" class="btn">
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  max-width: 400px;
  margin: 100px auto;
}

.progress-bar {
  display: flex;
  background-color: var(--lighter-green);
  border-radius: 8px;
  overflow: hidden;
}

.progress-bar div {
  flex: 1;
  text-align: center;
  padding: 15px;
  color: #fff;
  position: relative;
  z-index: 1;
}

.progress-bar div:not(:last-child) {
  border-right: 2px solid #fff;
}

.step-active {
  background-color: var(--primary-green); /* Green for active step */
}

.controls {
  margin-top: 40px;
  text-align: center;
}

.btn {
  width: 130px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: var(--light-green); /* Purple for button */
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
}

.btn:disabled {
  background-color: rgba(133, 159, 61, 0.4);
  cursor: not-allowed;
}
</style>
