<template>
<div class="min-h-full mr-12 ml-12 bg-base-100 shadow card">
  <div class=" card-body">
    <h1 class="card-title">Welcome</h1> 
    <p> {{user?.email || "Hello"}}
    </p>
  </div>
</div> 
</template>

<script setup>
import {user} from '../helpers/userAuth';
</script>