<template >
<div data-theme="dark" class="container flex flex-col max-w-md p-6 mx-auto rounded-md sm:p-10 bg-base-100 text-primary-content">
	<div  class="mb-8 text-center">
		<h1 class="my-3 text-4xl font-bold">Sign in</h1>
		<p class="text-sm  text-base-content">Sign in to access your account</p>
	</div>
	<form @submit.prevent novalidate="" action="" class="space-y-12 ng-untouched ng-pristine ng-valid">
		<div class="space-y-4">
			<div>
				<label for="email" class="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="enter email address" class="w-full px-3 py-2 border rounded-md border-coolGray-700 bg-neutral-focus  text-coolGray-100" v-model="email">
			</div>
			<div>
				<div class="flex justify-between mb-2">
					<label for="password" class="text-sm">Password</label>
					<a href="#" class="text-xs hover:underline  text-coolGray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" class="w-full px-3 py-2 border rounded-md  border-coolGray-700  bg-neutral-focus text-coolGray-100" v-model="password">
			</div>
		</div>
		<div class="space-y-2">
			<div>
				<button type="button" @click="login" class="w-full px-8 py-3 rounded-md bg-primary-focus text-primary-content hover:bg-primary">Sign in</button>
			</div>
			<div>
				<button type="button" @click="google" class="w-full px-8 py-3 rounded-md bg-error text-primary-content hover:bg-primary">Sign in with Google<img class="w-8 mr-4" src="../assets/g-logo.png"/></button>
			</div>
		</div>
	</form>
</div>
</template>

<script setup>
import {ref} from 'vue'
import {isAuthenticated,signIn,googlePopUp} from '../helpers/userAuth'
import {useRouter} from 'vue-router'
const router = useRouter()
const login = async () => {
	try {
		await signIn(email.value,password.value)
		router.push('/')	
	} catch (error) {
		console.log(error)
	}
}
const google = async () => {
	try {
		await googlePopUp()
		router.push('/')	
	} catch (error) {
		console.log(error)
	}
}
const email = ref('')
const password = ref('')
</script>