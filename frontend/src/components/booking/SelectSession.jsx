import "./select-session.css";
import { FaCheckCircle } from "react-icons/fa";
import SelectSeat from "./SelectSeat";
import { useState } from "react";
import React from "react";
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
  }, [selectedCategory]);

  useEffect(() => {
    axios.get(`/api/Cinemas=${selectedSubcategory}`).then((response) => {
      setItems(response.data);
    });
  }, [selectedSubcategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };
  const [isSeatSelectionOpen, setIsSeatSelectionOpen] = useState(false);

  const handleCheckCircleClick = () => {
    setIsSeatSelectionOpen(true);
  };

  return (
    <div>
      <form className="form1" name="form1" id="form1" action="/action_page.php">
        <label className="select-label">
        Select cinema name:
          <select
            className="select-label"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="select-label">
        Please select movie day:
          <select
            className="select-label"
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
          >
            {subcategories.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="select-label">
        Please select movie session:
          <select className="select-label">
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <divv>
          <FaCheckCircle
            className="tick"
            size={25}
            color="#f16775"
            onClick={handleCheckCircleClick}
          />
          {isSeatSelectionOpen && <SelectSeat />}
        </divv>
      </form>
    </div>
  );
};

export default SelectSession;