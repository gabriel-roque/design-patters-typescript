interface Prototype {
  getColor(): string,
  clone(): Prototype
}

class Button implements Prototype {
  public x: number
  public y: number
  public color: string

  public getColor(): string {
    return this.color
  }

  public clone(): this {
    return this
  }
}

function clientCodeContext() {
  const p1 = new Button()
  p1.x = 20
  p1.y = 15
  p1.color = 'red'

  const p2 = p1.clone()

  console.log(p1, p2);
  if (p1.color === p2.color) console.log('P1 and P2 is protos equals');

  p2.color = 'blue'
  console.log(p1, p2);
  if (p1.color === p2.color) console.log('P1 and P2 is protos equals');
}

export function prototype() {
  clientCodeContext()
}