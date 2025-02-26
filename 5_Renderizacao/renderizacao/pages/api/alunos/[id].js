export default function handler(req, res) {
  const id = req.query.id;
  return res.status(200).json({
    id,
    nome: `Teste ${id}`,
    email: `teste${id}@teste.com`,
  });
}
