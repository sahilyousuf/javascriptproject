var input = document.getElementById('input'),
    lower = document.getElementById('lowercase'),
    sentence = document.getElementById('sentencecase'),
    title = document.getElementById('titlecase'),
    upper = document.getElementById('uppercase')

function update(){
  // Lowercase
  lower.value = input.value.toLowerCase()

}

input.addEventListener('blur',update)
input.addEventListener('keyup',update)