<template>

<form class="m-20">
    <!-- -------------------------------------------------------------------------------------- -->
    <!-- ----------------------------------select input ----------------------------- -->
        <!-- -------------------------------------------------------------------------------------- -->

        <el-select v-model="value" clearable placeholder="Donner une note">
          <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          />
        </el-select>


            <!-- -------------------------------------------------------------------------------------- -->
    <!-- ----------------------------------textarea ----------------------------- -->
        <!-- -------------------------------------------------------------------------------------- -->
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment" class="sr-only">Entrez votre commentaire</label>
            <textarea id="comment" rows="4"
            class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Donner votre avis..." required></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Envoyer
          </button>
          
        </div>
      </div>
    </form>


</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: '1 étoile',
  },
  {
    value: 'Option2',
    label: '2 étoiles',
  },
  {
    value: 'Option3',
    label: '3 étoiles',
  },
  {
    value: 'Option4',
    label: '4 étoiles',
  },
  {
    value: 'Option5',
    label: '5 étoiles',
  },
]
</script>