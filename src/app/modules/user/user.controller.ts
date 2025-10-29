import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { userService } from "./user.servies";
import sendResponse from "../../shared/sendResponse";

const createPatient = catchAsync(async(req: Request, res: Response)=>{
    const reuslt = await userService.createPatient(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Patient created successfully!",
        data: reuslt
    })
})




export const userController = {
    createPatient
}
