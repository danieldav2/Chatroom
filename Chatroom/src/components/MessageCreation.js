

import React from 'react'
import {Form,Input, Button, Image} from 'semantic-ui-react'
import Yankale from '../assets/Yankale.jpg'
import Haimov from '../assets/Haimov.jpg'
import Mo from '../assets/Mo.jpg'
import Ruten from '../assets/Ruten.jpg'
import LastMessage from './LastMessage'
import Maccabi from '../assets/Maccabi.jpg'


class MessageCreation extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      avatars: [Yankale, Mo, Ruten, Haimov], 
      username: '', 
      password: '',
      message: '',
      chosenAvatar: Maccabi,
      LastMessage: { username: '',
                      avatar: ''},
    };
  }
  handleChange = (e, { name }) => this.setState({ [name]: e.target.value })

  handleAvatar = e => {this.setState({chosenAvatar: e})}

  clearForm = () => this.setState({username : '', message: '', chosenAvatar: Maccabi, password: ''})

  handleSubmit = e =>{
    e.preventDefault();
    if(this.state.username === '' || this.state.message === ''){
      alert("Missing a field!")
      
    }
    else if(this.state.username === 'Yankale' && this.state.password!=='Master')
      {
        alert("Wrong admin password!")
      }
      else {
        let body = {
        avatar: this.state.chosenAvatar,
        username: this.state.username,
        text: this.state.message,
        password: this.state.password
       }
      this.props.socket.emit("spotim/chat", body);
      this.setState({LastMessage : body});
      this.clearForm();
      }
  }

  
  render() {
    return <div>
      <Form  onSubmit={this.handleSubmit}>
        <Form.Field required width={16}>
          <label><text>Your Username: </text></label>
         <Input  placeholder='Your Username'  value={this.state.username} name="username" onChange={this.handleChange}  />
        </Form.Field>
        {this.state.username==="Yankale" ? 
        <Form.Field required width={16}>
         <label><text>Admin Password: </text></label>
         <Input type='password' placeholder='Admin Password' value={this.state.password} name="password" onChange={this.handleChange}  />
        </Form.Field>: ''}
        <Form.Field width={16}>
          <label><text>Your Avatar: </text></label>
          <Image.Group size="small">
           {this.state.avatars.map((avatar,id)=>{return <Image  key={id} href="#" spaced='left' 
             avatar verticalAlign='bottom' src={avatar}
             onClick={()=>this.handleAvatar(avatar)}
           />})}
          </Image.Group>
        </Form.Field>
        <Form.Field required width={16}>
           <label><text>Your Message: </text></label>
           <Input  placeholder='Your Message' value={this.state.message} name="message" onChange={this.handleChange}  />
            {this.state.username==='Yankale'? <Button type='submit' >Send as admin</Button> : 
                                              <Button type='submit' >Send </Button>}
        </Form.Field>
       </Form>
       <div className={'last'}>
       <LastMessage username={this.state.LastMessage.username} avatar={this.state.LastMessage.avatar}/>
       </div>
    </div>
  }
}

export default MessageCreation;