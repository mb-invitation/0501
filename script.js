const canvas = document.getElementById('custom_canvas')

const jsConfetti = new JSConfetti({ canvas })




addEventListener("scroll", (event) => {   


 jsConfetti.addConfetti({
  emojis: [ '✨'],
  emojiSize: 50,
  confettiNumber: 200,
})



});

