import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <div>
    <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='bg-danger px-5 text-white py-3 '>Generate Pdf</button>}
      </Pdf>
            </div>

            <div ref={ref} className='container p-5 d-flex justify-content-center align-items-center'>
            <div>
            <div className='card p-5  '>
                    <h5>1 . Tell us the differences between uncontrolled and controlled components ?</h5>
                    <p>Ans : A controlled functional component is a component that receives its current value and update callback via props.In controlled components, the parent component is responsible for managing the state and passing it down as props to the controlled component. This makes it easy to track the state of the component and predict how it will behave. On the other hand an uncontrolled functional component is a component that maintains its own internal state. Uncontrolled components manage their own state using a ref to access the DOM element's current value and update the state accordingly. </p>
                </div>
                <div className='card p-5 mx-auto'>
                    <h5>2 . How to validate React props using PropTypes ?</h5>
                    <p>Ans : When developing a React application, you'll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory argum We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
                    </div>
                <div className='card p-5  mx-auto'>
                    <h5>3 . Tell us the difference between nodejs and express js ?</h5>
                    <p>Ans : Node.js is a runtime environment for executing JavaScript code outside the browser, while Express.js is a web framework built on top of Node.js that provides tools and features for building web applications and APIs.
                    NodeJS is open-source, cross-platform JavaScript code that runs on servers. It uses an asynchronous event-driven model and is designed to build scalable network applications. It’s built on Google Chrome’s V8 engine, which makes it fast and efficient to develop apps. the main different between node.js and Express.js is node.js is a run time invroment and express.js is a framework on the basic of node. </p>
                </div>
                <div className='card p-5 mx-auto'>
                    <h5>1 . What is a custom hook, and why will you create a custom hook?</h5>
                    <p>Ans : Custom hook is a kind of jsvascript function. It is a way to create reusable logic that can be shared across multiple components, just like a component is a way to create reusable UI elements.we creat custom hook to reuse a coustom hook can be access all over the project. Custom hook are used to working easier.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;