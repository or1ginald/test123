import React, { FC, memo } from 'react';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userRows } from '../../../datatablesource';
import '../table.scss';
import { getIsDarkMode } from '../../../store';

type TableHeaderType = {
  key: string;
  label: string;
};

type PropsType = {
  setOpenDelete: (open: boolean) => void;
  setOpenUpdate: (open: boolean) => void;
};
export const EmployeeTable: FC<PropsType> = memo(({ setOpenDelete, setOpenUpdate }) => {
  const navigate = useNavigate();
  const isDarkMode = useSelector(getIsDarkMode);

  const tableHeaders: TableHeaderType[] = [
    { key: 'employee', label: 'ФИО' },
    { key: 'inn', label: 'ИНН' },
    { key: 'jiraId', label: 'Jira ID' },
    { key: 'customer', label: 'Заказчик' },
    { key: 'workTime', label: 'Плановые трудозатраты' },
  ];

  const outline = isDarkMode ? '1px solid rgba(255,255,255,0.1)' : 'none';
  // const arrow = sort[ARRAY_ZERO_ELEMENT] === '0' ? '⬇' : '⬆';
  // const keys = tableHeaders.map(header => header.key);
  // const labels = tableHeaders.map(header => header.label);

  // const [sortKey, setSortKey] = useState('');
  // const [sortOrder, setSortOrder] = useState('');

  // const dispatch = useDispatch();
  // const one = 1;

  return (
    <TableContainer
      component={Paper}
      className="table"
      sx={{
        outline,
        minWidth: 650,
      }}
    >
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
              <TableCell
                onClick={() => navigate(`${tableItem.id}`)}
                className="tableCell clickable"
              >
                {tableItem.employee}
              </TableCell>
              <TableCell className="tableCell">{tableItem.inn}</TableCell>
              <TableCell className="tableCell">{tableItem.jiraId}</TableCell>
              <TableCell className="tableCell clickable">{tableItem.customer}</TableCell>
              <TableCell className="tableCell">{tableItem.workTime}</TableCell>
              <TableCell
                className="tableCell"
                sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setOpenUpdate(true)}
                >
                  Редактировать
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => setOpenDelete(true)}
                >
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
