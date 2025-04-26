<script lang="ts">
	// Interactive elements for the professional page
	import { onMount } from 'svelte';

	// For contact form
	export let form: { success?: boolean; googleFormSuccess?: boolean } = {};

	// For testimonial carousel
	let testimonials = [
		{
			quote:
				"Elmira is fantastic with our twins! She's patient, creative, and they always look forward to her visits.",
			name: 'Jessica S.',
			photo: '/images/elmira.png' // Placeholder, would be replaced with actual parent photo
		},
		{
			quote:
				"We feel so lucky to have found Elmira. She's reliable, professional, and genuinely cares about our children.",
			name: 'Michael T.',
			photo: '/images/elmira.png' // Placeholder
		},
		{
			quote:
				'Our daughter has special needs, and Elmira has been incredible at adapting activities to keep her engaged and happy.',
			name: 'Sarah W.',
			photo: '/images/elmira.png' // Placeholder
		}
	];

	let currentTestimonial = 0;
	let testimonialInterval: ReturnType<typeof setInterval>;

	// Timeline milestones
	let milestones = [
		{
			year: '2018',
			title: 'CPR/First Aid Certified',
			description: 'Completed comprehensive training in child safety and emergency response.',
			icon: '/images/elmira.png' // Placeholder thumbnail
		},
		{
			year: '2020',
			title: 'Family Caregiving',
			description:
				'Helped raise 3 younger siblings, developing patience and creative childcare skills.',
			icon: '/images/elmira.png' // Placeholder thumbnail
		},
		{
			year: '2022',
			title: 'Full-time Nanny',
			description: 'Provided dedicated care for two children ages 2 and 4 for over two years.',
			icon: '/images/elmira.png' // Placeholder thumbnail
		}
	];

	// Services offered
	let services = [
		{
			title: 'Babysitting',
			description: 'Regular childcare with engaging activities and age-appropriate fun.',
			keywords: ['Trust', 'Fun', 'Safety']
		},
		{
			title: 'Overnight Nanny',
			description: 'Extended care with bedtime routines and overnight supervision.',
			keywords: ['Comfort', 'Reliability', 'Peace of mind']
		},
		{
			title: 'Emergency Backup Care',
			description: 'Last-minute childcare when your regular arrangements fall through.',
			keywords: ['Flexibility', 'Dependability', 'Quick response']
		},
		{
			title: 'Tutoring',
			description: 'Homework help and educational support for school-aged children.',
			keywords: ['Learning', 'Patience', 'Growth']
		},
		{
			title: 'Weekend Babysitting',
			description: 'Fun weekend activities while parents enjoy some time off.',
			keywords: ['Adventure', 'Creativity', 'Engagement']
		}
	];

	// For Calendly integration
	let calendlyLoaded = false;

	// Load Calendly script
	function loadCalendlyScript() {
		if (typeof window !== 'undefined' && !calendlyLoaded) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://assets.calendly.com/assets/external/widget.js';
			script.async = true;
			document.body.appendChild(script);
			calendlyLoaded = true;
		}
	}

	// Auto-scroll testimonials and load Calendly
	onMount(() => {
		testimonialInterval = setInterval(() => {
			currentTestimonial = (currentTestimonial + 1) % testimonials.length;
		}, 5000);

		// Load Calendly script
		loadCalendlyScript();

		return () => {
			clearInterval(testimonialInterval);
		};
	});
</script>

