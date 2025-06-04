import React, { useContext } from 'react';
import total_icon from "../assets/image/Clip path group.svg";
import shape_icon from "../assets/image/shape-29.png";
import shape_111 from "../assets/image/shape-111.png";
import { MainContext } from '../utils/MainContext';


const TextStats = () => {
    const {word,sentence,total,exceludeSpaces}=useContext(MainContext)
    return (
        <div className='text-stats'>
            <div className="total-character stat-item">
                <div className="total-character-details">
                    <p className='character-number'>{total}</p>
                    <p className='character-title'>Total Characters <span>{exceludeSpaces ?"(no space)" : "" }</span></p>
                </div>
                <div className='total-character-icon'>
                    <img src={total_icon} alt="" />
                </div>
            </div>
            <div className="word-count stat-item">
            <div className="total-character-details">
                    <p className='character-number'>{word}</p>
                    <p className='character-title'>Word Count</p>
                </div>
                <div className='total-character-icon'>
                    <img src={shape_icon} alt="" />
                </div>
            </div>
            <div className="sentence-count stat-item">
            <div className="total-character-details">
                    <p className='character-number'>{sentence}</p>
                    <p className='character-title'>Sentence Count</p>
                </div>
                <div className='total-character-icon'>
                    <img src={shape_111} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TextStats