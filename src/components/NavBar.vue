<template>

<div class="navbar mb-2 shadow-lg bg-base-300 text-neutral-content">
  <div class="flex-1 px-2 mx-2 lg:flex-none">
    <span class="text-lg font-bold">
            VueLogInTest
          </span>
  </div> 
  <div class="justify-end flex-1 flex px-2 mx-2 lg:flex">
    <div class="flex items-stretch">
      <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">
              Home
            </router-link> 
            <router-link to="/about" class="btn btn-ghost btn-sm rounded-btn">
              About
            </router-link> 
      <router-link v-if="!isAuthenticated" to="Login" class="btn btn-ghost btn-sm rounded-btn">
              Login
            </router-link>
            <router-link v-if="!isAuthenticated" to="SignUp" class="btn btn-ghost btn-sm rounded-btn">
              Signup
            </router-link>
            <div v-else>
                    <router-link to="Classified" class="btn btn-ghost btn-sm rounded-btn">
              Classified
            </router-link> 
            <button class="btn btn-secondary btn-sm rounded-btn" @click="logout">
              Logout
            </button>
            </div>
    </div>
  </div> 
</div>
</template>

<script setup>
import {isAuthenticated,signOut} from '../helpers/userAuth.js'
import {useRouter} from 'vue-router'
const router = useRouter()

const logout =  async () => {
  await signOut()
  router.push('/')

}
</script>

<style>
.router-link-active {
  @apply btn-primary;
}
</style>