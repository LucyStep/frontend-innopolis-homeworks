import React from 'react';
import Card from "../Card/Card";
import './CardList.css';

export default class CardList extends React.Component {
    static defaultProps = {
        userList: []
    }
    render() {
        return (
            <div className={'card-list'}>
                {
                    this.props.userList.map((user) => {
                        return (
                            <div className={'card-list__item'} key={user.id}>
                                <Card
                                    id={user.id}
                                    email={user.email}
                                    firstName={user['first_name']}
                                    lastName={user['last_name']}
                                    avatar={user['avatar']}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
