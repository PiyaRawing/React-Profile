 import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://cdn.discordapp.com/attachments/984385907094351874/984385927952621618/unknown.png" alt='profile' className="profilepic" />
                <ReactTypingEffect text={['ฟิวส์ เองครับ']} speed={50} eraseDelay={200} className="typingeffect" />
                
            </div>
        )
    }
}

export default Home