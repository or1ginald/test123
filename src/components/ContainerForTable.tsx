import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { DeleteModal } from './DeleteModal';
import { NestedModal } from './NestedModal';
import { UpdateModal } from './UpdateModal';

import { EmployeeTable } from './index';

export const ContainerForTable: FC = () => {
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Сотрудники
        <Link to="/employees/new" className="link">
          Добавить нового сотрудника
        </Link>
      </div>
      <EmployeeTable
        setOpenDelete={setOpenDeleteModal}
        setOpenUpdate={setOpenUpdateModal}
      />
      <NestedModal open={openUpdateModal}>
        <UpdateModal setOpen={setOpenUpdateModal} />
      </NestedModal>
      <NestedModal open={openDeleteModal}>
        <DeleteModal setOpen={setOpenDeleteModal} />
      </NestedModal>
    </div>
  );
};
