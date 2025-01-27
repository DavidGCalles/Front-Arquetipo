<template>
  <div class="container">
    <h1>API Data</h1>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <ul class="data-list">
        <li v-for="item in data" :key="item.id" class="data-item">
          {{ item[0] }} - {{ item[1] }}
        </li>
      </ul>
    </div>

    <h2>Insert New Item</h2>
    <form @submit.prevent="handleInsert" class="form">
      <input v-model="newItem.name" placeholder="Name" required class="input" />
      <input v-model="newItem.description" placeholder="Description" class="input" />
      <button type="submit" class="button">Insert</button>
    </form>

    <h2>Search Items</h2>
    <form @submit.prevent="handleSearch" class="form">
      <input v-model="searchParams.name" placeholder="Name" class="input" />
      <input v-model="searchParams.id" type="number" placeholder="ID" class="input" />
      <input v-model="searchParams.description" placeholder="Description" class="input" />
      <button type="submit" class="button">Search</button>
    </form>

    <h2>Delete Item</h2>
    <form @submit.prevent="handleDelete" class="form">
      <input v-model="deleteId" type="number" placeholder="ID" required class="input" />
      <button type="submit" class="button">Delete</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchAllItems, insertNewItem, searchItems, deleteItem } from '../api';

const data = ref(null);
const loading = ref(true);
const error = ref(null);
const newItem = ref({ name: '', description: '' });
const searchParams = ref({ name: '', id: '', description: '' });
const deleteId = ref('');

const loadData = async () => {
  try {
    const response = await fetchAllItems();
    data.value = response;
  } catch (err) {
    error.value = 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
};

const handleInsert = async () => {
  try {
    await insertNewItem(newItem.value);
    await loadData(); // Reload data after insertion
  } catch (err) {
    error.value = 'Failed to insert item';
  }
};

const handleSearch = async () => {
  try {
    const response = await searchItems(searchParams.value);
    data.value = response;
  } catch (err) {
    error.value = 'Failed to search items';
  }
};

const handleDelete = async () => {
  try {
    await deleteItem(deleteId.value);
    await loadData(); // Reload data after deletion
  } catch (err) {
    error.value = 'Failed to delete item';
  }
};

onMounted(loadData);
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
}

h1, h2 {
  color: #4CAF50; /* Vue green */
  font-weight: 500;
}

.loading, .error {
  color: #f44336; /* Material red for errors */
  font-weight: 500;
}

.data-list {
  list-style-type: none;
  padding: 0;
}

.data-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.form {
  margin-top: 20px;
}

.input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.button {
  background-color: #4CAF50; /* Vue green */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #45a049;
}
</style>