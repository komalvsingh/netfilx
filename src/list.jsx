import { useEffect, useState } from "react";
import { fetchData } from "./api";
import "./list.css"

const List = ({ title, param }) => {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    let isMounted = true; // Add a flag to check if the component is mounted
    fetchData(param).then((res) => {
      if (isMounted) { // Check if the component is still mounted before updating state
        setList(res.data.results);
      }
    });

    return () => {
      isMounted = false; // Set the flag to false when the component unmounts
    };
  }, [param]);

  console.log(list);

  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{title}</h2>
        <div className="col">
          <div className="row__posters">
            {/* Check if list is not undefined and has a length before mapping */}
            {list && list.length > 0 && list.map((item) => (
              <img
                key={item.id}
                className="row_poster row_posterLarge"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;