import express from "express";
import type { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

const app = express();
const PORT = 3001;

interface User {
  id: string;
  name: string;
  company: string;
  email: string;
  isActive: boolean;
}

// Banco de dados em memória
const users: User[] = [
  {
    id: uuidv4(),
    name: "Fulano de Tal",
    company: "XPTO",
    email: "fulano@xpto.com",
    isActive: true,
  },
  {
    id: uuidv4(),
    name: "Ciclana Silva",
    company: "XPTO 2",
    email: "ciclana@xpto.com",
    isActive: false,
  },
];

app.use(cors()); // Permite que o Cypress faça requisições
app.use(express.json());
app.set("json spaces", 2);

app.get("/users", (req: Request, res: Response) => {
  res.status(200).json(users);
});

app.post("/users", (req: Request, res: Response) => {
  const { name, company, email } = req.body;

  if (!name || !company || !email) {
    return res
      .status(400)
      .json({ error: "Nome, empresa e email são obrigatórios." });
  }

  const newUser: User = {
    id: uuidv4(),
    name,
    company,
    email,
    isActive: true,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  } else {
    const { name, company, email, isActive } = req.body;
    if (typeof name === "string") user.name = name;
    if (typeof company === "string") user.company = company;
    if (typeof email === "string") user.email = email;
    if (typeof isActive === "boolean") user.isActive = isActive;

    return res.status(200).json({
      message: "Usuário atualizado com sucesso",
      user,
    });
  }
});

app.get("/users/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "Usuário não encontrado." });
  }
});

app.delete("/users/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  const index = users.findIndex((u) => u.id === userId);

  if (index !== -1) {
    users.splice(index, 1);
    res.status(200).json({
      message: "Usuário deletado com sucesso",
      userId,
    });
  } else {
    res.status(404).json({
      error: "Usuário não encontrado para deletar.",
      userId,
    });
  }
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("API is running!");
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
