// Convert object keys to camelCase
const camelcaseKeys = require('camelcase-keys')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '103.1.237.99',
  database: 'vcdn',
  password: 'Y8zpVGNv4r36',
  port: 5432,
})

const getAllOrder = (req, res) => {
  // const rfidCode = req.params.rfidCode
  const queryString = 
    "SELECT \
      work_order.work_order_code, \
      work_order.rfid_sys_num, \
      work_order.cus_full_name, \
      work_order.status, \
      work_order.driver_id_num, \
      work_order.trans_co_full_name, \
      work_order.plate_num, \
      work_order_items.product_full_name, \
      work_order_items.amount, \
      work_order_items.product_type, \
      profile_driver.driver_full_name, \
      to_char(profile_driver.driver_id_expdate, 'DD-MM-YYYY') as driver_id_expdate, \
      profile_driver.driver_lic_num, \
      to_char(profile_driver.driver_lic_expdate, 'DD-MM-YYYY') as driver_lic_expdate, \
      profile_driver.fire_fighting_cert_num, \
      to_char(profile_driver.fire_fighting_expdate, 'DD-MM-YYYY') as fire_fighting_expdate, \
      profile_vehicle.owner_full_name, \
      profile_vehicle.chemical_trans_lic_num, \
      to_char(profile_vehicle.chemical_trans_lic_expdate, 'DD-MM-YYYY') as chemical_trans_lic_expdate, \
      profile_vehicle.vehicle_reg_cert_num, \
      to_char(profile_vehicle.vehicle_reg_cert_expdate, 'DD-MM-YYYY') as vehicle_reg_cert_expdate, \
      to_char(profile_vehicle.assurance_expdate, 'DD-MM-YYYY') as assurance_expdate, \
      to_char(profile_vehicle.vehicle_inspectation_cert_expdate, 'DD-MM-YYYY') as vehicle_inspectation_cert_expdate \
    FROM work_order INNER JOIN work_order_items ON \
      work_order.work_order_code = work_order_items.work_order_code \
        INNER JOIN profile_driver ON work_order.driver_id_num = profile_driver.driver_id_num \
        INNER JOIN profile_vehicle ON work_order.plate_num = profile_vehicle.plate_num \
    ORDER BY work_order.work_order_code\
  "
  pool.query(queryString, (err, result) => {
    if (err) {
      throw err
    }
    res.status(200).json(camelcaseKeys(result.rows))
  })
}

const updateOrderStatus = (req, res) => {
  const id = req.params.id
  const { status } = req.body
  pool.query(
    'UPDATE work_order SET status = $2 WHERE work_order_code = $1',
    [id, status],
    (err, result) => {
      if (err) throw err
      res.status(200).send(`Status modified with order code: ${id}`)
    }
    
  )
}

module.exports = {
  getAllOrder,
  updateOrderStatus
}
