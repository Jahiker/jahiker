export const contactForm = {
  title: 'Contact Me',
  name: {
    label: 'Name',
    errors: {
      required: 'Name is required'
    }
  },
  email: {
    label: 'Email',
    errors: {
      required: 'Email is required',
      pattern: 'Invalid email'
    }
  },
  messageText: {
    label: 'Message',
    errors: {
      required: 'Message is required'
    }
  },
  submit: {
    label: 'Send',
    sending: 'Sending...'
  },
  success: {
    message: 'Message successfully sent!'
  }
}
