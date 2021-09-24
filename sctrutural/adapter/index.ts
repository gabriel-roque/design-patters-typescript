
class Circle {
  private radius: number

  public setRadius(radius: number): void {
    this.radius = radius
  }

  public getRadius(): number {
    return this.radius
  }
}

class Square {
  private area: number

  public setArea(area: number): void {
    this.area = area;
  }

  public getArea(): number {
    return this.area
  }
}


interface CircleToSquareAdapter {
  converter(circle: Circle): Square
}

class AdapterCircleSquare implements CircleToSquareAdapter {
  public circle: Circle

  constructor(circle: Circle) {
    this.circle = circle
  }

  converter() {
    // fake implementaion for ilustration concent
    const fakeResult = this.circle.getRadius() * 4
    const square = new Square()
    square.setArea(fakeResult)

    return square
  }
}


function clientCodeContext() {
  const circle = new Circle()
  circle.setRadius(5)

  console.log('My Circle:', circle);

  const adapter = new AdapterCircleSquare(circle)
  const square = adapter.converter()

  console.log('My square:', square);
}

export function adapter() {
  clientCodeContext()
}