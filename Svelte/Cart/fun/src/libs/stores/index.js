import { writable, readable, derived } from "svelte/store";

export const username = readable("", function start(set) {
  set("Anônimo");
  return function stop() {
    console.log("não sei oq fazer aq");
  };
});

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => set(new Date()), 1000);

  return function stop() {
    clearInterval(interval);
  };
});

const start = new Date();
export const uptime = derived(time, ($time) =>
  Math.round(($time - start) / 1000)
);

export const cartItems = writable([]);

//algum erro com local storage
const saveToLocSto = (what) => {
  let data = JSON.stringify(what);
  if (!localStorage.getItem("cartItems"))
    localStorage.setItem("cartItems", data);
  else {
    localStorage.removeItem("cartItems");
    localStorage.setItem("cartItems", data);
  }
};

export function addToCart(item) {
  cartItems.update((items) => {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      saveToLocSto([...items]);
      return [...items];
    }
    saveToLocSto([...items, item]);
    return [...items, item];
  });
}

export function removeFromCart(item) {
  cartItems.update((items) => {
    if (items) {
      const existingItem = items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
          let x = items.filter((i) => i.id !== item.id);
          saveToLocSto([...x]);
          return [...x];
        }
        saveToLocSto([...items]);
        return [...items];
      }
    }

    saveToLocSto([...items, item]);
    return [...items, item];
  });
}

// o projeto ficou gambiarrastico d+
// mais falta de design do qualquer coisa.
// Tipo, ter criar um dispacher pq o próprio item n pode se colocar no carrinho
// Além disso, localStorage n é uma boa. O Ideal seria ter criado uma api
// as funções para adicionar, remover e recuperar os dados seria chamadas para à api
// assim a página atualizaria auto. (coisa q n acontece com localStorage) e consiguiria
// manter o status do carrinho salvo/isolado (stores do svelte NÃO são parecidas com o Redux)
