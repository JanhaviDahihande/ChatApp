import React from 'react'

class OnlineUsers extends React.Component {
    render () {
        return (
            <div className="online-users-list">
                <ul>
                   <h3>Online: </h3>
                        {this.props.onlineusers.map((user,index) => {
                        return (
                                <li key={index}>
                                    {user}
                                </li>
                            )
                        })}
                </ul>
            </div>
        )
    }
}

export default OnlineUsers