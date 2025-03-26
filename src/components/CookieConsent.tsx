import React, { useState, useEffect } from 'react';
import {
  Snackbar,
  Button,
  Box,
  Typography,
  Link,
} from '@mui/material';

const CookieConsent: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 2,
          borderRadius: 1,
          boxShadow: 3,
          maxWidth: 600,
        }}
      >
        <Typography variant="body1" gutterBottom>
          We use cookies to enhance your experience. By continuing to visit this site
          you agree to our use of cookies. Learn more in our{' '}
          <Link href="/privacy-policy" color="primary">
            Privacy Policy
          </Link>
          .
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleDecline}
            size="small"
          >
            Decline
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAccept}
            size="small"
          >
            Accept
          </Button>
        </Box>
      </Box>
    </Snackbar>
  );
};

export default CookieConsent;
