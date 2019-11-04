let clients = ["Vasia", "Andriy", "Mykola", "Igor"];
let balances = [3200, 11002, 300, 6824]


function withdraw(clients, balances, client, amount) {

    let indexUser = clients.indexOf(client);
    if (balances[indexUser] >= amount) {
        balances[indexUser] -= amount
    } else {
        return -1;
    }

    return clients, balances;
}

withdraw(clients, balances, "Mykola", 100);
console.log(clients);
console.log(balances);