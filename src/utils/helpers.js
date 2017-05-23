import users from './users'

export const formatTime = (sec) => {
  let hours = Math.floor(sec / 3600)
  let minutes = Math.floor(sec / 60)
  let seconds = sec % 60
  if (hours) {
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
  } else if (minutes) {
    return `${minutes} minutes, ${seconds} seconds`
  } else {
    return `${seconds} seconds`
  }
}

export const checkLogin = (email, password) => {
  if (users.hasOwnProperty(email)) {
    return users[email] === password
  }
  return false
}
