import { FC } from 'react';
import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type DeleteModalType = {
  setOpen: (open: boolean) => void;
};

export const DeleteModal: FC<DeleteModalType> = ({ setOpen }) => {
  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <Box>
      <h2 id="parent-modal-title">Уверены что хотите удалить?</h2>
      <Button onClick={handleClose}>удалить</Button>
      <Button onClick={handleClose}>закрыть</Button>
    </Box>
  );
};
