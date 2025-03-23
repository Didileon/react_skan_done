import React, { useState } from "react";

function ButtonClick() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="center">
      <button
        onClick={handleClick}
        style={{
          backgroundColor: active ? "grey" : "#5970ff",
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {active ? "Перейти в личный кабинет" : "Подробнее"}
      </button>
    </div>
  );
}

export default ButtonClick;
