import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './styles.css';

export const MaterialUIBasicElements = () => {
  return (
    <div>
      <Button color="secondary" variant="contained" disableElevation>
        KLIKNIJ MNIE
      </Button>
      <Button variant="outlined" color="error">
        {' '}
        NIE KLIKAJ{' '}
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
};
