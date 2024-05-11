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

  const handleSubmit = () => {
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    fetch('http://13.53.214.255/send_email', {
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
          onChange={(e) => setName(e.target.value)}
        />
        <h3 className="pb-2">E-mail</h3>
        <TextField
          id="outlined-textarea"
          label="Your E-mail Address"
          placeholder="Placeholder"
          multiline
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className="pb-2">Message</h3>
        <TextField
          id="fullWidth"
          label="Your Message"
          multiline
          rows={4}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Send
        </Button>
        <ToastContainer />
      </div>
    </Box>
  );
}
