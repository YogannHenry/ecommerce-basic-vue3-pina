<template>
  <el-form 
  submit.prevent="onSubmit" 
  ref="ruleFormRef" 
  :model="ruleForm" 
  :rules="rules" 
  label-width="120px" 
  class=" m-20"
  :size="formSize" 
  status-icon>

    <el-form-item class="w-96" label="Pseudo" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>

    <el-form-item class="w-60" label="Note" prop="region">
      <el-select v-model="ruleForm.note" placeholder="note">
        <el-option label="1 étoile" value="1" />
        <el-option label="2 étoiles" value="2" />
        <el-option label="3 étoiles" value="3" />
        <el-option label="4 étoiles" value="4" />
        <el-option label="5 étoiles" value="5" />
      </el-select>
    </el-form-item>

    <el-form-item class="w-formWidth" label="Commentaire" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>

    <el-form-item>
      <el-button class="bg-c2" type="primary" @click="submitForm(ruleFormRef)">
        Confirmer
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Annuler</el-button>
    </el-form-item>
  </el-form>


  <div>
    <h3> Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews " :key="index">
        <el-card class="box-card">
          <template #header>
            <div class="card-header flex justify-between">
              <p class="bg-c2 w-10 ">{{ review.name }}</p>
              <div class="flex items-center">
              <div class="" text>{{ review.note }} 
              </div>
                <svg class=" w-5" viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path fill="currentColor"
                    d="m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z">
                  </path>
                </svg>
              </div>
            </div>
          </template>
          <p>{{ review.desc }}</p>
        </el-card>

      </li>
    </ul>
  </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  note: '',
  desc: '',
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Merci de rentrer un pseudo', trigger: 'blur' },
    { min: 3, message: 'Carathère minimum 3', trigger: 'blur' },
  ],
  note: [
    {
      required: true,
      message: 'SVP sélectionner une note',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Merci de fournir un commentaire', trigger: 'blur' },
  ],
})

//------------------------------------------------------------------------------------------------------------------------
//-------------------------on créer une varialbe avec la method reactive, car ses propriété sont voués à être modifié régulièrement ------
//----------------------------------------------------------------------------------------------------------------------------

const reviews = reactive([])

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')

      //------------------------------------------------------------------------------------------------------------------------
      //-------------------------On utilise le Spread Operator pour créer un nouvelle objet qui aura les mêmes valeurs que ruleForm, sans cela les review.name reviews.note prenaient les nouvelles valeurs a chaque submit. grace au spread on peut conserver chauque valeur-------
      //----------------------------------------------------------------------------------------------------------------------------
      const review = { ...ruleForm }
      reviews.push(review)
      console.log("reviews", reviews)

    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()

}





</script>
  