import './list.scss';
import { FC } from 'react';

// import Navbar from '../../components/navbar/Navbar';
import { Employees } from '../employees';

const List: FC = () => (
  <div className="listContainer">
    <Employees />
  </div>
);

export default List;
