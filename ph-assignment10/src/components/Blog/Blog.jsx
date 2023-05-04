import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <div>


            <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
            </div>

            <div ref={ref}>
               <p> Hello world </p>
            </div>
        </div>
    );
};

export default Blog;