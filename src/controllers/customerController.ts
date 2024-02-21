import { Response, Request } from "express";
import * as customerService from "../services/customerService";
import Customer from "../models/customerModel";

const getAllCustomers = async (request: Request, response: Response) => {
   try {
      const customers = await customerService.getAllCustomers();

      return response.status(200).json({ result: customers });
   } catch (error: any) {
      return response.status(500).json({ message: error.message });
   }
};

const updateCustomer = async (request: Request, response: Response) => {
   try {
      const { id } = request.params;

      const payload: Customer = request.body;

      const db_response = await customerService.updateCustomer(
         payload,
         parseInt(id, 10)
      );

      return response.status(200).json({ result: db_response });
   } catch (error: any) {
      return response.status(500).json({ message: error.error });
   }
};

export { getAllCustomers, updateCustomer };
