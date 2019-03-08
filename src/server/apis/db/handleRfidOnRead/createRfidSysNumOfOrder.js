
const CREATE_QUERY_STRING = 
`
  INSERT INTO rel_rfid_sys_num_and_work_order (rfid_sys_num, assigned_to_work_order)
  VALUES($1, $2)  
`
const READ_RFID_SYS_NUM_QUERY_STRING =
`
  SELECT rfid_sys_num FROM rfid
  WHERE rfid_tag_num = $1 AND enable_var = true
`

const UPDATE_RFID_SYS_NUM_IN_WORK_ORDER =
`
  UPDATE work_order SET rfid_sys_num = $2 WHERE work_order_code = $1
`

async function createRfidSysNumOfOrder(client, [rfidTagNum, workOrderCode]) {
  try {
    const rfidSysNum = await client.query(READ_RFID_SYS_NUM_QUERY_STRING, [rfidTagNum])
    const rfidSysNumValue = await rfidSysNum.rows[0].rfid_sys_num

    await client.query(CREATE_QUERY_STRING, [rfidSysNumValue, workOrderCode])

    await client.query(UPDATE_RFID_SYS_NUM_IN_WORK_ORDER, [workOrderCode, rfidSysNumValue])

    return `RFID system number ${rfidSysNumValue} is assigned to work order code ${workOrderCode}: ${rfidTagNum}`
  }
  catch(err) {
    throw err
  }
  // finally {
  //   client.release()
  // }
}

module.exports = createRfidSysNumOfOrder