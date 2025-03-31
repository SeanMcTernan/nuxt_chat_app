<script setup>
	import { ref, onMounted } from 'vue';

	const title = ref('');
	const fullTitle = 'What would you like to chat about?';
	const typeDelay = 30;

	onMounted(() => {
		typeText();
	});

	const typeText = async () => {
		for (let i = 0; i < fullTitle.length; i++) {
			await new Promise(resolve => setTimeout(resolve, typeDelay));
			title.value = fullTitle.slice(0, i + 1);
		}
	};

	const messages = ref([
		{
			role: 'AI',
			message: 'Hello! How can I help you?'
		}
	]);
	const loading = ref(false);
	const message = ref('');

	const scrollToEnd = () => {
		setTimeout(() => {
			const chatMessages = document.querySelector('.chat-messages > div:last-child');
			chatMessages?.scrollIntoView({ behavior: 'smooth', block: 'end' });
		}, 100);
	};

	const sendPrompt = async () => {
		if (message.value === '') return;
		loading.value = true;

		messages.value.push({
			role: 'User',
			message: message.value
		});

		scrollToEnd();
		message.value = '';

		const res = await fetch(`/api/chat-api`, {
			body: JSON.stringify(messages.value.slice(1)),
			method: 'post'
		});

		if (res.status === 200) {
			const response = await res.json();
			messages.value.push({
				role: 'AI',
				message: response?.message
			});
		} else {
			messages.value.push({
				role: 'AI',
				message: 'Sorry, an error occurred.'
			});
		}

		loading.value = false;
		scrollToEnd();
	};
</script>
<template>
	<div class="min-h-screen bg-gradient flex items-center">
	<div class="max-w-xl mx-auto flex flex-col space-y-8">
		<h1 class="text-3xl font-bold text-center text-white">{{ title }}<span class="animate-pulse">|</span></h1>
		<div class="max-w-xl mx-auto">
			<div class="bg-white rounded-md shadow h-[60vh] flex flex-col justify-between">
				<div class="h-full overflow-auto chat-messages">
					<div v-for="(message, i) in messages" :key="i" class="flex flex-col p-4">
						<div v-if="message.role === 'AI'" class="pr-8 mr-auto">
							<div class="p-2 mt-1 text-sm text-gray-700 bg-gray-200 rounded-lg text-smp-2">
								{{ message.message }}
							</div>
						</div>
						<div v-else class="pl-8 ml-auto">
							<div class="p-2 mt-1 text-sm text-white bg-blue-400 rounded-lg">
								{{ message.message }}
							</div>
						</div>
					</div>
					<div class="p-4 ml-10 mr-auto" v-if="loading">
						<span class="loader"></span>
					</div>
				</div>
				<form @submit.prevent="sendPrompt">
					<div class="flex items-center w-full p-4">
						<input
							v-model="message"
							type="text"
							placeholder="Type here..."
							class="w-full p-1 text-sm text-black bg-transparent bg-gray-100 border rounded-md shadow border-white/40 grow"
						/>
						<button
							:disabled="loading"
							type="submit"
							class="flex items-center justify-center flex-none w-10 h-10 ml-2 bg-green-500 rounded-full"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M22 2L11 13"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M22 2L15 22L11 13L2 9L22 2Z"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</form>
			</div>
		</div>
		<div class="flex justify-center items-center space-x-6">
			<a
				href="https://nuxt.com/docs"
				class="flex items-center font-medium underline transition-colors underline-offset-4 hover:text-black/70"
			>
				<img src="/nuxt.svg" class="h-6" alt="Nuxt Logo" />
			</a>
			<a
				href="https://netlify.com/"
				class="flex items-center font-medium underline transition-colors underline-offset-4 hover:text-black/70"
			>
				<img src="/netlify.svg" class="h-6" alt="Netlify Logo" />
			</a>
			<a
				href="https://github.com/SeanMcTernan/nuxt_chat_app"
				class="flex items-center font-medium underline transition-colors underline-offset-4 hover:text-black/70"
			>
				<img src="/github.svg" class="h-4" alt="GitHub Logo" />
			</a>
		</div>
	</div>
	</div>
</template>

<style>
	html, body {
		overflow: hidden;
		overscroll-behavior: none;
		height: 100%;
	}

	.bg-gradient {
		background: radial-gradient(100% 100% at 50% 50%, #000000, #001615, #000000);
		background-size: 400% 400%;
		animation: gradientBg 30s ease infinite;
	}

	@keyframes gradientBg {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.loader {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		display: block;
		position: relative;
		color: #d3d3d3;
		box-sizing: border-box;
		animation: animloader 2s linear infinite;
	}

	@keyframes animloader {
		0% {
			box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
		}
		25% {
			box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 2px;
		}
		50% {
			box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 2px, -38px 0 0 -2px;
		}
		75% {
			box-shadow: 14px 0 0 2px, 38px 0 0 -2px;
		}
	}
</style>