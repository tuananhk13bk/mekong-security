import moment from 'moment'

const generateRfidSysNum = (workOrderCode) => {
  const current = moment().format('YYYYMMDDhhmmssax')
  return `${current}${workOrderCode}`
}

export default generateRfidSysNum