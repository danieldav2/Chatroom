import React from 'react';
import { List, Image } from 'semantic-ui-react';

class Chat extends React.PureComponent { 

    render() {   //renders the chat box messages received as props
        return <div>
            <List  animated relaxed divided size='large' celled={false} verticalAlign='middle'>
            {this.props.messages.map((val, id)=>{ return(
                <List.Item key={id} style={{ background: (val.username==='Yankale') ? '#339966' : '' }}>  
                <Image avatar src={val.avatar} />
                 <List.Content>
                   <List.Header >
                   {val.username}
                   </List.Header>
                   <List.Description >
                     {val.text}
                   </List.Description>
                 </List.Content>
               </List.Item>
            )})}
            </List>
        </div>
    }
}

export default Chat;