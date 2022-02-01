import mercadoPago from "mercadopago";

// Agrega credenciales
mercadoPago.configure({
  access_token: "PROD_ACCESS_TOKEN",
});

//crear objecto
export default pago = async (req, res) => {
  let preference = {
    items: [
      {
        id: req.body.id,
        title: req.body.title,
        unit_price: req.body.price,
        quantity: 1,
      },
    ],
  };

  mercadoPago.preferences
    .create(preference)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
