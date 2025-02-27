import { body, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

const handleValidationErrors = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

export const validateProfileRequest = [
    body("first_name").isString().notEmpty().withMessage("Firstname must be a string"),
    body("last_name").isString().notEmpty().withMessage("Lastname must be a string"),
    body("birth_date").isDate().notEmpty().withMessage("Birth date must be a valid date"),
    body("gender").isString().notEmpty().withMessage("Gender must be a string"),
    body("phone").isString().notEmpty().withMessage("Gender must be a string"),
    body("id_number").isString().notEmpty().withMessage("Id number must be a string"),
    body("bio").isString().notEmpty().withMessage("Bio must be a string"),
    body("is_company").isBoolean().notEmpty().withMessage("Is company must be a boolean"),
    body("company_name").isString().withMessage("Company name must be a string"),
    body("company_registration").isString().withMessage("Company registration must be a string"),
    body("accreditation").isString().withMessage("Accreditation must be a string"),
    body("city_id").isNumeric().notEmpty().withMessage("City id must be numeric"),
    body("country_id").isNumeric().notEmpty().withMessage("Country id must be numeric"),
    body("latitude").isNumeric().withMessage("Latitude must be numeric"),
    body("longitude").isNumeric().withMessage("Longitude must be numeric"), 
    handleValidationErrors,
]

/*
req.body.user_id,
req.body.first_name,
req.body.last_name,
req.body.birth_date,
req.body.gender,
req.body.phone,
req.body.id_number,
req.body.bio,
req.body.is_company,
req.body.company_name,
req.body.company_registration,
req.body.accreditation,
req.body.city_id,
req.body.country_id,
req.body.latitude,
req.body.longitude,
req.body.created_at,
req.body.updated_at
*/