import axios from "axios";
import React, { useEffect } from "react";

function Users() {
  function getData() {
    // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(data.json());

	
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res)=> res.json())
    // .then((data)=> console.log(data))



    // try {
    // 	const data = await axios("https://jsonplaceholder.typicode.com/users")
    // 	console.log(data)
    // } catch (error) {
    // 	console.log(error)

    // }

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return <div>hi</div>;
}

export default Users;
