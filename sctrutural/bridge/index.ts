interface Device {
  isEnabled(): boolean
  enable(): void
  disable(): void
  getVolume(): number
  setVolume(percent: number): void
  getChannel(): number
  setChannel(channel: number): void
}

class RemoteControle {
  private device: Device

  constructor(device: Device) {
    this.device = device
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable()
      console.log('Disable device...');
    } else {
      this.device.enable()
      console.log('Enable device...');

    }
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10)
    console.log('Volume down...');
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10)
    console.log('Volume Up...');
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1)
    console.log('Channel down...');
  }

  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1)
    console.log('Channel up...');
  }
}

class Tv implements Device {
  private on: boolean
  private volume: number
  private channel: number

  isEnabled(): boolean {
    return this.on ? true : false
  }
  enable(): void {
    this.on = true
  }
  disable(): void {

  }
  getVolume(): number {
    return this.volume
  }
  setVolume(percent: number): void {
    this.volume = percent
  }
  getChannel(): number {
    return this.channel
  }
  setChannel(channel: number): void {
    this.channel = channel
  }
}


function clientCodeContext() {
  const tv = new Tv()
  const simpleRemote = new RemoteControle(tv)
  simpleRemote.togglePower()
  simpleRemote.volumeUp()
  simpleRemote.volumeUp()
  simpleRemote.channelDown()
  simpleRemote.togglePower()
}

export function bridge() {
  clientCodeContext()
}
