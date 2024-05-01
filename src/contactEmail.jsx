import { useFormControl } from '@mui/material/FormControl';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactEmail() {
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
        />
        <h3 className="pb-2">E-mail</h3>
        <TextField
          id="outlined-textarea"
          label="Your E-mail Address"
          placeholder="Placeholder"
          multiline
          fullWidth
        />
        <h3 className="pb-2">Message</h3>
        <TextField
          id="fullWidth"
          label="Your Message"
          multiline
          rows={4}
          fullWidth
        />
      </div>
    </Box>
  );
}
