import { Component } from 'react'
import { useLocation } from 'react-router-dom'
import { VietNammese } from '../hooks'
class SignIn extends Component {
  constructor(props: any) {
    super(props)
  }

  render(): React.ReactNode {
    const hook = new VietNammese()

    console.log(hook.getInfo())

    const a = { name: 'string' }

    const b = a

    b.name = 'test'

    const c = a

    console.log(b.name)
    console.log(c.name)

    return <div>sign in</div>
  }
}

export default SignIn
