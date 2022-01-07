class SubSystem1 {
  public operation1(): string {
    return 'Subsystem1: Ready!\n'
  }

  public operationN(): string {
    return 'Subsystem1: Go!\n'
  }
}

class SubSystem2 {
  public operation1(): string {
    return 'Subsystem2: Get Ready!\n'
  }

  public operationZ(): string {
    return 'Subsystem2: Fire!\n'
  }
}

class Facade {
  protected subsystem1: SubSystem1;
  protected subsystem2: SubSystem2;

  constructor(subsystem1: SubSystem1 = null, subsystem2: SubSystem2 = null) {
    this.subsystem1 = subsystem1 || new SubSystem1()
    this.subsystem2 = subsystem2 || new SubSystem2()
  }

  public operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += 'Facade orders subsystems to perform the action:\n';
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();

    return result;
  }
}

function clientCodeContext() {
  const facade = new Facade()
  console.log(facade.operation());
}

export function facade() {
  clientCodeContext()
}
