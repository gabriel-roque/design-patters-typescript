interface Chair {
  hasLegs(): boolean
  sitOn(): boolean
}

interface CoffeTable {
  hasLegs(): boolean
  sitOn(): boolean
}

interface Sofa {
  hasLegs(): boolean
  sitOn(): boolean
}

interface FurnitureFactory {
  createChair(): Chair
  createCoffeTable(): CoffeTable
  createSofa(): Sofa
}

class VictorianChair implements Chair {
  hasLegs() {
    console.log('VictorianChair has legs!')
    return true
  }
  sitOn() {
    console.log('VictorianChair can sit!')
    return true
  }
}

class VictorianCoffeTable implements CoffeTable {
  hasLegs() {
    console.log('VictorianCoffeTable has legs!')
    return true
  }
  sitOn() {
    console.log('VictorianCoffeTable can not sit!')
    return false
  }
}

class VictorianSofa implements Sofa {
  hasLegs() {
    console.log('VictorianSofa has not legs!')
    return false
  }
  sitOn() {
    console.log('VictorianSofa can sit!')
    return true
  }
}

class VictorianFurnictureFactory implements FurnitureFactory {
  createChair() {
    return new VictorianChair()
  }
  createCoffeTable() {
    return new VictorianCoffeTable()
  }
  createSofa() {
    return new VictorianSofa()
  }
}

function clientCodeContext(factory: FurnitureFactory) {
  const chair = factory.createChair()
  chair.hasLegs()
  chair.sitOn()

  const coffeTable = factory.createCoffeTable()
  coffeTable.hasLegs()
  coffeTable.sitOn()

  const sofa = factory.createSofa()
  sofa.hasLegs()
  sofa.sitOn()
}

export function abstractFactory() {
  clientCodeContext(new VictorianFurnictureFactory())
}