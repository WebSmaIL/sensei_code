import { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
import { USERS_QUERIES } from "../../database/queries";

class UsersController {
  async getUsers(req: Request, res: Response) {
    try {
      USERS_QUERIES.getUsers().then((result) => {
        res.status(200).json(result.rows);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      USERS_QUERIES.getUserById(id).then((result) => {
        res.status(200).json(result.rows);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getUserByLogin(req: Request, res: Response) {
    try {
      
    } catch (error) {
      res.status(500).json({ errorMessage: error });
    }
  }

  async addUser(req: Request, res: Response) {
    try {
      const {
        login,
        password,
        email,
      }: { login: string; password: string; email: string } = req.body;
      const id: string = uuidv4();

      USERS_QUERIES.addUser(id, login, password, email).then((result) => {
        USERS_QUERIES.getUserById(id).then((result) => {
          if (result) {
            res.json(result.rows[0]).status(200);
          }
        });
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }
}

export default new UsersController();
