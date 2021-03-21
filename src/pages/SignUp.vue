<template >
<div data-theme="dark" class="container flex flex-col max-w-md p-6 mx-auto rounded-md sm:p-10 bg-base-100 text-primary-content">
	<div  class="mb-8 text-center">
		<h1 class="my-3 text-4xl font-bold">Create Account</h1>
		<p class="text-sm  text-base-content">Enter email and password to create new account</p>
	</div>
	<form @submit.prevent novalidate="" action="" class="space-y-12 ng-untouched ng-pristine ng-valid">
		<div class="space-y-4">
			<div>
				<label for="name" class="block mb-2 text-sm">Name</label>
				<input type="text" name="name" id="name" placeholder="enter name" class="w-full px-3 py-2 border rounded-md border-coolGray-700 bg-neutral-focus  text-coolGray-100" v-model="name">
			</div>	
			<div>
				<label for="email" class="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="enter email address" class="w-full px-3 py-2 border rounded-md border-coolGray-700 bg-neutral-focus  text-coolGray-100" v-model="email">
			</div>

			<div>
				<div class="flex justify-between mb-2">
					<label for="password" class="text-sm">Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" class="w-full px-3 py-2 border rounded-md  border-coolGray-700  bg-neutral-focus text-coolGray-100" v-model="password">
			</div>
		</div>
		<div class="space-y-2">
			<div>
				<button type="button" @click="register" class="w-full px-8 py-3 rounded-md bg-primary-focus text-primary-content hover:bg-primary">Sign up</button>
			</div>
		</div>
	</form>
</div>
</template>

<script setup>
import {ref} from 'vue'
import {isAuthenticated,signUp,auth} from '../helpers/userAuth'
import {useRouter} from 'vue-router'
const router = useRouter()
const register = async () => {
	try {
		await signUp(email.value,password.value)
		const user = auth().currentUser
		await user.updateProfile({displayName: name.value})
		router.push('/')	

	} catch (error) {
		console.log(error)
	}
}
const email = ref('')
const password = ref('')
const name = ref('')

</script>