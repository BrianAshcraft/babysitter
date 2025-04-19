<script lang="ts">
  export let data: { success?: boolean };
</script>

<section class="py-12 px-4">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-5xl font-bold text-purple-700 mb-4">Say Hello to Miss Elmira!</h2>
      <p class="text-xl text-pink-600">Let's plan some magical playtime together!</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-gradient-to-br from-yellow-200 to-pink-200 rounded-2xl p-8 shadow-lg order-2 md:order-1">
        <div class="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl p-6 transform -rotate-1 hover:rotate-0 transition duration-300">
          <h3 class="text-3xl font-bold text-purple-700 mb-4 flex items-center">
            <span class="text-3xl mr-3">📞</span> Get in Touch!
          </h3>
          
          <div class="space-y-4 text-lg text-purple-800">
            <p class="flex items-center">
              <span class="text-pink-500 mr-3">✉️</span> Email: <a href="mailto:elmira@playhouse.fun" class="text-purple-600 hover:text-pink-600 underline">elmira@playhouse.fun</a>
            </p>
            <p class="flex items-center">
              <span class="text-pink-500 mr-3">📱</span> Phone: (555) 123-4567
            </p>
            <p class="flex items-start">
              <span class="text-pink-500 mr-3">📍</span> <span>Serving families in the greater<br/>Springfield area</span>
            </p>
          </div>
          
          <div class="mt-6">
            <h4 class="text-2xl font-bold text-purple-700 mb-3">Playhouse Hours:</h4>
            <p class="text-purple-800">Monday - Friday: 8am - 8pm</p>
            <p class="text-purple-800">Weekends: By appointment</p>
            <p class="text-purple-800 mt-2 italic">Special events and overnight stays available!</p>
          </div>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl p-8 shadow-lg order-1 md:order-2">
        {#if data?.success}
          <div class="bg-green-100 border-2 border-green-400 text-green-700 px-6 py-4 rounded-xl mb-6 shadow-inner text-center">
            <p class="text-xl font-bold">🎉 Yay! Message Sent! 🎉</p>
            <p class="mt-2">Thank you for your message! Miss Elmira will get back to you super soon with playhouse magic!</p>
          </div>
        {/if}
        
        <form method="post" class="space-y-5">
          <div>
            <label for="name" class="block text-purple-700 font-bold mb-2 text-lg">Your Name</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              required 
              class="w-full border-2 border-purple-300 rounded-xl px-4 py-3 focus:border-pink-400 focus:ring focus:ring-pink-200 transition duration-200" 
              placeholder="What should Miss Elmira call you?"
            />
          </div>
          
          <div>
            <label for="email" class="block text-purple-700 font-bold mb-2 text-lg">Your Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              class="w-full border-2 border-purple-300 rounded-xl px-4 py-3 focus:border-pink-400 focus:ring focus:ring-pink-200 transition duration-200" 
              placeholder="Where should Miss Elmira reply?"
            />
          </div>
          
          <div>
            <label for="message" class="block text-purple-700 font-bold mb-2 text-lg">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              class="w-full border-2 border-purple-300 rounded-xl px-4 py-3 focus:border-pink-400 focus:ring focus:ring-pink-200 transition duration-200" 
              placeholder="Tell Miss Elmira about your playdate needs!"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold px-6 py-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition duration-300 shadow-lg flex items-center justify-center"
          >
            <span class="mr-2">📨</span> Send Your Message <span class="ml-2">✨</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
