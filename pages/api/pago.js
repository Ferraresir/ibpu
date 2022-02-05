import mercadoPago from "mercadopago";

// Agrega credenciales
mercadoPago.configure({
  access_token: process.env.MERCADO_TOKEN,
});

//crear objecto
export default async function (req, res) {
  let preference = {
    items: [
      {
        title: "curso salud",
        description: "curso de salud",
        unit_price: 4000,
        quantity: 2,
      },
    ],
  };

  mercadoPago.preferences
    .create(preference)
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}
