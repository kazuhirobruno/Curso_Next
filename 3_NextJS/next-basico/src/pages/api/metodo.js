export default Metodo = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ name: "Pedro " });
  } else {
    res.status(200).json({ name: "Maria " });
  }
};
