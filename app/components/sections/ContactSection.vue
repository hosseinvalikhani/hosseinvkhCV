<template>
  <section
    id="contact"
    class="py-16 px-4 max-w-4xl mx-auto"
  >
    <SectionTitle
      title="Get In Touch"
      comment="mail_smtp"
    />

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <!-- Left side: Standard Info -->
      <div class="md:col-span-5 space-y-6 font-mono text-xs">
        <h3 class="text-brand-accent-amber select-none">// contact_info</h3>

        <div class="space-y-4 text-[#8b949e]">
          <div
            class="p-4 rounded-lg bg-brand-surface/40 border border-brand-border space-y-2"
          >
            <div class="text-brand-accent-cyan-bright text-xs">
              // host_email
            </div>
            <a
              href="mailto:hosseinvkhdev@gmail.com"
              class="text-brand-text-primary hover:text-brand-accent-green transition-colors text-xs sm:text-sm font-bold block"
            >
              hosseinvkhdev@gmail.com
            </a>
          </div>

          <div
            class="p-4 rounded-lg bg-brand-surface/40 border border-brand-border space-y-2"
          >
            <div class="text-brand-accent-cyan-bright text-xs">
              // cell_number
            </div>
            <div class="text-brand-text-primary text-xs sm:text-sm font-bold">
              +98 903 000 0000
              <span class="text-[#8b949e] text-[11px] font-normal font-sans"
                >(mock)</span
              >
            </div>
          </div>

          <div
            class="p-4 rounded-lg bg-brand-surface/40 border border-brand-border space-y-2"
          >
            <div class="text-brand-accent-cyan-bright text-xs">
              // locale_dns
            </div>
            <div class="text-brand-text-primary text-xs sm:text-sm font-bold">
              Tehran, Iran (UTC +3.5)
            </div>
          </div>
        </div>
      </div>

      <!-- Right side: Terminal Interactive Form -->
      <div class="md:col-span-7 w-full font-mono">
        <h3 class="text-brand-accent-amber mb-4 select-none">
          // interactive_smtp_client
        </h3>

        <div
          class="rounded-lg border border-brand-border bg-brand-surface overflow-hidden shadow-2xl"
        >
          <!-- Window buttons top bar -->
          <div
            class="flex items-center justify-between px-4 py-2.5 bg-[#11151c] border-b border-brand-border select-none text-xs"
          >
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span class="text-brand-accent-green font-bold"
              >smtp_mailer.sh</span
            >
            <span class="text-[#8b949e]">CLI</span>
          </div>

          <!-- Form body -->
          <div class="p-4 sm:p-6 space-y-4 text-xs sm:text-sm">
            <form
              v-if="!isSent"
              @submit.prevent="handleSubmit"
              class="space-y-4"
            >
              <!-- Name Field -->
              <div class="space-y-1.5">
                <label class="text-[#8b949e]">
                  visitor@client:~$
                  <span class="text-brand-text-primary">read name</span>
                </label>
                <div
                  class="flex items-center gap-2 border border-brand-border bg-[#0d1117] rounded px-3 py-2 text-brand-text-primary focus-within:border-brand-accent-green transition-all"
                >
                  <span class="text-brand-accent-green select-none">></span>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="your full name"
                    class="bg-transparent border-0 outline-none w-full text-brand-text-primary placeholder:text-brand-border"
                  />
                </div>
              </div>

              <!-- Email Field -->
              <div class="space-y-1.5">
                <label class="text-[#8b949e]">
                  visitor@client:~$
                  <span class="text-brand-text-primary">read email</span>
                </label>
                <div
                  class="flex items-center gap-2 border border-brand-border bg-[#0d1117] rounded px-3 py-2 text-brand-text-primary focus-within:border-brand-accent-green transition-all"
                >
                  <span class="text-brand-accent-green select-none">></span>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    class="bg-transparent border-0 outline-none w-full text-brand-text-primary placeholder:text-brand-border"
                  />
                </div>
              </div>

              <!-- Message Field -->
              <div class="space-y-1.5">
                <label class="text-[#8b949e]">
                  visitor@client:~$
                  <span class="text-brand-text-primary">read message</span>
                </label>
                <div
                  class="flex items-start gap-2 border border-brand-border bg-[#0d1117] rounded px-3 py-1.5 text-brand-text-primary focus-within:border-brand-accent-green transition-all"
                >
                  <span class="text-brand-accent-green select-none mt-0.5"
                    >></span
                  >
                  <textarea
                    v-model="form.message"
                    rows="3"
                    required
                    placeholder="type your message here..."
                    class="bg-transparent border-0 outline-none w-full text-brand-text-primary placeholder:text-brand-border resize-none"
                  />
                </div>
              </div>

              <!-- Submit command simulation button -->
              <button
                type="submit"
                :disabled="isSending"
                class="w-full py-2.5 rounded border border-brand-accent-green text-brand-accent-green bg-brand-accent-green/5 hover:bg-brand-accent-green hover:text-brand-bg font-bold cursor-pointer transition-all duration-300 disabled:opacity-50 select-none font-mono text-center block"
              >
                {{ isSending ? "transmitting..." : "./smtp_mailer.sh --send" }}
              </button>
            </form>

            <!-- Sending simulated output logs -->
            <div
              v-else
              class="space-y-2.5 text-xs text-[#8b949e]"
            >
              <div class="text-brand-text-primary">
                visitor@client:~$ ./smtp_mailer.sh --send
              </div>
              <div>
                Initializing smtp connection to
                <span class="text-brand-text-primary">smtp.gmail.com:587</span
                >...
              </div>
              <div class="text-brand-accent-green">
                [OK] Secure SMTP handshake verified via STARTTLS.
              </div>
              <div>
                Packing envelope for message subject "Personal Site inquiry"
              </div>
              <div>
                Recipient:
                <span class="text-brand-text-primary"
                  >hosseinvkhdev@gmail.com</span
                >
              </div>
              <div class="text-brand-accent-green">
                [OK] Loading content bytes: size {{ messageLength }} characters.
              </div>
              <div class="text-brand-accent-green animate-pulse">
                [OK] Transmitting message payload...
              </div>
              <hr class="border-brand-border my-2" />
              <div class="text-brand-accent-green font-bold text-sm">
                ✓ Message sent successfully!
              </div>
              <div class="text-brand-text-secondary italic">
                Thank you for your inquiry, {{ form.name }}. I will reply to you
                shortly!
              </div>

              <button
                @click="resetForm"
                class="mt-4 px-3 py-1 bg-brand-surface border border-brand-border rounded text-brand-text-primary hover:border-brand-accent-green transition-colors cursor-pointer select-none text-[11px]"
              >
                send_another_message.sh
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import SectionTitle from "~/components/ui/SectionTitle.vue";

const isSending = ref(false);
const isSent = ref(false);

const form = ref({
  name: "",
  email: "",
  message: "",
});

const messageLength = computed(() => {
  return form.value.message.length;
});

function handleSubmit() {
  isSending.value = true;
  // Simulate secure network transaction
  setTimeout(() => {
    isSending.value = false;
    isSent.value = true;
  }, 1800);
}

function resetForm() {
  form.value = {
    name: "",
    email: "",
    message: "",
  };
  isSent.value = false;
}
</script>
