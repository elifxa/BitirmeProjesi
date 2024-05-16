import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const newErrors = {};
    let isValid = true;

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (message.trim() === '') {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (field, value) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }

    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (!handleValidation()) {
      return;
    }

    {
      (' ');
    }
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    fetch('https://www.beha-tech.com/send_email', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          toast.success('Email sent successfully');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          throw new Error('Failed to send email');
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Error sending email');
      });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mb: 6 },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="p-6">
        <h3 className="pb-2">Name</h3>
        <TextField
          id="outlined-multiline-flexible"
          label="Your Name"
          multiline
          maxRows={4}
          fullWidth
          value={name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={errors.name}
          helperText={errors.name}
        />
        <h3 className="pb-2">E-mail</h3>
        <TextField
          id="outlined-textarea"
          label="Your E-mail Address"
          placeholder="Placeholder"
          multiline
          fullWidth
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={errors.email}
          helperText={errors.email}
        />
        <h3 className="pb-2">Message</h3>
        <TextField
          id="fullWidth"
          label="Your Message"
          multiline
          rows={4}
          fullWidth
          value={message}
          onChange={(e) => handleChange('message', e.target.value)}
          error={errors.message}
          helperText={errors.message}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 2, p: '12px 24px', fontSize: '1rem' }}
        >
          Send
        </Button>
        <ToastContainer />
      </div>
    </Box>
  );
}
