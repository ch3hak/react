import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
    };
    
    if (resInfo === null) return <Shimmer />;

    const { name = "", costForTwoMessage = "", cuisines = [] } = resInfo?.cards?.[2]?.card?.card?.info || {};

    const regularCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const recCard = regularCards.find(
        (c) => c.card?.card?.title?.trim() === "Recommended"
    );

    const topCard = !recCard && regularCards.find(
        (c) => c.card?.card?.title?.trim() === "Top Picks"
    );

    const thirdCard = !recCard && !topCard && regularCards[1];

    const section = recCard
    ? recCard.card.card
    : topCard
    ? topCard.card.card
    : thirdCard
    ? thirdCard.card.card
    : null;

    let restaurantCards = [];
    if (section?.itemCards) {
    restaurantCards = section.itemCards.filter(
    (c) =>
        c.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Dish"
    );
    } else if (section?.carousel) {
        restaurantCards = section.carousel.map((c) => ({
            card: { info: c.dish.info },
        }));
    }

      
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {restaurantCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} — Rs.
                        {(
                            (item.card.info.defaultPrice ?? item.card.info.price) /
                            100
                        ).toFixed(2)}
                    </li>
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
