import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

/*
1 - Não deve fazer um pedido com cpf inválido
2 - Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)
3 - Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)
*/

test('Não deve fazer um pedido com cpf inválido', function(){
  const cpf = '111.111.111-11';  
  expect(()=> new Order(cpf)).toThrow(new Error("Invalid cpf"))
})

test('Deve fazer um pedido com 3 itens', function(){
  const cpf = "839.435.452-10";
  const order = new Order(cpf);
  order.addItem(new Item(1, 'Item A', 50), 3);
  order.addItem(new Item(2, 'Item B', 150), 1);
  order.addItem(new Item(3, 'Item C', 7), 10);
  const total = order.getTotal();
  expect(total).toBe(370)
})

test('Deve fazer um pedido com cupom de desconto', function(){
  const cpf = "839.435.452-10";
  const order = new Order(cpf);
  order.addItem(new Item(1, 'Item A', 50), 3);
  order.addItem(new Item(2, 'Item B', 150), 1);
  order.addItem(new Item(3, 'Item C', 7), 10);
  order.addCoupon(new Coupon('10PERCENT', 10));
  const total = order.getTotal();
  expect(total).toBe(333);
})

/*
1 - Não deve aplicar cupom de desconto expirado
2 - Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)
3 - Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado
*/