import {useSelector, useDispatch} from 'react-redux'
import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom"
import {ChatList} from 'components/ChatList'
import {unfiredChatAction, loadChatsAction} from 'actions/chats'
import {loadProfileAction} from 'actions/profile'


export const ChatListContainer = () => {
    const dispatch = useDispatch()
    const currentChatId = useLocation().pathname.replace('/chats/','')
    const chats = useSelector(state => state.chats)
    const [isLoading, isError] = useSelector((state) => [state.chats.loading, state.chats.error])
    useEffect(() => {
        dispatch(loadChatsAction())
        dispatch(loadProfileAction())
    }, [])
    useEffect(() => {
        if (chats.entries[currentChatId] && chats.entries[currentChatId].fired) { //если текущий чат помечен непрочитанным
            dispatch(unfiredChatAction(currentChatId)) //то помечаем его прочитанным
        }
    })

    return <ChatList loadChatsAction={loadChatsAction} isLoading={isLoading} isError={isError} chats={chats.entries} currentChatId={currentChatId}/>
}

//
// class ChatListClass extends Component {
//
//     componentDidMount(){
//         this.props.loadChatsAction()
//         this.props.loadProfileAction()
//     }
//
//     componentDidUpdate() {
//         const {currentChatId} = this.props
//         if(this.props.chats.entries[currentChatId] && this.props.chats.entries[currentChatId].fired) { //если текущий чат помечен непрочитанным
//             this.props.unfiredChatAction(currentChatId) //то помечаем его прочитанным
//         }
//     }
//
//     render() {
//         const {currentChatId, isLoading, isError, loadChatsAction} = this.props
//         return <ChatList loadChatsAction={loadChatsAction} isLoading={isLoading} isError={isError} chats={this.props.chats.entries} currentChatId={currentChatId}/>
//     }
//
// }
//
// function mapStateToProps(state, ownProps) {
//     return {
//         ...state,
//         currentChatId: state.router.location.pathname.replace('/chats/',''),
//         isLoading: state.chats.loading,
//         isError: state.chats.error
//     }
//
//
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         unfiredChatAction: (chatId) => dispatch(unfiredChatAction(chatId)),
//         loadChatsAction: () => dispatch(loadChatsAction()),
//         loadProfileAction: () => dispatch(loadProfileAction()),
//
//
//     }
// }
//
// export const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatListClass)