import { Router } from "express";
import * as customerController from "../../controllers/customerController";
import { updateCustomerValidator } from "../../validators/customerValidator";

const route = Router();

route.get("/", customerController.getAllCustomers);
route.put("/:id", updateCustomerValidator(), customerController.updateCustomer);

export default route;
