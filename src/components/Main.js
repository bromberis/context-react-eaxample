import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

export default function Main() {
    const [users, setUsers] = useState([]);


    useEffect(() => {

        const fetchItems = async () => {

            const rez = await axios(
                `https://randomuser.me/api/?results=12`
            );

            console.log(rez.data.results);
            setUsers(rez.data.results);

        }

        fetchItems();
    }, [])


    return (
        <div className="container">
            <div className="card-deck mb-3 text-center">

                {users.map(user => (<Card
                    key={user.cell}
                    name={user.name.first}
                    email={user.email}
                    id={user.id.value}
                    image={user.picture.large}
                    location={user.location.country} />
                ))}
            </div>
        </div>
    )
}
