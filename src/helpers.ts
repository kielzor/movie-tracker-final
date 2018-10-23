export const getUser = async () => {
  const response = await fetch('https://localhost:3000')
  const userData = await response.json()
  console.log(userData)
}