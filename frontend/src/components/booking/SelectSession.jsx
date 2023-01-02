import "./select-session.css";
import { FaCheckCircle } from "react-icons/fa";
import SelectSeat from "./SelectSeat";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const SelectSession = () => {
  function nextSixDays() {
    const result = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      result.push(today.toISOString().slice(0, 10));
      today.setDate(today.getDate() + 1);
    }
    return result;
  }
  function getDayName(date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date(date);
    return `${days[d.getDay()]} ${d.getDate()}`;
  }
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  useEffect(() => {
    axios.get("/api/Cinemas").then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    setSubcategories(nextSixDays());
    console.log(nextSixDays());
  }, [selectedCategory]);

  useEffect(() => {}, [selectedSubcategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  return (
    <form>
      <label>
        Category:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Subcategory:
        <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
          {subcategories.map((subcategory) => (
            <option key={subcategory} value={subcategory}>
              {getDayName(subcategory)}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Item:
        <select>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default SelectSession;
