import React, { useState } from 'react';

const Review = (props) => {
    const { reviews } = props;
    const [index, setIndex] = useState(0);

    const hanleprev = () => {
        console.log("prev button is clicked");
        setIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
    }

    const handlenext = () => {
        console.log("next button is clicked");
        setIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }

    const handlerandom = () => {
        console.log("what is length of array", reviews.length);
        let j = index;
        while (j === index) {
            j = Math.floor(Math.random() * reviews.length);
        }
        setIndex(j);
    }

    // Get current review based on `index`
    const { id, name, text, image, job } = reviews[index];

    return (
        <div className='review'>
            <section className='container'>
                <h1 id='review-heading'>Our Reviews</h1>
            </section>

            <main>
                <p className='author' id={`author-${id}`}>{name}</p>
                <p className='job'>{job}</p>
                <p className='info'>{text}</p>
                <img src={image} className='person-img' alt={name} />
                <button className='prev-btn' onClick={hanleprev}>prev</button>
                <button className='random-btn' onClick={handlerandom}>surprise me</button>
                <button className='next-btn' onClick={handlenext}>Next</button>
            </main>
        </div>
    )
}

export default Review;
