import React from "react";

const Blog = () => {
  return (
    <div className="bg-fixed  bg-no-repeat bg-cover min-h-[100vh] bg-center">
      <div
        className={`flex justify-center items-center py-[100px] w-full bg-cover`}
      ></div>
      <div className="backdrop-blur-sm bg-white/60">
        <div className="flex flex-col gap-5  p-10">
          <article className="mt-3">
            <h3 className="font-bold text-2xl">
              Difference between SQL and NoSQL?
            </h3>
            <p className="font-medium pl-5">
              The five critical differences between SQL vs NoSQL are: SQL
              databases are relational, NoSQL databases are non-relational. SQL
              databases use structured query language and have a predefined
              schema. NoSQL databases have dynamic schemas for unstructured
              data. SQL databases are vertically scalable, while NoSQL databases
              are horizontally scalable. SQL databases are table-based, while
              NoSQL databases are document, key-value, graph, or wide-column
              stores. SQL databases are better for multi-row transactions, while
              NoSQL is better for unstructured data like documents or JSON.
            </p>
          </article>
          <article>
            <h3 className="font-bold text-2xl">
              What is JWT, and how does it work?
            </h3>
            <p className="font-medium pl-5">
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object. This information can
              be verified and trusted because it is digitally signed. JWTs can
              be signed using a secret (with the HMAC algorithm) or a
              public/private key pair using RSA or ECDSA. Although JWTs can be
              encrypted to also provide secrecy between parties, we will focus
              on signed tokens. Signed tokens can verify the integrity of the
              claims contained within it, while encrypted tokens hide those
              claims from other parties. When tokens are signed using
              public/private key pairs, the signature also certifies that only
              the party holding the private key is the one that signed it.
            </p>

            <br />
          </article>

          <article>
            <h3 className="font-bold text-2xl">
              What is the difference between javascript and NodeJS?
            </h3>
            <p className="font-medium mt-2 pl-5">
              JavaScript is a programming language, which runs in web browsers.
              Whereas Node.js is an interpreter or running environment for
              JavaScript, which holds a lot of requiring libraries and all.
              JavaScript is basically one standard defining programming
              language; it can run any browser with a default browser running
              environment. It is a very strong language normally used for a web
              application on any verification or any specific business logic. We
              need to append in the screen without page refreshing. JavaScript
              also helps to use Ajax at any time, which helps us call any
              server-side script for given dynamic data based on the
              requirement. It also helps with generating dynamic HTML tables
              based on business requirement. JQuery is one of the popular
              libraries to make comfortable use of JavaScript by avoiding to
              write a lot of code. Node.js also holds a lot of relative
              libraries, which we normally use in javascript for general purpose
              programming language. It is actually a kind of environment or
              interpreter that can represent JavaScript or run any javascript
              program. It mainly helps us execute some non-blocking operation
              like some operating system special information like certificate
              details or hardware details; we may use node js on the same, which
              help us do it, and JavaScript normal programming will not help us
              on the same. Normally all browsers have a JavaScript engine that
              helps us to run javascript in a web browser. Spider monkey
              (FireFox), JavaScript Core (Safari), V8 (Google Chrome) are some
              popular javascript engine using verities browsers. But node js is
              using the V8 engine directly, with some libraries to do some I/O
              or networking operations. It actually helps us use JavaScript from
              outside of the browser, like creating, writing or executing one
              shell script, some back-end services, or running on hardware. Let
              us understand JavaScript vs Node JS in detail.
            </p>
          </article>
          <article>
            <h3 className="font-bold text-2xl">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <p className="font-medium mt-2 pl-5">
              We know NodeJS application is single-threaded. Say, if processing
              involves request A that takes 10 seconds, it does not mean that a
              request which comes after this request needs to wait 10 seconds to
              start processing because NodeJS event loops are only
              single-threaded. The entire NodeJS architecture is not
              single-threaded. How NodeJS handle multiple client requests?
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
