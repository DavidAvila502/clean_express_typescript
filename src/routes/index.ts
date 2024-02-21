import { Router } from "express";
import customerRoute from "./customerRoute/customer.Route";

const router = Router();

router.use("/api/customer", customerRoute);

export default router;
