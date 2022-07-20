import * as React from 'react';
import { FC } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type UpdateModalType = {
  setOpen: (open: boolean) => void;
};

export const UpdateModal: FC<UpdateModalType> = ({ setOpen }) => {
  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Box>
      <h2 id="parent-modal-title">Редактировать содержимое</h2>
      {/* <p id="parent-modal-description">модалка</p> */}
      <Button onClick={handleClose}>применить</Button>
      <Button onClick={handleClose}>закрыть</Button>
    </Box>
  );
};
