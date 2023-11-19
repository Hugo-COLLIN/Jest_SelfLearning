test("displays content after click", () => {
  document.body.innerHTML = `<div>Contenu <span class="spoiler">caché!!!</span></div>`
  require('../src/spoiler.js')
  const spoilerBtn = document.querySelector(".spoiler button")
  const spoilerText = document.querySelector(".spoiler span")

  expect(spoilerBtn).not.toBeNull()
  expect(spoilerText).not.toBeNull()
  // expect(spoilerText.classList.contains('visible')).toBe(false)
  expect(spoilerText).not.toHaveClass('visible')
  spoilerBtn.click()
  // expect(spoilerText.classList.contains('visible')).toBe(true)
  expect(spoilerText).toHaveClass('visible')

})