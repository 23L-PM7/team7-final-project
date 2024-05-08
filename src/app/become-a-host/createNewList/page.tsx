"use client";
import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useState, useEffect } from "react";
import { Button } from "@mui/joy";
import axios from "axios";

export default function CreateNewList() {
  let [number, setNumber] = useState(1);
  const [list, setList] = useState([]);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [price, setPrice] = useState("");
  const [houseType, setHouseType] = useState("");

  function loadList() {
    axios
      .get("http://localhost:3000/api/listing")
      .then((list) => setList(list.data));
  }

  function CreateNewList() {
    axios
      .post("http://localhost:3000/api/listing", {
        title: title,
        description: description,
        roomCount: roomCount,
        price: price,
      })
      .then(() => {
        loadList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadList();
  }, []);

  function minus() {
    if (number > 0) {
      number = number - 1;
      setNumber(number);
    }
  }
  function plus() {
    number = number + 1;
    setNumber(number);
  }

  return (
    <div>
      <div className="container mx-auto border h-[850px] pt-32">
        <h1>Title</h1>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Type here"
          className="input w-[100%] input-bordered max-w-xs"
        />
        <div>Which of these best describes your place?</div>
        <Select
          value={description}
          onChange={(event, newValue) => setDescription(newValue ?? "")}
          placeholder="Choose one…"
        >
          <Option value="house">House</Option>
          <Option value="Apartment">Apartment</Option>
        </Select>
        <div>What type of place will guests have?</div>
        <Select
          value={houseType}
          onChange={(event, newValue) => setHouseType(newValue ?? "")}
          placeholder="Choose one…"
        >
          <Option value="dog">House</Option>
          <Option value="cat">Apartment</Option>
          <Option value="fish">Barn</Option>
        </Select>
        <div>Share some basics about your place</div>
        <div className="flex items-center max-w-60">
          <p>Guests</p>
          <button
            onClick={minus}
            className="border w-8 h-8 rounded-full bg-slate-100"
          >
            -
          </button>
          <div className="mx-5">{number}</div>
          <button
            value={roomCount}
            onClick={plus}
            className="border w-8 h-8 rounded-full bg-slate-100"
          >
            +
          </button>
        </div>
        <div>Tell guests what your place has to offer</div>
        <Select placeholder="Choose one…">
          <Option value="dog">wifi</Option>
          <Option value="cat">Tv</Option>
          <Option value="fish">kitchen</Option>
          <Option value="fish">washer</Option>
        </Select>
        <input type="date" className="border p-3" />
        <br />
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="price"
          className="input w-[100%] input-bordered max-w-xs"
          type="price"
        />
        <Button onClick={CreateNewList}>Continue</Button>
      </div>{" "}
    </div>
  );
}
