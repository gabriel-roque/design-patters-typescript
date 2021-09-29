abstract class Component {
  protected parent: Component

  public setParent(parent: Component) {
    this.parent = parent
  }

  public getParent(): Component {
    return this.parent
  }

  public add(component: Component): void { }

  public remove(component: Component): void { }

  public isComposite(): boolean {
    return false
  }

  public abstract operation(): string
}


class Product extends Component {
  public operation(): string {
    return 'Product';
  }
}

class Composite extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component)
    component.setParent(this)
  }

  public remove(component: Component): void {
    const index = this.children.indexOf(component)
    this.children.splice(index, 1)

    component.setParent(null)
  }

  public isComposite(): boolean {
    return true
  }

  public operation(): string {
    const results = []
    this.children.forEach((child: Component) => {
      results.push(child.operation())
    })

    return `Box [${results.join(' + ')}]`
  }
}

function clientCodeContext() {
  const tree = new Composite()

  const branchOne = new Composite()
  branchOne.add(new Product())
  branchOne.add(new Product())

  const branchTwo = new Composite()
  branchTwo.add(new Product())

  tree.add(branchOne)
  tree.add(branchTwo)

  console.log(tree.operation());
}

export function composite() {
  clientCodeContext()
}
