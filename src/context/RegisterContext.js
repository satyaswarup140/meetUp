import React from 'react'

const RegistrationContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})

export default RegistrationContext
