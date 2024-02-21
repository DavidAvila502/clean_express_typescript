import pool from "../database/connection";
import Customer from "../models/customerModel";

const getAllCustomers = async () => {
   const [customers] = await pool.query(`SELECT * FROM CUSTOMER`);

   return customers as Array<Customer>;
};

const updateCustomer = async (payload: Customer, id: number) => {
   const { name, phone, email, age } = payload;

   const db_response = await pool.query(
      `UPDATE CUSTOMER SET 
                  NAME= ?, PHONE = ?, EMAIL = ?, AGE = ? WHERE ID = ?`,
      [name, phone, email, age, id]
   );

   return db_response;
};

export { getAllCustomers, updateCustomer };
