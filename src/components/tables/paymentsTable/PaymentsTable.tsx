import React, { memo } from 'react';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import { TableButtons } from 'components';

// import s from './Table.module.scss';

type TableHeaderType = {
  key: string;
  label: string;
};

type PaymentType = {
  id: string;
  userId: string;
  date: Date;
  amount: string;
  paymentStatus: string;
};

// const normalizeDate = (a: any): string => `Посмотри в консоли ${a}`;

// type TablePropsType = {
//   tableItems: Array<any>; // tableHeaders: { [x: string]: string };
//   // tableHeaders: TableHeaderType[];
//   // handleDeleteButtonClick: (id: string) => void;
//   /* setId: (id: string) => void;
//   openDeleteModal: () => void;
//   openUpdateModal: () => void; */
//   // handleOnSortClick: (param: string) => void;
//   // sort: string;
// };

export const PaymentsTable = memo(() => {
  const tableHeaders: TableHeaderType[] = [
    { key: 'date', label: 'Дата платежа' },
    { key: 'amount', label: 'Сумма платежа' },
    { key: 'paymentStatus', label: 'Статус' },
  ];

  const userRows: PaymentType[] = [
    { id: '1', date: new Date(), amount: '20000', paymentStatus: 'Оплачен', userId: '2' },
    { id: '2', date: new Date(), amount: '20000', paymentStatus: 'Оплачен', userId: '2' },
    { id: '3', date: new Date(), amount: '20000', paymentStatus: 'Оплачен', userId: '2' },
    { id: '4', date: new Date(), amount: '20000', paymentStatus: 'Оплачен', userId: '2' },
  ];

  return (
    <TableContainer component={Paper} className="table" sx={{ minWidth: 650 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map(({ key, label }) => (
              <TableCell className="tableCell" key={key}>
                {label}
              </TableCell>
            ))}
            <TableCell className="tableCell">Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userRows.map(tableItem => (
            <TableRow key={tableItem.id}>
              <TableCell className="tableCell">{tableItem.date.toDateString()}</TableCell>
              <TableCell className="tableCell">{tableItem.amount}</TableCell>
              <TableCell className="tableCell">{tableItem.paymentStatus}</TableCell>
              <TableCell
                className="tableCell"
                sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}
              >
                <Button variant="outlined" color="primary" sx={{ maxWidth: '200px' }}>
                  Редактировать
                </Button>
                <Button variant="outlined" color="inherit" sx={{ maxWidth: '200px' }}>
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
