import './payments.scss';
import { FC } from 'react';

import { Link } from 'react-router-dom';

import { PaymentsTable } from '../../components';

export const Payments: FC = () => (
  <div className="datatable">
    <div className="datatableTitle">
      Оплаты
      <Link to="/employees/new" className="link">
        Добавить нового сотрудника
      </Link>
    </div>
    <PaymentsTable />
  </div>
);
