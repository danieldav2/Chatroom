
//This is your top level React component, you may change everything

import React from 'react'
import {Container, Image, Header} from 'semantic-ui-react'


class LastMessage extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      message: '',
    }
  }

  componentWillReceiveProps(prevProps) {
    // Typical usage (don't forget to compare props):
    this.setState({message : prevProps});  
}

  render() {
    return <div>
      <Container className={'Message'}>
      <div>
          <div>
            <Header textAlign='center' size='small'>Last message sent by: </Header>
          </div>
          <div>
             <Header textAlign='center' size='small'>{this.state.message.username}</Header>
          </div>
          <Image size='small' centered={true} src={this.state.message.avatar}/>
      </div>     
    </Container>
    </div>
  }
}
export default LastMessage;