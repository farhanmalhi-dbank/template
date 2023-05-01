import { dateTimeFormat, TRANSACTION_STATUS } from '../constants';
import { toDateString } from '../utils/date/date-util';

interface TableDataType {
  key: string;
  trans_id: string;
  date_time_start: string;
  date_time_end: string;
  dbank_id_sender: string;
  amount: number;
  status: string;
  location: string;
  medium: string;
  reason: string;
  tags: string[];
}

export const mockTable: TableDataType[] = [
  {
    key: '1',
    trans_id: 'db78db78db78db7856db78db78db78db7856db78db78db78db7856',
    date_time_start: toDateString(new Date('2/13/22 11:11'), dateTimeFormat),
    date_time_end: '2/3/22, 5:20pm',
    dbank_id_sender: 'ahmedmushtaq@gmail.com',
    amount: 90050,
    status: TRANSACTION_STATUS.SUCCESS,
    location: 'Gulberg',
    medium: 'Card',
    reason: 'Online Shopping',

    tags: ['PENDING']
  },
  {
    key: '2',
    trans_id: 'db78db78db78db7857',
    date_time_start: toDateString(new Date('2/14/22 5:39 pm'), dateTimeFormat),
    date_time_end: '2/3/22, 5:39am',
    dbank_id_sender: 'chmedmushtaq@gmail.com',
    amount: 1809090900808080808,
    status: TRANSACTION_STATUS.FAILED,
    location: 'Kimari',
    medium: 'App',
    reason: 'Online Shopping',

    tags: ['SUCCESS', 'PENDING']
  },
  {
    key: '3',
    trans_id: 'db78db78db78db7857',
    date_time_start: toDateString(new Date('2/4/22 5:39 pm'), dateTimeFormat),

    date_time_end: '2/3/22, 5:39am',
    dbank_id_sender: 'dhmedmushtaq@gmail.com',
    amount: 1800,
    status: TRANSACTION_STATUS.PENDING,
    location: 'Kimari',
    medium: 'Card',
    reason: 'Online Shopping',

    tags: ['SUCCESS', 'FAILED']
  },
  {
    key: '4',
    trans_id: 'db78db78db78db7856',
    date_time_start: '2/3/22, 5:39pm',
    date_time_end: '2/3/22, 5:20pm',
    dbank_id_sender: 'ahmedmushtaq@gmail.com',
    amount: 90050,
    status: TRANSACTION_STATUS.SUCCESS,
    location: 'Gulberg',
    medium: 'Card',
    reason: 'Online Shopping',

    tags: ['SUCCESS']
  },
  {
    key: '5',
    trans_id: 'abcdeefghijklmnopd78db78db78',
    date_time_start: '2/4/22, 5:39pm',
    date_time_end: '2/3/22, 5:39am',
    dbank_id_sender: 'chmedmushtaq@gmail.com',
    amount: 1800,
    status: TRANSACTION_STATUS.FAILED,
    location: 'Kimari',
    medium: 'App',
    reason: 'Online Shopping',
    tags: ['SUCCESS', 'Nice', 'PENDING']
  }
];
export const mockTableActionButtons = [
  {
    title: 'View',
    onClick: () => {}
  },
  {
    title: 'Delete',
    type: 'ghost' as 'ghost',
    onClick: () => {}
  }
];
