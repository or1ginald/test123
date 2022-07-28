export const userColumns = [
  {
    field: 'employee',
    headerName: 'ФИО',
    width: 230,
  },
  {
    field: 'inn',
    headerName: 'ИНН',
    width: 100,
  },
  { field: 'jiraId', headerName: 'Jira id', width: 70 },

  {
    field: 'customer',
    headerName: 'Заказчик',
    width: 250,
  },
  {
    field: 'workTime',
    headerName: 'Плановые трудозатраты',
    width: 250,
    /* renderCell: params => (
      <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    ), */
  },
];
type UserType = {
  id: string;
  employee: string;
  inn: string;
  jiraId: string;
  customer: string;
  workTime: string;
};

// temporary data
export const userRows: UserType[] = [
  {
    id: '1',
    employee: 'Иванов Иван Иванович',
    inn: '1234567890',
    customer: 'ИП Зайка',
    jiraId: '1',
    workTime: 'Втб 30 часов, бар 100 часов',
  },
  {
    id: '2',
    employee: 'Деда Максим Петрович',
    inn: '123456789111',
    customer: 'ИП Смородинова',
    jiraId: '2',
    workTime: 'Клей 100 часов',
  },
  {
    id: '3',
    employee: 'Вжух Петр Иванович',
    inn: '1234567890',
    customer: 'ИП Малинова',
    jiraId: '3',
    workTime: 'Уборка 120 часов',
  },
  {
    id: '4',
    employee: 'Лала Филлип Семенович',
    inn: '1234567890',
    customer: 'ИП Зайка',
    jiraId: '4',
    workTime: 'Дудеть в руку 20 часов',
  },
  {
    id: '5',
    employee: 'Дракула Влад Владович',
    inn: '7777777777',
    customer: 'ИП Тартанова',
    jiraId: '5',
    workTime: 'Питье крови 10к часов',
  },
  {
    id: '6',
    employee: 'Микки Маус',
    inn: '1313131313',
    customer: 'Disney',
    jiraId: '6',
    workTime: 'Работа на аудиторию 170 часов',
  },
  {
    id: '7',
    employee: 'Дзюба Артем Сергеевич',
    inn: '1234567890',
    customer: 'ФК Зенит',
    jiraId: '7',
    workTime: 'Работа из дома 3 часа',
  },
  {
    id: '8',
    employee: 'Иванов Иван Иванович',
    inn: '1234567890',
    customer: 'ИП Зайка',
    jiraId: '8',
    workTime: 'Втб 30 часов, бар 100 часов',
  },
  {
    id: '9',
    employee: 'Иванов Иван Иванович',
    inn: '1234567890',
    customer: 'ИП Зайка',
    jiraId: '9',
    workTime: 'Втб 30 часов, бар 100 часов',
  },
  {
    id: '10',
    employee: 'Иванов Иван Иванович',
    inn: '1234567890',
    customer: 'ИП Зайка',
    jiraId: '10',
    workTime: 'Втб 30 часов, бар 100 часов',
  },
  {
    id: '11',
    employee: 'Иванов Иван Иванович',
    inn: '1234567890',
    customer: 'ИП Зайка',
    jiraId: '11',
    workTime: 'Втб 30 часов, бар 100 часов sfgedgtdgtdgdetgrwfgrsgerd',
  },
];
