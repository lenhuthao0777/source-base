import { Component } from 'react'

type LabelProps = {}

type State = {
  name: string
}
class Label extends Component<LabelProps, State> {
  constructor(props: LabelProps) {
    super(props)
    this.state = {
      name: 'state'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this.state)
  }

  componentDidMount(): void {
    console.log(this.state)
  }

  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.handleClick} className='p-5 bg-rose-500'>
          Label
        </button>
        {this.state.name}
      </div>
    )
  }
}

export default Label
