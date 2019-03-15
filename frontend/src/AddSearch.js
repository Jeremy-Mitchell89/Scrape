import axios from "axios";
import React, { useState, useCallback } from "react";

function useInput(initalValue = "") {
  const [value, update] = useState(initalValue);
  const onChange = useCallback(e => {
    update(e.currentTarget.value);
  }, []);
  return { value, onChange };
}

async function handleSubmit(e, data) {
  e.preventDefault();
  const res = await axios.post(`/searches`, {
    name: data.name.value,
    feed: data.feed.value
  });
  console.log(res);
}
export default function AddSearch() {
  const name = useInput("test");
  const feed = useInput(
    `https://minneapolis.craigslist.org/search/sss?format=rss&query=`
  );
  return (
    <form onSubmit={e => handleSubmit(e, { name, feed })}>
      <input type="text" name="name" placeholder="name" {...name} />
      <input type="text" name="feed" placeholder="feed" {...feed} />
      <button type="submit">+ Add Search</button>
    </form>
  );
}
