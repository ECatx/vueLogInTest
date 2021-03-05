<template>
<div class="alert alert-error">
  <div class="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current"><!----> <!----> <!----> <!----> 
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!---->
    </svg> 
    <label>ERROR Page Not Found</label>
  </div>
</div>
	<section class="flex items-center h-full p-16 dark:bg-coolGray-900 dark:text-coolGray-100">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div class="max-w-md text-center">
				<h2 class="mb-8 font-extrabold text-9xl dark:text-coolGray-600">
					<span class="sr-only">Error </span>404 
				</h2>
				<p class="text-2xl font-semibold md:text-3xl dark:text-coolGray-400">Sorry, we couldn't find this page.</p>
				<p class="mt-4 mb-8">Testing out mamba 404 and daisyUI </p>
				<router-link to="/" class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">Back to homepage</router-link>
			</div>
		</div>
	</section>
</template>