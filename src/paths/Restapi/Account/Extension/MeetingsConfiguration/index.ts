import Assisted from './Assisted'
import Assistants from './Assistants'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/meetings-configuration`
  }

  assistants(): Assistants {
    return new Assistants(this)
  }

  assisted(): Assisted {
    return new Assisted(this)
  }
}

export default Index