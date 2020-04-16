import Token from './Token'
import Revoke from './Revoke'
import Parent from '..'
import RestClient from '../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/oauth`
  }

  revoke(): Revoke {
    return new Revoke(this)
  }

  token(): Token {
    return new Token(this)
  }
}

export default Index