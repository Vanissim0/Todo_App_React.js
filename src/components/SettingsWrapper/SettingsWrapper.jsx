import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TodoWrapper } from "../TodoWrapper/TodoWrapper";
import { useNavigate } from "react-router-dom";

export const SettingsWrapper = (props) => {
  const navigate = useNavigate();

  return (
    <div className="settings">
      <button onClick={() => navigate(-1)}>Go Back</button>
        Choose theme color
    </div>
  );
};
