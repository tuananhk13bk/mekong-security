// Convert object keys to camelCase
const camelcaseKeys = require('camelcase-keys')
const moment = require('moment')
const Pool = require('pg').Pool
const dbConfig = require('./dbConfig')
const pool = new Pool(dbConfig)

async function getAllOrder(req, res) {
  // const rfidCode = req.params.rfidCode
  const queryString = 
    `SELECT 
      work_order.work_order_code, 
      work_order.rfid_sys_num, 
      profile_cus.cus_full_name, 
      work_order_item.product_full_name,
      work_order_item.amount,
      work_order_item_measurement_unit.unit,
      work_order_item_type.product_type,
      work_order_status_list.status, 
      profile_driver.driver_full_name,
      profile_driver.driver_id_num, 
      to_char(profile_driver.driver_id_expdate, 'DD-MM-YYYY') as driver_id_expdate, 
      profile_driver.driver_lic_num, 
      to_char(profile_driver.driver_lic_expdate, 'DD-MM-YYYY') as driver_lic_expdate, 
      profile_driver.fire_fighting_cert_num,
      to_char(profile_driver.fire_fighting_expdate, 'DD-MM-YYYY') as fire_fighting_expdate, 
      profile_trans_co.trans_co_full_name, 
      profile_vehicle.plate_num, 
      profile_vehicle.owner_full_name, 
      to_char(profile_vehicle.vehicle_reg_cert_expdate, 'DD-MM-YYYY') as vehicle_reg_cert_expdate, 
      to_char(profile_vehicle.chemical_trans_lic_expdate, 'DD-MM-YYYY') as chemical_trans_lic_expdate, 
      to_char(profile_vehicle.assurance_expdate, 'DD-MM-YYYY') as assurance_expdate, 
      to_char(profile_vehicle.vehicle_inspectation_cert_expdate, 'DD-MM-YYYY') as vehicle_inspectation_cert_expdate 
    FROM work_order INNER JOIN work_order_item ON 
      work_order.work_order_code = work_order_item.work_order_code
        INNER JOIN profile_cus ON work_order.cus_code = profile_cus.cus_code 
        INNER JOIN work_order_item_type ON work_order_item.product_type_id = work_order_item_type.id
        INNER JOIN work_order_item_measurement_unit ON work_order_item.unit_id = work_order_item_measurement_unit.id
        INNER JOIN work_order_status_list ON work_order.status_id = work_order_status_list.id
        INNER JOIN profile_driver ON work_order.driver_code = profile_driver.driver_code 
        INNER JOIN profile_vehicle ON work_order.vehicle_code = profile_vehicle.vehicle_code 
        INNER JOIN profile_trans_co ON work_order.trans_co_code = profile_trans_co.trans_co_code
    WHERE work_order.status_id = 3
    ORDER BY work_order.work_order_code
  `
  const client = await pool.connect()
  await client.query(queryString, (err, result) => {
    if (err) {
      throw err
    }
    res.status(200).json(camelcaseKeys(result.rows))
  })
  client.release()
}

async function updateOrderStatus(req, res) {
  const id = req.params.id
  const { status } = req.body
  const client = await pool.connect()
  await client.query(
    'UPDATE work_order SET status = $2 WHERE work_order_code = $1',
    [id, status],
    (err, result) => {
      if (err) throw err
      res.status(200).send(`Status modified with order code: ${id}`)
    }
  )
  client.release()
}

async function createRfidEvent(req, res) {
  // const id = req.params.id
  const { rfidTagNum, rfidReaderCode } = req.body
  const readDateTime = moment().format('DD-MM-YYYY')
  const client = await pool.connect()
  await client.query(
    `
      INSERT INTO rfid_events (rfid_tag_num, rfid_reader_code, read_date_time)
      VALUES($1, $2, to_date($3, 'DD-MM-YYYY'))
    `,
    [rfidTagNum, rfidReaderCode, readDateTime],
    (err, result) => {
      if (err) throw err
      res.status(201).send(`Rfid event added with rfidTagNum: ${rfidTagNum}`)
    }
  )
  client.release()
}

module.exports = {
  getAllOrder,
  updateOrderStatus,
  createRfidEvent,
}
