import {connect} from 'react-redux'
import React, {Component} from 'react'
import {NewChatPage} from 'components/NewChatPage'
import {addNewChatAction, addNewChatFetchAction} from 'actions/chats'
import { push } from 'connected-react-router'
import moment from "moment";

class NewChatPageClass extends Component {

    getNewChatTitle =  (title) =>  {
        this.props.addNewChatFetchAction(title)
        this.props.redirect(this.props.chats.entries.length) // редирект в новый чат
    }


    render() {
        return <NewChatPage getNewChatTitle={this.getNewChatTitle}/>
    }

}

function mapStateToProps(state, ownProps) {
    return {
        ...state
    }


}

function mapDispatchToProps(dispatch) {
    return {
        addNewChatAction: (title) => dispatch(addNewChatAction(title)),
        addNewChatFetchAction: (title) => dispatch(addNewChatFetchAction(title)),
        redirect: (id) => dispatch(push(`/chats/${id}`))

    }
}

export const NewChatPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewChatPageClass)