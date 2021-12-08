import {useParams} from "react-router-dom";
import React from "react";

function UserPage() {
    const { id } = useParams();
    console.log(id);
    return (
      <div>
        <h1>Страница конкретного пользователя { id }</h1>


        {/*<div className={'card__subtitle'}>*/}
        {/*    <a href={`mailto:${email}`}>{email}</a>*/}
        {/*</div>*/}

      </div>
    )
}

export default UserPage;
