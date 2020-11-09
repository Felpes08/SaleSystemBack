// Define a utilização do model pedidos e a dependência http-status
const Pedidos = require("../models/pedidos");
const status = require("http-status");

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
  const cliente = req.body.cliente;
  const endereço = req.body.endereço;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const produto = req.body.produto;
  const valor = req.body.valor;

  // Popula cada um dos campos do model com os campos recebido na request
  Pedidos.create({
    cliente: cliente,
    endereço: endereço,
    email: email,
    telefone: telefone,
    produto: produto,
    valor: valor,
  })
    //then = registra o que queremos que aconteca quando a Promise for resolvida
    .then(pedidos => {
      if (pedidos) {
        res.status(status.OK).send(pedidos);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    //catch = registra o que queremos que aconteca quando a Promise falhar
    .catch((error) => next(error));
};
exports.SelectAll = (req, res, next) => {
  Pedidos.findAll()
    .then((pedidos) => {
      if (pedidos) {
        res.status(status.OK).send(pedidos);
      }
    })
    .catch((error) => next(error));
};

exports.SelectDetail = (req, res, next) => {
  const id = req.params.id;

  Pedidos.findByPk(id)
    .then((pedidos) => {
      if (pedidos) {
        res.status(status.OK).send(pedidos);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;
  const cliente = req.body.cliente;
  const endereço = req.body.endereço;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const produto = req.body.produto;
  const valor = req.body.valor;

  Pedidos.findByPk(id)
    .then((pedidos) => {
      if (pedidos) {
        pedidos
          .update(
            {
              cliente: cliente,
              endereço: endereço,
              email: email,
              telefone: telefone,
              produto: produto,
              valor: valor,
            },
            {
              where: { id: id },
            }
          )
          .then(() => {
            res.status(status.OK).send();
          })
          .catch((error) => next(error));
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;

  Pedidos.findByPk(id)
    .then((pedidos) => {
      if (pedidos) {
        pedidos
          .destroy({
            where: { id: id },
          })
          .then(() => {
            res.status(status.OK).send();
          })
          .catch((error) => next(error));
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};
