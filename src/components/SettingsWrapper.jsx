import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TodoWrapper } from "./TodoWrapper";
import { useNavigate } from "react-router-dom";

export const SettingsWrapper = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
        Choose theme color
    </div>
  );
};
