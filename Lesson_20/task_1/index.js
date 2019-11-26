  const vehicle = {
      name: 'Argo',
      move() {
          console.log(`${this.name} is moving`);
      },
      stop() {
          console.log(`${this.name} stopped`);
      },
  };

  const ship = {
      name: 'Aurora',
      hasWeels: false,
      startMachine() {
          console.log(`${this.name} lifting anchor up`);
          ship.move()
      },
      stopMachine() {
          console.log(`${this.name} lifting anchor down`);
          ship.stop()
      },
  };

  Object.setPrototypeOf(ship, vehicle);

  ship.move()

  export { vehicle, ship }