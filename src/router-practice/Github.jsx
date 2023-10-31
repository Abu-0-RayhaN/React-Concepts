// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData(); //way 2 (faster way)
  //   const [data, setData] = useState([]);//way 1
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Abu-0-RayhaN")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="text-center m-4 bg-secondary text-white fs-2">
        Github follower: {data.followers}
        <img src={data.avatar_url} alt="" height={300} width={300} />
      </div>
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Abu-0-RayhaN");
  return response.json();
}; //This method makes it faster to fetch data and show to the users. this githubInfoLoader function has been passed to index.js where when
//tries to go to github file before landing on that page we fetch the data to make things work faster
