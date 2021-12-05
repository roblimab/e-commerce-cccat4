import Shipping from "../src/Shipping";

const distancia = 1000;

test('Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)', function(){
    const shipping = new Shipping(distancia, 0.03, 100);
    expect(shipping.getPrice()).toBe(30);
})

test('Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado', function(){
    const shipping = new Shipping(distancia, 0.003, 333);
    expect(shipping.getPrice()).toBe(10);
})
