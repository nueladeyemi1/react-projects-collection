export type AnouncementData = {
  id?: Number
  title?: string
  recipients?: string
  dateSent?: any
  status?: string
  actions?: any
  announcementAddress?: string[]
}

export const data: AnouncementData[] = [
  {
    id: 113,
    title: 'Class Outing Update',
    recipients: 'Whole School',
    dateSent: '2024-01-05 11:20:00',
    status: 'Sent',
    actions: 'Delete',
    announcementAddress: ['Students'],
  },
  {
    id: 113,
    title: 'Olugbemiro Festus',
    recipients: 'Specific Class',
    dateSent: '2024-01-05 11:20:00',
    status: 'Draft',
    actions: 'Delete',
    announcementAddress: ['Students'],
  },
  {
    id: 113,
    title: 'Class Outing Update',
    recipients: 'Whole School',
    dateSent: '2024-01-05 11:20:00',
    status: 'Sent',
    actions: 'Delete',
    announcementAddress: ['Students', 'Parents'],
  },
  {
    id: 113,
    title: 'Olugbemiro Festus',
    recipients: 'Specific Class',
    dateSent: '2024-01-05 11:20:00',
    status: 'Draft',
    actions: 'Delete',
    announcementAddress: ['Students', 'Teachers'],
  },
]
