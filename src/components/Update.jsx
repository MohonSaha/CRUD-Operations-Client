import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loadedUser = useLoaderData();

    const handleUpdate = event =>{

        //Capture data from client side:-
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = {name, email};

        // Send data to the server side:-
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                alert('user updated successfully')
            }
        })
    }

    return (
        <div>
            <h2>Update Now</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
                <br /> <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;