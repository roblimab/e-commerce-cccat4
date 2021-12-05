import Item from "../src/Item";

const camera = new Item(1, 'Câmera', 50, 20, 15, 10, 1);

test('Deve calcular corretamente o volume', function(){
  expect(camera.getVolume()).toBe(0.003);
})

test('Deve calcular corretamente a densidade', function(){
  expect(camera.getDensidade()).toBe(333);
})