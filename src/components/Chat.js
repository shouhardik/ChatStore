import React,{useState,useEffect,useRef} from 'react'
import { db,auth,col } from '../fire'
import SignOut from './SignOut'
import { getFirestore, collection, query, where, getDocs,doc } from "firebase/firestore";
import SendMessage from './SendMessage';

function Chat() {
  const scroll = useRef()
  const [messages,setMessages]=useState([])
  
  useEffect(() => {
    //const doc=[]
    // db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
    //     setMessages(snapshot.docs.map(doc => doc.data()))
    // })
    
    getDocs(col)
    .then((snapshot)=>{
    setMessages(snapshot.docs.map(doc => doc.data()))
    console.log(doc) 
})
}, [])
  return (
    <div>
    <SignOut />
    <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
            <div>
                <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                    <img src={photoURL} alt="" />
                    <p>{text}</p>
                </div>
            </div>
        ))}
    </div>
    <SendMessage scroll={scroll} />
    <div ref={scroll}></div>
</div>
  )
}

export default Chat