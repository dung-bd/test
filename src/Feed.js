import React, {useState} from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from './MessageSender'
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux'
function Feed() {
    
    const posts = useSelector(state => state.allPosts.posts);
    const array = Object.values(posts);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {/* {array.map((post) => {
                return(
                <Post
                profilePic="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/89951757_1057569771273040_1808126200200036352_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bx_RR5BWugEAX_94Kjp&tn=TlW7obSw9K3IxkR8&_nc_ht=scontent.fhan3-4.fna&oh=3679f03559f0517403694b8b72b3b316&oe=61610492"
                message= {post}
                timestamp='9:08 AM, Saturday'
                username='Bach Dang Dung'
                image='https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/241285361_3007618706141561_6768090909179778324_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=825194&_nc_ohc=KpAxvkYeMv4AX-sGMOn&_nc_ht=scontent.fhan3-5.fna&oh=1d61e5ac218c0f57f2ecb5131c1a8954&oe=6161BBA3'
                />
                )
            })} */}
            <Post
                profilePic="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/89951757_1057569771273040_1808126200200036352_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bx_RR5BWugEAX_94Kjp&tn=TlW7obSw9K3IxkR8&_nc_ht=scontent.fhan3-4.fna&oh=3679f03559f0517403694b8b72b3b316&oe=61610492"
                message= {array}
                timestamp='9:08 AM, Saturday'
                username='Bach Dang Dung'
                />
            <Post
            profilePic="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/89951757_1057569771273040_1808126200200036352_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bx_RR5BWugEAX_94Kjp&tn=TlW7obSw9K3IxkR8&_nc_ht=scontent.fhan3-4.fna&oh=3679f03559f0517403694b8b72b3b316&oe=61610492"
            message= 'UwU'
            timestamp='9:08 AM, Saturday'
            username='Bach Dang Dung'
            image='https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/241285361_3007618706141561_6768090909179778324_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=825194&_nc_ohc=KpAxvkYeMv4AX-sGMOn&_nc_ht=scontent.fhan3-5.fna&oh=1d61e5ac218c0f57f2ecb5131c1a8954&oe=6161BBA3'
            />
            <Post
            profilePic="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/89951757_1057569771273040_1808126200200036352_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bx_RR5BWugEAX_94Kjp&tn=TlW7obSw9K3IxkR8&_nc_ht=scontent.fhan3-4.fna&oh=3679f03559f0517403694b8b72b3b316&oe=61610492"
            message= 'You have changed your avatar'
            timestamp='5:03 PM, Friday'
            username='Bach Dang Dung'
            image='https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/89951757_1057569771273040_1808126200200036352_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bx_RR5BWugEAX_94Kjp&tn=TlW7obSw9K3IxkR8&_nc_ht=scontent.fhan3-4.fna&oh=3679f03559f0517403694b8b72b3b316&oe=61610492'
            />
            
        </div>
    )
}

export default Feed
