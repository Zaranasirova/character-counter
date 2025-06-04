import React, { useContext, useState } from 'react';
import dropdown from "../assets/image/Title.svg";
import { MainContext } from '../utils/MainContext';


const LetterDensity = () => {
    const { letterData } = useContext(MainContext);
    const [showAll, setShowAll] = useState(false);
    const sortedLetterData = [...letterData].sort((a, b) => b.percentage - a.percentage);
    const visibleItems = showAll ? sortedLetterData : sortedLetterData.slice(0, 4);

    return (
        <div className='letter-density'>
            <h2 className='letter-density-title'>Letter Density</h2>
            <div className='analysis'>
            {
                letterData.length > 0 ? visibleItems.map((item, index) => (
                    <div className="letter-analysis" key={index}>
                        <span className='letter'>{item.letter}</span>
                        <div className='bar-container'>
                            <div
                                className='bar-fill'
                                style={{ width: `${Math.round(item.percentage)}%` }}
                            ></div>
                        </div>
                        <span className='count'>
                            {item.count} ({Math.round(item.percentage)}%)
                        </span>
                    </div>
                )) : (
                    <p>No characters found. Start typing to see letter density.</p>
                )
            }
            </div>
            
            {
                letterData.length > 4 && (
                    <div className="see-more" onClick={() => setShowAll(!showAll)}>
                        <span>{showAll ? 'See less' : 'See more'}</span>
                        <span className={`see-more-icon ${showAll ? 'rotated' : ''}`}>
                            <img src={dropdown} alt="" />
                        </span>
                    </div>
                )
            }



        </div>
    )
}

export default LetterDensity