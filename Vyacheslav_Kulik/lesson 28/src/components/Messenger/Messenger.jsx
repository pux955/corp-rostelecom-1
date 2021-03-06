import React, {Component} from 'react'
import {MessageForm} from '../MessageForm'
import {MessageFields} from '../MessageFields'
import {NonExistChat} from '../NonExistChat'
import moment from "moment"
import {nanoid} from "nanoid"
import {Grid} from '@material-ui/core'

import './Messenger.scss'

export const Messenger = (props) => {

    const isChat = () => {
        return !!props.chat
    }

    const getMessageFromForm = (message, date) => {
        props.getMessage({...message, time: date, id: nanoid()})
    }

    return (
        <Grid container wrap="nowrap" direction="column" justify="space-between" className='messenger'>
            {isChat() ? <MessageFields message={props.chat.messages}/> : <NonExistChat/>}
            {isChat() && <MessageForm author={props.author} onSend={getMessageFromForm}/>}
        </Grid>
    )
}


// export class Messenger extends Component {
//
//     get chat() {
//         return this.props.chat
//     }
//     get isChat() {
//         return !!this.chat
//     }
//     get messages() {
//         if (this.isChat) {
//             return this.chat.messages
//         }
//     }
//
//
//
//     getMessageFromForm = (message, date) => {
//         this.props.getMessage({...message, time: date, id: nanoid()})
//     }
//
//
//     render() {
//         return (
//             <Grid container wrap="nowrap" direction="column" justify="space-between" className='messenger'>
//                 {this.isChat ? <MessageFields message={this.messages}/> : <NonExistChat/>}
//                 {this.isChat && <MessageForm author={this.props.author} onSend={this.getMessageFromForm}/>}
//             </Grid>
//         )
//     }
//
// }
