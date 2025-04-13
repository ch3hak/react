import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7384023&lng=77.13000009999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%27"
        );
        const json = await data.json();

        console.log(json);

        setListOfRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        // react virtual dom 
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant => (
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                </Link>
                )))}
            </div>
        </div>
    );
};

export default Body;