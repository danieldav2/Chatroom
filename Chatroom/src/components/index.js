import React from 'react'
import logo from '../assets/spotim-logo.jpg'
import {Image, Header} from 'semantic-ui-react';
import MessageCreation from './MessageCreation';
import io from "socket.io-client";
import Chat from './Chat'

let socket= io("https://spotim-demo-chat-server.herokuapp.com");

class App extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      messageList: [],
    }
  }

  componentDidMount(){    //connect the chat as the components renders
    this.socketConnect();
  }

  socketConnect(){
     socket.on("connect", function() {} );
    socket.on("disconnect", ()=>{});
    socket.on("spotim/chat", (data)=>{
      this.setState({messageList: [...this.state.messageList, data]})
    })
      }

  render() {
    return <div className='main'>
      <div className='header'>
       <Header as='h2'>
        <Image circular src={logo} /> Maccabi Haifa Chat Room
       </Header>
      </div>
      <div className={'input-box'}>
      <MessageCreation socket={socket}/>
      </div>
      <div className={'chat-box'}>
      <Chat messages={this.state.messageList}/></div>
    </div>
  }
}

export default App;