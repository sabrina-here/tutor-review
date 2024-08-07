import React from "react";

function Blog() {
  return (
    <div>
      <div>
        <div className="card  my-20 w-100">
          <div className="card-body">
            <h2 className="card-title">Difference between SQL and NoSQL</h2>
            <p>
              SQL database stored data in tables, where the tables are related
              to one another using primary or foreign keys, NoSQL stores data in
              key value pairs inside objects, each object can be similar to each
              row in an SQL data table, all objects are stored in an array, this
              array of objects is called a collection.
            </p>
          </div>
        </div>
        <div className="card  my-20 w-100">
          <div className="card-body">
            <h2 className="card-title">What is JWT, and how does it work?</h2>
            <p>
              JWT(Json Web Token) is a server generated secret passcode that is
              given to the client once the client is authenticated, after that
              for each subsequent request the client needs to send that token to
              verify that the request is from a valid client.
            </p>
          </div>
        </div>
        <div className="card  my-20 w-100">
          <div className="card-body">
            <h2 className="card-title">
              How does NodeJs handle multiple request at the same time?
            </h2>
            <p>
              Node.js uses an event-driven architecture to handle multiple
              requests simultaneously. When a request comes in, Node.js places
              it into an event queue and continues processing other requests
              without waiting for the current one to complete. It uses an event
              loop to monitor this queue and delegates time-consuming
              operations, like I/O tasks or database queries, to worker threads
              or asynchronous callbacks. For example, when a request involves
              reading a file, Node.js delegates the file reading to the
              filesystem module, which processes the request in the background.
              Once the file is read, a callback is triggered, and the event loop
              picks it up to continue the process. This non-blocking approach
              allows Node.js to handle thousands of concurrent connections
              efficiently, making it ideal for real-time applications like chat
              servers, online gaming, and streaming services.
            </p>
          </div>
        </div>
        <div className="card  my-20 w-100">
          <div className="card-body">
            <h2 className="card-title">
              What is the difference between Javascript and NodeJs?
            </h2>
            <p>
              JavaScript is a programming language primarily used for
              client-side scripting in web development. Node.js is a runtime
              environment that allows JavaScript to be executed on the server
              side, enabling the creation of server-side applications. While
              JavaScript runs in browsers, Node.js provides a platform for
              running JavaScript code outside the browser with additional
              features like file system access and networking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
