import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Typing = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    // this is typing animation 
    <div className="App">
      <h1
        className="text-2xl"
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
      >
        Life is simple{" "}
        <span className="text-primary " style={{ fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Eat", "Sleep", "And explore food", "Repeat!"]}
            loop={0 | false}
            cursor
            cursorStyle="__"
            cursorBlinking={true}
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={2000}
            onLoopDone={handleDone}
          />
        </span>
      </h1>
    </div>
  );
};

export default Typing;
