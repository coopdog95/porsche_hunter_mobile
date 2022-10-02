import { DateTime } from 'luxon'

export const formatHuntDate = date => {
  if (!date) return ''
  const messageDate = DateTime.fromISO(date)
  const timeFormat = DateTime.fromISO(date).toLocaleString(DateTime.TIME_SIMPLE)
  switch (determineRelativeSendTime(date)) {
    case 'today':
      return timeFormat
    case 'week':
      return messageDate.toFormat('h:mm a, cccc')
    default:
      return messageDate.toFormat('h:mm a, LLL d')
  }
}

const determineRelativeSendTime = date => {
  if (!date) return 'other'
  const messageDate = DateTime.fromISO(date)
  const wasSentToday = messageDate > DateTime.local().startOf('day')
  const wasSentThisWeek = messageDate > DateTime.local().startOf('week')
  if (wasSentToday) return 'today'
  if (wasSentThisWeek) return 'week'
  return 'other'
}