<section class="min-h-screen bg-[#faf9f7] font-sans text-gray-800">
	<!-- Hero Section - Fullscreen Split Design -->
	<div class="flex min-h-[90vh] w-full flex-col md:flex-row">
		<!-- Left side - Portrait -->
		<div class="relative w-full overflow-hidden bg-[#f0e6da] md:w-1/2">
			<!-- Overlay for image -->
			<div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#f0e6da]/20"></div>

			<!-- Hero image with proper sizing and positioning -->
			<img
				src="/images/elmira-hero.png"
				alt="Elmira - Professional Babysitter"
				class="absolute inset-0 h-full w-full object-cover object-center md:object-[75%_center]"
			/>

			<!-- Mobile overlay text (visible only on small screens) -->
			<div
				class="absolute inset-0 flex items-end bg-gradient-to-t from-[#2c3e50]/80 to-transparent p-6 md:hidden"
			>
				<h2 class="font-serif text-2xl font-bold text-white">Elmira's Playhouse</h2>
			</div>
		</div>

		<!-- Right side - Content -->
		<div class="flex w-full items-center justify-center bg-[#f8f4ef] p-8 md:w-1/2 md:p-16">
			<div class="mx-auto max-w-lg">
				<h1 class="mb-4 font-serif text-4xl leading-tight font-bold text-[#2c3e50] md:text-5xl">
					Care That Grows With Your Family
				</h1>
				<p class="mb-8 text-lg text-[#5d6d7e] md:text-xl">
					Trusted babysitting for ages 6 months to 5 years.
				</p>
				<a
					href="#contact"
					class="inline-block transform rounded-md bg-gradient-to-r from-[#3a6186] to-[#89253e] px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					Book a Meet & Greet
				</a>
			</div>
		</div>
	</div>

	<!-- About Section - Story-Driven Timeline -->
	<div class="bg-white px-6 py-20">
		<div class="mx-auto max-w-5xl">
			<h2 class="mb-16 text-center font-serif text-3xl text-[#2c3e50] md:text-4xl">My Journey</h2>

			<div class="relative">
				<!-- Timeline line -->
				<div class="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-[#e5e7eb]"></div>

				<!-- Timeline items -->
				{#each milestones as milestone, i}
					<div class="relative z-10 mb-16 last:mb-0">
						<!-- Timeline dot -->
						<div
							class="absolute left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-4 transform rounded-full border-4 border-white bg-[#3a6186] shadow-md"
						></div>

						<!-- Content box -->
						<div
							class="{i % 2 === 0
								? 'ml-auto pr-4 pl-12'
								: 'mr-auto pr-12 pl-4'} mb-8 w-full md:w-1/2"
						>
							<div
								class="rounded-lg border border-[#e5e7eb] bg-[#f8f4ef] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
							>
								<div class="mb-3 flex items-center">
									<div
										class="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-[#3a6186]"
									>
										<img
											src={milestone.icon}
											alt={milestone.title}
											class="h-full w-full object-cover"
										/>
									</div>
									<div>
										<span class="block text-sm font-medium text-[#5d6d7e]">{milestone.year}</span>
										<h3 class="font-serif text-xl font-semibold text-[#2c3e50]">
											{milestone.title}
										</h3>
									</div>
								</div>
								<p class="leading-relaxed text-[#5d6d7e]">{milestone.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Service Section - Interactive Cards -->
	<div class="bg-[#faf9f7] px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center font-serif text-3xl text-[#2c3e50] md:text-4xl">Services</h2>

			<!-- First row of services (3 cards) -->
			<div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<!-- Babysitting -->
				<div class="group relative flex h-full transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
					<div class="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#3a6186] to-[#89253e]"></div>
					<div class="flex h-full w-full flex-col p-6 pt-8">
						<h3 class="mb-4 font-serif text-xl font-semibold text-[#2c3e50]">Babysitting</h3>
						<p class="mb-5 flex-grow text-[#5d6d7e]">Regular childcare with engaging activities and age-appropriate fun.</p>
						<div class="mt-auto">
							<ul class="flex flex-col space-y-1.5">
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Trust</span>
								</li>
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Fun</span>
								</li>
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Safety</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Overnight Nanny -->
				<div class="group relative flex h-full transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
					<div class="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#3a6186] to-[#89253e]"></div>
					<div class="flex h-full w-full flex-col p-6 pt-8">
						<h3 class="mb-4 font-serif text-xl font-semibold text-[#2c3e50]">Overnight Nanny</h3>
						<p class="mb-5 flex-grow text-[#5d6d7e]">Extended care with bedtime routines and overnight supervision.</p>
						<div class="mt-auto">
							<ul class="flex flex-col space-y-1.5">
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Comfort</span>
								</li>
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Reliability</span>
								</li>
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Peace of mind</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Emergency Backup Care -->
				<div class="group relative flex h-full transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
					<div class="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#3a6186] to-[#89253e]"></div>
					<div class="flex h-full w-full flex-col p-6 pt-8">
						<h3 class="mb-4 font-serif text-xl font-semibold text-[#2c3e50]">Emergency Backup Care</h3>
						<p class="mb-5 flex-grow text-[#5d6d7e]">Last-minute childcare when your regular arrangements fall through.</p>
						<div class="mt-auto">
							<ul class="flex flex-col space-y-1.5">
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Flexibility</span>
								</li>
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Dependability</span>
								</li>
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Quick response</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<!-- Second row of services (2 cards, centered) -->
			<div class="flex flex-col md:flex-row md:justify-center gap-6">
				<!-- Tutoring -->
				<div class="group relative flex h-full transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg max-w-md w-full">
					<div class="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#3a6186] to-[#89253e]"></div>
					<div class="flex h-full w-full flex-col p-6 pt-8">
						<h3 class="mb-4 font-serif text-xl font-semibold text-[#2c3e50]">Tutoring</h3>
						<p class="mb-5 flex-grow text-[#5d6d7e]">Homework help and educational support for school-aged children.</p>
						<div class="mt-auto">
							<ul class="flex flex-col space-y-1.5">
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Learning</span>
								</li>
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Patience</span>
								</li>
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Growth</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Weekend Babysitting -->
				<div class="group relative flex h-full transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg max-w-md w-full">
					<div class="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#3a6186] to-[#89253e]"></div>
					<div class="flex h-full w-full flex-col p-6 pt-8">
						<h3 class="mb-4 font-serif text-xl font-semibold text-[#2c3e50]">Weekend Babysitting</h3>
						<p class="mb-5 flex-grow text-[#5d6d7e]">Fun weekend activities while parents enjoy some time off.</p>
						<div class="mt-auto">
							<ul class="flex flex-col space-y-1.5">
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Adventure</span>
								</li>
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Creativity</span>
								</li>
								<li class="flex items-center">
									<div class="h-1.5 w-1.5 rounded-full bg-[#3a6186] mr-2"></div>
									<span class="text-sm text-[#5d6d7e]">Engagement</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Testimonials - Dynamic Carousel -->
	<div class="bg-white px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-16 text-center font-serif text-3xl text-[#2c3e50] md:text-4xl">
				What Parents Say
			</h2>

			<div class="relative h-64 overflow-hidden rounded-lg bg-[#f8f4ef] p-8 shadow-md">
				<!-- Testimonial items -->
				{#each testimonials as testimonial, i}
					<div
						class="absolute inset-0 flex flex-col justify-center p-8 transition-opacity duration-500 ease-in-out"
						style="opacity: {i === currentTestimonial ? '1' : '0'}; pointer-events: {i ===
						currentTestimonial
							? 'auto'
							: 'none'}"
					>
						<p class="mb-6 text-center text-lg leading-relaxed text-[#5d6d7e] italic">
							"{testimonial.quote}"
						</p>
						<div class="flex items-center justify-center">
							<div class="mr-3 h-10 w-10 overflow-hidden rounded-full border border-[#3a6186]">
								<img
									src={testimonial.photo}
									alt={testimonial.name}
									class="h-full w-full object-cover"
								/>
							</div>
							<span class="font-medium text-[#2c3e50]">{testimonial.name}</span>
						</div>
					</div>
				{/each}
			</div>

			<!-- Carousel dots -->
			<div class="mt-6 flex justify-center space-x-2">
				{#each testimonials as _, i}
					<button
						class="h-2 w-2 rounded-full transition-colors duration-300 {i === currentTestimonial
							? 'bg-[#3a6186]'
							: 'bg-[#d1d5db]'}"
						on:click={() => (currentTestimonial = i)}
						aria-label="View testimonial {i + 1}"
					></button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Availability Section - Calendly Integration -->
	<div class="bg-[#faf9f7] px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center font-serif text-3xl text-[#2c3e50] md:text-4xl">
				My Availability
			</h2>
			<p class="mb-10 text-center text-lg text-[#5d6d7e]">
				Book a meet & greet or schedule childcare services directly using my online calendar.
			</p>

			<!-- Calendly inline widget with full-width styling -->
			<div class="calendly-inline-widget w-full" data-url="https://calendly.com/evolsquirrel/30min" style="height:900px;"></div>
		</div>
	</div>

	<!-- Contact Form Section -->
	<div class="bg-white px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-16 text-center font-serif text-3xl text-[#2c3e50] md:text-4xl">Get in Touch</h2>

			<div class="overflow-hidden rounded-lg bg-[#f8f4ef] shadow-md">
				<div class="grid grid-cols-1 md:grid-cols-2">
					<!-- Contact Info -->
					<div class="bg-gradient-to-br from-[#3a6186]/10 to-[#89253e]/10 p-8">
						<h3 class="mb-6 font-serif text-2xl font-semibold text-[#2c3e50]">
							Contact Information
						</h3>

						<div class="space-y-4">
							<div class="flex items-start">
								<div class="mt-1 mr-4 text-[#3a6186]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<p class="font-medium text-[#2c3e50]">Email</p>
									<a
										href="mailto:elmira@example.com"
										class="text-[#5d6d7e] transition-colors hover:text-[#3a6186]"
										>elmira@example.com</a
									>
								</div>
							</div>

							<div class="flex items-start">
								<div class="mt-1 mr-4 text-[#3a6186]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
								</div>
								<div>
									<p class="font-medium text-[#2c3e50]">Phone</p>
									<p class="text-[#5d6d7e]">(555) 123-4567</p>
								</div>
							</div>

							<div class="flex items-start">
								<div class="mt-1 mr-4 text-[#3a6186]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<p class="font-medium text-[#2c3e50]">Availability</p>
									<p class="text-[#5d6d7e]">Monday - Friday: 8am - 8pm</p>
									<p class="text-[#5d6d7e]">Weekends: By appointment</p>
								</div>
							</div>

							<div class="flex items-start">
								<div class="mt-1 mr-4 text-[#3a6186]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								<div>
									<p class="font-medium text-[#2c3e50]">Location</p>
									<p class="text-[#5d6d7e]">Boston, MA</p>
									<p class="text-[#5d6d7e]">Available for in-home care</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Contact Form -->
					<div class="bg-white p-8">
						{#if form?.success}
							<div class="mb-6 rounded-lg border border-[#3a6186] bg-[#f0e6da] p-6 text-[#2c3e50]">
								<h3 class="mb-2 font-serif text-xl font-semibold">Thank You!</h3>
								<p>
									Your message has been sent successfully. I'll get back to you as soon as possible.
								</p>
								{#if form?.googleFormSuccess === false}
									<p class="mt-2 text-[#89253e]">
										Note: There was an issue saving your message to our records, but I've received
										your inquiry and will respond shortly.
									</p>
								{/if}
							</div>
						{/if}

						<form method="post" class="space-y-6">
							<div>
								<label for="name" class="mb-2 block font-medium text-[#2c3e50]">Your Name</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									class="w-full rounded-md border border-[#d1d5db] px-4 py-2 transition-colors focus:border-[#3a6186] focus:ring focus:ring-[#3a6186]/20"
									placeholder="John Smith"
								/>
							</div>

							<div>
								<label for="email" class="mb-2 block font-medium text-[#2c3e50]">Your Email</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									class="w-full rounded-md border border-[#d1d5db] px-4 py-2 transition-colors focus:border-[#3a6186] focus:ring focus:ring-[#3a6186]/20"
									placeholder="john@example.com"
								/>
							</div>

							<div>
								<label for="message" class="mb-2 block font-medium text-[#2c3e50]"
									>Your Message</label
								>
								<textarea
									id="message"
									name="message"
									rows="5"
									required
									class="w-full rounded-md border border-[#d1d5db] px-4 py-2 transition-colors focus:border-[#3a6186] focus:ring focus:ring-[#3a6186]/20"
									placeholder="Tell me about your childcare needs..."
								></textarea>
							</div>

							<button
								type="submit"
								class="w-full transform rounded-md bg-gradient-to-r from-[#3a6186] to-[#89253e] px-4 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer Section -->
	<div id="contact" class="bg-[#2c3e50] px-6 py-16 text-white">
		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
			<!-- Contact Info -->
			<div>
				<h3 class="mb-4 border-b border-[#4a5568] pb-2 font-serif text-xl font-semibold">
					Contact Info
				</h3>
				<ul class="space-y-3">
					<li class="flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-0.5 mr-3 h-5 w-5 text-[#89253e]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<a href="mailto:elmira@example.com" class="transition-colors hover:text-[#f0e6da]"
							>elmira@example.com</a
						>
					</li>
					<li class="flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-0.5 mr-3 h-5 w-5 text-[#89253e]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						<span>(555) 123-4567</span>
					</li>
					<li class="flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-0.5 mr-3 h-5 w-5 text-[#89253e]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<span>Boston, MA</span>
					</li>
				</ul>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 border-b border-[#4a5568] pb-2 font-serif text-xl font-semibold">
					Quick Links
				</h3>
				<ul class="space-y-2">
					<li><a href="/" class="transition-colors hover:text-[#f0e6da]">Home</a></li>
					<li><a href="/about" class="transition-colors hover:text-[#f0e6da]">About Elmira</a></li>
					<li>
						<a href="/services" class="transition-colors hover:text-[#f0e6da]">Services & Rates</a>
					</li>
					<li><a href="/faq" class="transition-colors hover:text-[#f0e6da]">FAQ</a></li>
					<li><a href="/blog" class="transition-colors hover:text-[#f0e6da]">Parenting Tips</a></li>
				</ul>
			</div>

			<!-- Book a Meet & Greet -->
			<div>
				<h3 class="mb-4 border-b border-[#4a5568] pb-2 font-serif text-xl font-semibold">
					Book a Meet & Greet
				</h3>
				<p class="mb-4 text-[#cbd5e0]">
					Interested in learning more? Let's schedule a time to meet and discuss your family's
					needs.
				</p>
				<a
					href="mailto:elmira@example.com?subject=Meet%20and%20Greet%20Request"
					class="inline-block transform rounded-md bg-gradient-to-r from-[#3a6186] to-[#89253e] px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					Schedule Now
				</a>

				<!-- Social Media Icons -->
				<div class="mt-6 flex space-x-4">
					<a
						href="https://facebook.com"
						aria-label="Visit Facebook page"
						class="text-white transition-colors hover:text-[#f0e6da]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
							/>
						</svg>
					</a>
					<a
						href="https://instagram.com"
						aria-label="Visit Instagram page"
						class="text-white transition-colors hover:text-[#f0e6da]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-12 text-center text-sm text-[#cbd5e0]">
			<p>© {new Date().getFullYear()} Elmira's Playhouse. All rights reserved.</p>
			<div class="mt-2">
				<img
					src="/images/elmira.png"
					alt="Elmira's Playhouse"
					class="inline-block h-8 opacity-50"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
