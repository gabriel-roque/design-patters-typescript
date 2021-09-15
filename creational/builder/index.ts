interface Builder {
  buildWalls(): void
  buildDoors(): void
  buildWindows(): void
  buildGarage(): void
  buildRoof(): void
  buildPool(): void
}

class House {
  public parts: string[] = []

  public listParts(): void {
    console.log(`House have this parts: ${this.parts.join(', ')}\n`);
  }
}

class ModernHouseBuilder implements Builder {
  private house: House

  constructor() {
    this.clearBuilder()

  }

  clearBuilder(): void {
    this.house = new House()
  }

  buildWalls(): void {
    this.house.parts.push('modern walls')
  }

  buildDoors(): void {
    this.house.parts.push('modern doors')
  }

  buildWindows(): void {
    this.house.parts.push('modern windows')
  }

  buildGarage(): void {
    this.house.parts.push('modern garage')
  }

  buildRoof(): void {
    this.house.parts.push('modern roof')
  }

  buildPool() {
    this.house.parts.push('modern pool')
  }

  getHouse(): House {
    const house = this.house
    this.clearBuilder()
    return house
  }
}

class Director {
  private builder: Builder

  setStyleHouseBuilder(builder: Builder): void {
    this.builder = builder
  }

  buildSimpleHouse(): void {
    this.builder.buildWalls()
    this.builder.buildDoors()
    this.builder.buildWindows()
  }

  buildFullHouse(): void {
    this.builder.buildWalls()
    this.builder.buildDoors()
    this.builder.buildWindows()
    this.builder.buildRoof()
    this.builder.buildPool()
    this.builder.buildGarage()
  }
}

function clientCodeContext(director: Director) {
  const modernHouseBuilder = new ModernHouseBuilder()
  director.setStyleHouseBuilder(modernHouseBuilder)

  director.buildSimpleHouse()
  modernHouseBuilder.getHouse().listParts()

  director.buildFullHouse()
  modernHouseBuilder.getHouse().listParts()
}

export function builder() {
  clientCodeContext(new Director())
}