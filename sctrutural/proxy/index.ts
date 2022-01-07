interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  public request(): void {
    console.log('RealSubject: Handling request.');
  }
}



class ProxyPattern implements Subject {
  private realSubject: RealSubject

  constructor(realsubject: RealSubject) {
    this.realSubject = realsubject
  }

  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request()
      this.logAccess()
    }
  }

  private checkAccess(): Boolean {
    console.log('Proxy: Checking access prior to firing a real request.');

    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}

function clientCodeContext() {
  console.log('Client: Executing the client code with a real subject:');
  const realSubject = new RealSubject();
  realSubject.request()

  console.log('');

  console.log('Client: Executing the same client code with a proxy:');
  const proxy = new ProxyPattern(realSubject);
  proxy.request()
}

export function proxy() {
  clientCodeContext()
}