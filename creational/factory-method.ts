// Product
interface CreditCard {
  credit(value: number, onces: number): boolean
}

// Concrete Class Product (MasterCard)
class MasterCard implements CreditCard {
  credit(value: number, onces: number) {
    console.log(`Debiting with Master Card... | ${onces} x $ ${value / onces},00`)
    return true
  }
}

// Concrete Class Product (VisaCard)
class VisaCard implements CreditCard {
  credit(value: number, onces: number) {
    console.log(`Debiting with Visa Card... | ${onces} x $ ${value / onces},00`)
    return true
  }
}

// Abstract Class Creator
abstract class CreatorCard {

  public abstract creatorCard(): CreditCard

  credit(value: number, onces: number): string {
    const card = this.creatorCard()
    card.credit(value, onces)
    return `${card}`
  }
}

// Concrete Class MasterCard
class CreatorMasterCard extends CreatorCard {
  creatorCard() {
    return new MasterCard()
  }
}

// Concrete Class MasterCard
class CreatorVisaCard extends CreatorCard {
  creatorCard() {
    return new VisaCard()
  }
}

function clientCodeContext(creator: CreatorCard) {
  creator.credit(200, 4)
}

export function factoryMethod() {
  clientCodeContext(new CreatorMasterCard())
  clientCodeContext(new CreatorVisaCard())
}

