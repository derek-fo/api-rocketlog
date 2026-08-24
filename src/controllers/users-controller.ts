import type { Request, Response } from "express";

class UsersController {
    create(request: Request, response: Response) {
        return response.status(201).json({ message: "User created" });
    }
}

export { UsersController };