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
            <div className='card p-5  mx-auto'>
                    <h5>1 . Tell us the differences between uncontrolled and controlled components ?</h5>
                    <p>Ans : The difference between them In an uncontrolled component, the DOM handles the form data by itself in the component. Whereas in a controlled component, the state is used to handle the form data within the component.</p>
                </div>
                <div className='card p-5 mx-auto'>
                    <h5>2 . How to validate React props using PropTypes ?</h5>
                    <p>Ans : When developing a React application, you'll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory argum</p>
                    </div>
                <div className='card p-5  mx-auto'>
                    <h5>3 . Tell us the difference between nodejs and express js ?</h5>
                    <p>Ans : Node.js is a runtime environment for executing JavaScript code outside the browser, while Express.js is a web framework built on top of Node.js that provides tools and features for building web applications and APIs.</p>
                </div>
                <div className='card p-5 mx-auto'>
                    <h5>1 . What is a custom hook, and why will you create a custom hook?</h5>
                    <p>Ans : A custom hook is a way to create reusable logic that can be shared across multiple components, just like a component is a way to create reusable UI elements</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;