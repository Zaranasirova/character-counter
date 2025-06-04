import React, { useContext, useEffect } from 'react'
import { MainContext } from '../utils/MainContext';
import limit_icon from "../assets/image/info-circle.svg";


const Text = () => {
    const { textAreaInput, setTextAreaInput, getWordCount, getSentenceCount, getTotalCharacter, exceludeSpaces, setExceludeSpaces, characterLimit, setCharacterLimit, getLetterDensity } = useContext(MainContext);
    useEffect(() => {
        getWordCount(textAreaInput);
        getSentenceCount(textAreaInput);
        getLetterDensity(textAreaInput);
    }, [textAreaInput])


    useEffect(() => {
        getTotalCharacter(textAreaInput);
    }, [exceludeSpaces, textAreaInput])


    console.log(exceludeSpaces)
    return (
        <form className='textBox'>
            <div className='textBox-input'>
                <textarea maxLength={characterLimit ? "500" : undefined} value={textAreaInput} placeholder='Start typing here… (or paste your text)' onChange={(e) => setTextAreaInput(e.target.value)} className={characterLimit && textAreaInput.length >= 500 ? "error" : ""}></textarea>
                {
                    characterLimit && textAreaInput.length >= 500 ? <div className='error-message-wrapper'>
                        <img src={limit_icon} alt="" />
                        <p className='error-message'>
                            Limit reached! Your text exceeds 500 characters.
                        </p>
                    </div> : ""
                }
            </div>
            <div className="input-detail-wrapper">
                <div className="excelude-limit">
                    <div className="exclude-spaces">
                        <input type="checkbox" id='excelude' className='checkbox' checked={exceludeSpaces} onChange={(e) => setExceludeSpaces(e.target.checked)} />
                        <label htmlFor='excelude'>Excelude spaces</label>
                    </div>
                    <div className="character-limit">
                        <input type="checkbox" className='checkbox' checked={characterLimit} onChange={(e) => setCharacterLimit(e.target.checked)} />
                        <label>Set character limit</label>
                        {
                            characterLimit===true ? <div className='character-limit-count'><span>500</span></div> : ""
                        }
                    </div>
                </div>
                {/* <div className="reading-info">
                    <p className="reading-time-info">Approx. reading time: 0 minute</p>
                </div> */}
            </div>
        </form>
    )
}

export default Text