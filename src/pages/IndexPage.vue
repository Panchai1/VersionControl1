<template>
  <q-page padding class="bg-grey-2">
    <div class="q-pa-md">
      <q-card class="q-pa-lg shadow-2 rounded-xl max-w-md mx-auto">
        <q-card-section>
          <div class="text-h6 text-center">Basic Form</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-form @submit="onSubmitTest" @reset="onResetTest" class="q-gutter-md">
            <q-input filled v-model="form.name" label="Full Name" required />
            <q-input filled v-model="form.email" type="email" label="Email" required />
            <q-input filled v-model="form.password" type="password" label="Password" required />

            <div class="row justify-between q-mt-md">
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn label="Reset" type="reset" color="secondary" flat />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  password: ''
})

// ฟังก์ชัน submit แบบปกติ
function onSubmit() {
  alert(`ชื่อ: ${form.value.name}\nอีเมล: ${form.value.email}`)
}

// ฟังก์ชัน reset แบบปกติ
function onReset() {
  form.value = { name: '', email: '', password: '' }
}

// ฟังก์ชันทดสอบง่าย ๆ ไม่ต้องติดตั้งอะไร
function onSubmitTest(e) {
  e.preventDefault()
  console.log('Test Submit Called')
  console.assert(form.value.name !== '', 'Name should not be empty')
  console.assert(form.value.email.includes('@'), 'Email should be valid')
  alert(`Test Submit: ${JSON.stringify(form.value)}`)
}

function onResetTest(e) {
  e.preventDefault()
  form.value = { name: '', email: '', password: '' }
  console.log('Form reset to:', form.value)
  alert('Form Reset Test')
}
</script>
