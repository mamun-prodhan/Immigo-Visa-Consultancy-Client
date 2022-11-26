import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div>
            <div className="bg-base-200 rounded-xl p-10 my-10">
                <div className="">
                    <h1 className="text-3xl font-bold mt-5">What is the difference Between SQL and NoSQL ?</h1>
                    <p className="py-6">
                        The difference between SQL and NoSQL are: <br /> <br />
                        <span className='font-bold'>SQL:</span> <br />
                        <ol>
                            <li>
                                1. RELATIONAL DATABASE MANAGEMENT SYSTEM
                            </li>
                            <li>
                                2. These databases have fixed or static or predefined schema
                            </li>
                            <li>
                                3. These databases are not suited for hierarchical data storage
                            </li>
                            <li>
                                4. These databases are best suited for complex queries
                            </li>
                            <li>
                                5. Vertically Scalable
                            </li>
                            <li>
                                6. Follows ACID property
                            </li>
                        </ol> <br />
                        <span className='font-bold'>NoSQL:</span> <br />
                        <ol>
                            <li>
                                1. Non-relational or distributed database system.
                            </li>
                            <li>
                                2. They have dynamic schema
                            </li>
                            <li>
                                3. These databases are best suited for hierarchical data storage.
                            </li>
                            <li>
                                4. These databases are not so good for complex queries
                            </li>
                            <li>
                                5. Horizontally scalable
                            </li>
                            <li>
                                6. Follows CAP(consistency, availability, partition tolerance)
                            </li>
                        </ol>

                    </p>

                </div>
            </div>
            <div className="bg-base-200 rounded-xl p-10 my-10">
                <div className="">
                    <h1 className="text-3xl font-bold mt-5">What is the difference Between JavaScript and NodeJS ?</h1>
                    <p className="py-6">
                        The difference between JavaScript and NodeJS are: <br /> <br />
                        <span className='font-bold'>JavaScript:</span> <br />
                        <ol>
                            <li>
                                1. Javascript is a programming language that is used for writing scripts on the website.
                            </li>
                            <li>
                                2. Javascript can only be run in the browsers.
                            </li>
                            <li>
                                3. It is basically used on the client-side.
                            </li>
                            <li>
                                4. Javascript is capable enough to add HTML and play with the DOM.
                            </li>
                            <li>
                                5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                            </li>
                            <li>
                                6. Javascript is used in frontend development.
                            </li>
                        </ol> <br />
                        <span className='font-bold'>NodeJS:</span> <br />
                        <ol>
                            <li>
                                1. NodeJS is a Javascript runtime environment.
                            </li>
                            <li>
                                2. We can run Javascript outside the browser with the help of NodeJS.
                            </li>
                            <li>
                                3. It is mostly used on the server-side.
                            </li>
                            <li>
                                4. Nodejs does not have capability to add HTML tags.
                            </li>
                            <li>
                                5. V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                            </li>
                            <li>
                                6. Nodejs is used in server-side development.
                            </li>
                        </ol>
                    </p>
                </div>
            </div>
            <div className="bg-base-200 rounded-xl p-10 my-10">
                <div className="">
                    <h1 className="text-3xl font-bold mt-5">What is JWT and how does it work ?</h1>
                    <p className="py-6">
                        <span className='font-bold'>JWT</span>, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    </p>
                </div>
            </div>
            <div className="bg-base-200 rounded-xl p-10 my-10">
                <div className="">
                    <h1 className="text-3xl font-bold mt-5">How does NodeJS handle multiple requests at the same time ?</h1>
                    <p className="py-6">
                        NodeJS receives multiple client requests and places them into <span className='font-bold'>EventQueue</span>. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. <span className='font-bold'>EventLoop</span> is the listener for the EventQueue. <br />If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;