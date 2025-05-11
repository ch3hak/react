import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7384023&lng=77.13000009999999&restaurantId=581970&submitAction=ENTER"
        );
        const json = await data.json();
        setResInfo(json.data);
    };
    
    if (resInfo === null) return <Shimmer />;

    const { name = "", costForTwoMessage = "", cuisines = [] } = resInfo?.cards?.[2]?.card?.card?.info || {};

    const restaurantCards = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.filter(
        (c) => c.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Dish"
    );
      
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {restaurantCards.map((item)=>(
                    <li>{item?.card?.info?.name}</li>
                ))}
            </ul>
  
        </div>
    );
    // {restaurantCards?.map((restaurant, index) => (
    //     <RestaurantCard
    //     key={restaurant.info.id}
    //     data={restaurant.info}
    //     />
    // ))}

};

export default RestaurantMenu;
