const canvas = document.getElementById('custom_canvas')

const jsConfetti = new JSConfetti({ canvas })




addEventListener("scroll", (event) => {   


 jsConfetti.addConfetti({
  emojis: [ '✨'],
  emojiSize: 25,
  confettiNumber: 40,
})



});

