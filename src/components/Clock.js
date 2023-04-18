import { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      new Date();
    }, 1000);
  }, []);
  return date.toLocaleTimeString();
}

export default Clock;
