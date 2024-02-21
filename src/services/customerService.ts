import Customer from "../models/customerModel";
import * as customerRepository from "../repositories/customerRepository";

const getAllCustomers = async () => {
   return await customerRepository.getAllCustomers();
};

const updateCustomer = async (payload: Customer, id: number) => {
   return await customerRepository.updateCustomer(payload, id);
};

export { getAllCustomers, updateCustomer };
