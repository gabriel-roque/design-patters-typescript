
interface Notifier {
  send(message: string): void
}

class BaseDecorador implements Notifier {
  protected notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  send(message: string): void {
    this.notifier.send(message)
  }
}


class FacebookDecorator extends BaseDecorador {
  send(message: string): void {
    console.log('API Facebook was call!');
    super.send(message)
  }
}

class SlackDecorator extends BaseDecorador {
  send(message: string): void {
    console.log('API Slack was call!');
    super.send(message)
  }
}

class TwitterDecorator extends BaseDecorador {
  send(message: string): void {
    console.log('API Twitter was call!');
    super.send(message)
  }
}

class BaseNotifier implements Notifier {
  public send(message: string): void {
    console.log(`Sending message: ${message}\n`);
  }
}

function clientCodeContext() {
  const notifier = new BaseNotifier()
  const facebookNotifier = new FacebookDecorator(notifier)
  const slackNotifier = new SlackDecorator(notifier)

  facebookNotifier.send('Message by Facebook Notifier')

  const customNotifier01 = new FacebookDecorator(slackNotifier)
  customNotifier01.send('Message by Facebook and Slack Notifier')

  const customNotifier02 = new TwitterDecorator(customNotifier01)
  customNotifier02.send('Message by Facebook, Slack and Twitter Notifier')

}

export function decorator() {
  clientCodeContext()
}


