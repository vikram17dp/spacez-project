// Dummy authentication for SPACEZ app
export const dummyCredentials = {
  email: "vikramdp@gmail.com",
  password: "vikram@2004",
}

export const isAuthenticatedUser = (email: string, password: string): boolean => {
  return email === dummyCredentials.email && password === dummyCredentials.password
}

export const getUserData = () => ({
  name: "Vikram DP",
  email: "vikramdp@gmail.com",
  phone: "+91 98765 43210",
  location: "Bangalore, India",
  avatar: "V",
})
