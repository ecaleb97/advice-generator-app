const apiUrl = 'https://api.adviceslip.com/advice'

export async function getRandomAdvice() {
  const response = await fetch(apiUrl)
  const data = await response.json()
  const advice = data.slip.advice
  const id = data.slip.id
  return { advice, id }
}