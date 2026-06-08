import { ref, onMounted, onUnmounted } from "vue";

export function useTypingEffect(
  phrases: string[],
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
) {
  const displayText = ref("");
  const phraseIndex = ref(0);
  const isDeleting = ref(false);
  const isBlinking = ref(true);
  let timeoutId: any = null;
  let cursorIntervalId: any = null;

  function tick() {
    if (!phrases || phrases.length === 0) return;
    const currentPhrase = phrases[phraseIndex.value] || "";

    if (isDeleting.value) {
      // Remove a character
      displayText.value = currentPhrase.substring(
        0,
        displayText.value.length - 1,
      );

      if (displayText.value === "") {
        isDeleting.value = false;
        phraseIndex.value = (phraseIndex.value + 1) % phrases.length;
        timeoutId = setTimeout(tick, 500); // pause before starting to type next word
      } else {
        timeoutId = setTimeout(tick, deleteSpeed);
      }
    } else {
      // Add a character
      displayText.value = currentPhrase.substring(
        0,
        displayText.value.length + 1,
      );

      if (displayText.value === currentPhrase) {
        isDeleting.value = true;
        timeoutId = setTimeout(tick, delayBetween); // wait before deleting
      } else {
        timeoutId = setTimeout(tick, typeSpeed);
      }
    }
  }

  onMounted(() => {
    // Cursor blink logic
    cursorIntervalId = setInterval(() => {
      isBlinking.value = !isBlinking.value;
    }, 500);

    tick();
  });

  onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId);
    if (cursorIntervalId) clearInterval(cursorIntervalId);
  });

  return {
    displayText,
    isBlinking,
  };
}
