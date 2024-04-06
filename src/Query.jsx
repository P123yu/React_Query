import axios from "axios";
import { default as React, default as React } from "react";
import { useQuery } from "react-query";
const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users/25");
};

function Query() {
  const { data, error, isLoading, isError } = useQuery("users", fetchData);

  if (data) {
    console.log(data.data, "data");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <div></div>;
}

export default Query;
-------------------------------------------------------------
const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

function Query() {
  const { data, error, isLoading, isError } = useQuery("users", fetchData);

  if (data) {
    console.log(data.data, "data");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <div></div>;
}

export default Query;

-------------------------------------------------------------------------------------------------------

success and error callback

import React from "react";
const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

function Query() {
  const a = () => {
    console.log("this is a");
  };

  const b = () => {
    console.log("this is b");
  };

  const { data, error, isLoading, isError } = useQuery("users", fetchData, {
    onSuccess: a,
    onError: b,
  });

  if (data) {
    console.log(data.data, "data");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <div></div>;
}

export default Query;


// ------------------------------------------------------------------------------------------------------
import React from "react";
const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

function Query() {
  const a = () => {
    console.log("this is a");
  };

  const b = () => {
    console.log("this is b");
  };

  const c = () => {
    console.log("this is c");
  };

  const { data, error, isLoading, isError } = useQuery("users", fetchData, {
    // onSuccess: a,
    onSuccess: () => {
      a();
      c();
    },
    onError: b,
  });

  if (data) {
    console.log(data.data, "data");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <div></div>;
}

export default Query;

// ---------------------------------------------------------------------------------------------------



import React from "react";
const fetchUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

const fetchPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

function Query() {
  const a = () => {
    fetchPost();
  };

  const b = () => {
    console.log("this is b");
  };

  const { data, error, isLoading, isError } = useQuery("users", fetchUser, {
    onSuccess: a,
    onError: b,
  });
  console.log(data, "Alldata");

  const { data: postData } = useQuery("posts", fetchPost);
  console.log(postData, "AllpostData");

  if (data) {
    console.log(data.data, "data");
  }

  if (postData) {
    console.log(postData.data, "postData");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <div></div>;
}

export default Query;


// ------------------------------------------------------------------------------------------------------
import React from "react";
const fetchUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

const fetchPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const fetchInfo = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/1");
};

function Query() {
  const a = () => {
    fetchPost();
  };

  const b = () => {
    console.log("this is b");
  };

  const c = () => {
    fetchInfo();
  };

  const { data, error, isLoading, isError } = useQuery("users", fetchUser, {
    onSuccess: () => {
      a();
      c();
    },
    onError: b,
  });
  console.log(data, "Alldata");

  const { data: postData } = useQuery("posts", fetchPost);
  console.log(postData, "AllpostData");

  const { data: postInfo } = useQuery("info", fetchInfo);
  console.log(postInfo, "AllpostInfo");

  if (data) {
    console.log(data.data, "data");
  }

  if (postData) {
    console.log(postData.data, "postData");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <div></div>;
}

export default Query;

// -----------------------------------------------------------------------------------------------------
import React from "react";
const fetchUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

const fetchPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const fetchInfo = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/1");
};

function Query() {
  const a = () => {
    fetchPost();
    fetchInfo();
  };

  const b = () => {
    console.log("this is b");
  };

  const { data, error, isLoading, isError } = useQuery("users", fetchUser, {
    onSuccess: () => {
      a();
    },
    onError: b,
  });
  console.log(data, "Alldata");

  const { data: postData } = useQuery("posts", fetchPost);
  console.log(postData, "AllpostData");

  const { data: postInfo } = useQuery("info", fetchInfo);
  console.log(postInfo, "AllpostInfo");

  if (data) {
    console.log(data.data, "data");
  }

  if (postData) {
    console.log(postData.data, "postData");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <div></div>;
}

export default Query;

// passing data ,error as arguments from one function to another function using useQuery with onSuccess and onError hooks in react-query

import React from "react";
const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

function Query() {
  const a = (data) => {
    console.log("this is a", data);
  };

  const b = (error) => {
    console.log("this is b",error);
  };

  const { data, error, isLoading, isError } = useQuery("users", fetchData, {
    onSuccess: a,
    onError: b,
  });

  if (data) {
    console.log(data.data, "data");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <div></div>;
}

export default Query;

// ---------------------------------------------------------------------------------------------------------
import React from "react";

const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

function Query() {
  const a = () => {
    console.log("this is a");
  };

  const b = () => {
    console.log("this is b");
  };

  const c = () => {
    console.log("this is c");
  };

  const { data, error, isLoading, isError } = useQuery("users", fetchData, {
    onSuccess: () => {
      a();
      c();
    },
    onError: b,
    refetchOnWindowFocus: true,
  });

  if (data) {
    console.log(data, "data");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {/* {data?.data.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))} */}

      {data
        ? data.data.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        : ""}

      {/* {data.data
        ? data.data.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        : ""} */}
    </div>
  );
}

export default Query;


// ---------------------------------------------------------------------------------------------------------
// Data Transformation in react-query
// i want to make array of name from the object // so override the object data into array data of specific field

import React from "react";

const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

function Query() {
  const a = () => {
    console.log("this is a");
  };

  const b = () => {
    console.log("this is b");
  };

  const c = () => {
    console.log("this is c");
  };

  const { data, error, isLoading, isError } = useQuery("users", fetchData, {
    onSuccess: () => {
      a();
      c();
    },
    onError: b,
    select: (data) => {
      return data.data.map((user) => user.name);
    },
  });

  if (data) {
    console.log(data, "data"); // array
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log(data, "userArray"); // array
  return (
    <div>
      {/* {data?.data.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))} */}

      {data
        ? data.map((user) => (
            <div key={user}>
              <p>Email: {user}</p>
            </div>
          ))
        : ""}

      {/* {data.data
        ? data.data.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        : ""} */}
    </div>
  );
}

export default Query;


// ---------------------------------------------------------------------------------------------------
import React from "react";

const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

function Query() {
  const a = () => {
    console.log("this is a");
  };

  const b = () => {
    console.log("this is b");
  };

  const c = () => {
    console.log("this is c");
  };

  const { data, error, isLoading, isError } = useQuery("users", fetchData, {
    onSuccess: () => {
      a();
      c();
    },
    onError: b,
    select: (data) => {
      return data.data.filter((user) => user.name == "Leanne Graham");
    },
  });

  if (data) {
    console.log(data, "data"); // array or arrays of object meeting that name
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log(data, "userArray"); // array or arrays of object meeting that name
  return (
    <div>
      {/* {data?.data.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))} */}

      {/* {data.data
        ? data.data.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        : ""} */}
    </div>
  );
}

export default Query;

// set the data without override the data


// -----------------------------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";

const fetchData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

function Query() {
  const a = () => {
    console.log("this is a");
  };

  const b = () => {
    console.log("this is b");
  };

  const c = () => {
    console.log("this is c");
  };

  const { data, error, isLoading, isError } = useQuery("users", fetchData, {
    onSuccess: () => {
      a();
      c();
    },
    onError: b,
  });

  const [userArray, setUserArray] = useState([]);

  // Update userArray when data changes
  useEffect(() => {
    if (data) {
      const newUserArray = data.map((user) => user.name);
      setUserArray(newUserArray);
    }
  }, [data]);

  if (isLoading || userArray.length === 0) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {userArray.map((name, index) => (
        <div key={index}>
          <p>Name: {name}</p>
        </div>
      ))}
    </div>
  );
}

export default Query;

// parallel query with useQuery -----------------------------------------------------------------------

import React from "react";

const fetchUser = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};

const fetchPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

function Query() {
  const { data: user } = useQuery("users", fetchUser);
  const { data: post } = useQuery("post", fetchPost);

  console.log(user, post);

  return <div></div>;
}

export default Query;

import React from "react";
import { useQueries } from "react-query";

const items = [1, 2, 7];

function ExampleComponent() {
  //   const fetchItemData = async (itemId) => {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${itemId}`
  //     );
  //     return response.data;
  //   };

  const fetchItemData = async (itemId) =>
    (await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}`))
      .data;

  const queryResults = useQueries(
    items.map((item) => ({
      queryKey: ["item", item],
      queryFn: () => fetchItemData(item),
    }))
  );

  //   // Check if any query is loading
  //   const isLoading = queryResults.some((query) => query.isLoading);

  //   // Check if any query has error
  //   const isError = queryResults.some((query) => query.isError);

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (isError) {
  //     return <div>Error occurred while fetching data.</div>;
  //   }

  return (
    <div>
      {queryResults.map((query, index) => (
        <div key={index}>
          <h2>Item {items[index]}</h2>
          {query.data && (
            <div>
              <p>Title: {query.data.title}</p>
              <p>Body: {query.data.body}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExampleComponent;


// ------------------------------------------------------------------------------------------------------
import React from "react";

function ExampleComponent() {
  // Simulated array produced by the component
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
  ];

  const fetchItemData = async (itemId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${itemId}`
    );
    return response.data;
  };

  // Define an array of query objects dynamically based on items
  const queryResults = useQueries(
    items.map((item) => ({
      queryKey: ["item", item.id],
      queryFn: () => fetchItemData(item.id),
    }))
  );

  // Check if any query is loading
  const isLoading = queryResults.some((query) => query.isLoading);

  // Check if any query has error
  const isError = queryResults.some((query) => query.isError);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      {queryResults.map((query, index) => (
        <div key={index}>
          <h2>Item {items[index].name}</h2>
          {query.data && (
            <div>
              <p>Title: {query.data.title}</p>
              <p>Body: {query.data.body}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExampleComponent;


// --------------------------------------------------------------------------------------------------------
import React from "react";
// const fetchData = async () => {
//   return await axios.get("https://jsonplaceholder.typicode.com/users");
// };

const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users/1");
};

function Query() {
  const { data, error, isLoading, isError } = useQuery("users", fetchData);

  if (data) {
    console.log(data, "data");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <div></div>;
}

export default Query;

on click

import React from "react";

const fetchData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users/1");
};

function Query() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch: user12,
  } = useQuery("users", fetchData, {
    enabled: false,
  });

  const handleClick = () => {
    user12();
  };

  if (data) {
    console.log(data, "data");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
    </div>
  );
}

export default Query;


// ---------------------------------------------------------------------------------------------------
// two click 


import React from "react";
const fetchUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users/1");
};

const fetchPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/1");
};

function Query() {
  const { data: user, refetch: handleUser } = useQuery("users", fetchUser, {
    enabled: false,
    // onSuccess: (user) => {
    //   console.log(user, "user");
    // },
  });

  const { data: post, refetch: handlePost } = useQuery("posts", fetchPost, {
    enabled: false,
    // onSuccess: (post) => {
    //   console.log(post, "post");
    // },
  });

  const handleClickUser = () => {
    handleUser();
  };

  const handleClickPost = () => {
    handlePost();
  };

  if (user) {
    console.log(user.data, "user");
  }

  if (post) {
    console.log(post.data, "post");
  }
  return (
    <>
      <div>
        <button onClick={handleClickUser}>Fetch User</button>
        <button onClick={handleClickPost}>Fetch post</button>
      </div>

      {user?.data && (
        <div>
          <p>{user.data.name}</p>
        </div>
      )}

      {post?.data && (
        <div>
          <p>{post.data.title}</p>
        </div>
      )}
      {/* {user &&
        user.data &&
        user.data.map((i) => (
          <div key={i.name}>
            <p>{i.name}</p>
          </div> */}
      {/* ))} */}
    </>
  );
}

export default Query;


// -----------------------------------------------------------------------------------------------------
import React from "react";
const fetchUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users/1");
};

const fetchPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/1");
};


// --------------------------------------------------------------------------------------------------------
function Query() {
  const { data: user, refetch: handleUser } = useQuery("users", fetchUser, {
    enabled: false,
    onSuccess: (user) => {
      console.log(user.data, "user");
    },
  });

  const { data: post, refetch: handlePost } = useQuery("posts", fetchPost, {
    enabled: false,
    onSuccess: (post) => {
      console.log(post.data, "post");
    },
  });

  const handleClickUser = () => {
    handleUser();
  };

  const handleClickPost = () => {
    handlePost();
  };

  //   if (user) {
  //     console.log(user.data, "user");
  //   }

  //   if (post) {
  //     console.log(post.data, "post");
  //   }
  return (
    <>
      <div>
        <button onClick={handleClickUser}>Fetch User</button>
        <button onClick={handleClickPost}>Fetch post</button>
      </div>

      {user?.data && (
        <div>
          <p>{user.data.name}</p>
        </div>
      )}

      {post?.data && (
        <div>
          <p>{post.data.title}</p>
        </div>
      )}
      {/* {user &&
        user.data &&
        user.data.map((i) => (
          <div key={i.name}>
            <p>{i.name}</p>
          </div> */}
      {/* ))} */}
    </>
  );
}

export default Query;

//------------------------------------------------------------------------------------------------------
import React from "react";
const fetchUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users/1");
};

function Query() {
  const [fetchUserEnabled, setFetchUserEnabled] = useState(true); // Initially set to true
  const { data: userData } = useQuery("user", fetchUser, {
    enabled: fetchUserEnabled,
  });

  const handleClickFetchUser = () => {
    setFetchUserEnabled(true);
  };

  const handleClickUser = () => {
    fetchUser();
  };

  console.log(userData, "userData");

  return (
    <>
      <button
        onClick={() => {
          handleClickFetchUser();
          handleClickUser();
        }}
      >
        Fetch User
      </button>
    </>
  );
}

export default Query;


// ------------------------------------------------------------------------------------------------------

import React from "react";
const fetchUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users/1");
};

function Query() {
  const { data: userData } = useQuery("user", fetchUser, {
    enabled: true,
    onSuccess: () => {
      console.log(userData);
    },
  });

  const handleClickUser = () => {
    fetchUser();
  };

  return (
    <>
  <button
    onClick={() => {
      handleClickUser();
    }}
  >
    Fetch User
  </button>
</>
  );
}

export default Query;


// ----------------------------------------------------------------------------------------------------

import React from "react";
const fetchUser = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users/1");
};

function Query() {
  const { data: userData, refetch: user12 } = useQuery("user", fetchUser);

  const handleClickUser = () => {
    user12();
  };
  console.log(userData, "userData");

  const handleClick1User = () => {
    console.log("this is c");
  };

  console.log(userData, "userData");

  return (
    <>
      <button
        onClick={() => {
          handleClickUser();
        }}
      >
        Fetch User
      </button>

      <button
        onClick={() => {
          handleClick1User();
        }}
      >
        Fetch User
      </button>
    </>
  );
}

export default Query;
