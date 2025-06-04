import { createContext, useState } from "react";



export const MainContext = createContext();



export const CounterContext = ({ children }) => {
    //textArea///
    const [textAreaInput, setTextAreaInput] = useState("");
    //wordCount stat///
    const [word, setWord] = useState("0");
    //sentence state//
    const [sentence, setSentence] = useState("");
    //total state//
    const [total, setTotal] = useState("");

    //excelude spaces checked//
    const [exceludeSpaces, setExceludeSpaces] = useState(false);
    //characterLimit state////////
    const [characterLimit, setCharacterLimit] = useState(false);

    const [letterData, setLetterData] = useState([]);

    ///////////////////////////////////////////////word group/////////////////////////////////////////////////////////////
    const getWordCount = (word) => {
        const wordCount = word
            .trim()
            .split(/\s+/)
            .filter(word => word.length > 0)
            .length;
        setWord(wordCount);

    }
    ///////////////////////////////////////////////sentence group/////////////////////////////////////////////////////////////

    const getSentenceCount = (sentence) => {
        const sentenceCount = sentence
            .trim()
            .split(/(?<=\.)\s/)
            .filter(sentence => sentence.length > 0)
            .length;

        setSentence(sentenceCount);
    }
    ///////////////////////////////////////////////total character/////////////////////////////////////////////////////////////
    const getTotalCharacter = (total) => {

        if (exceludeSpaces === true) {
            const exceludeSpacesTotal = total
                .trim()
                .replace(/\s/g, "")
                .split("")
                .filter(exceludeSpacesTotal => exceludeSpacesTotal.length > 0)
                .length;
            console.log(exceludeSpacesTotal)
            setTotal(exceludeSpacesTotal)

        } else {
            const totalCount = total
                .trim()
                .split("")
                .filter(totalCharacter => totalCharacter.length > 0)
                .length;
            setTotal(totalCount);
        }

    }



    ///////////////////////////new array/////////////////////////////////////////////////////////

    const getLetterDensity = (letter) => {
        let letterCount = {};
        const lettersOnly = letter.toUpperCase().replace(/[^a-zA-Z]/g, '');
        lettersOnly.split("").forEach((chart) => {
            if (letterCount[chart]) {
                letterCount[chart] += 1;
            } else {
                letterCount[chart] = 1
            }
        });

        const totalLetters=lettersOnly.length;
        const resultArray = Object.entries(letterCount).map(([char, count]) => {
            const percentage = ((count / totalLetters) * 100).toFixed(2); 
            return {
                letter: char,
                count: count,
                percentage: percentage,
            };
        });
        console.log(resultArray)
        setLetterData(resultArray)
    }








    const globalData = {
        textAreaInput,
        setTextAreaInput,
        getWordCount,
        word,
        getSentenceCount,
        sentence,
        getTotalCharacter,
        total,
        exceludeSpaces,
        setExceludeSpaces,
        characterLimit,
        setCharacterLimit,
        getLetterDensity,
        letterData,
    };
    return (
        <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
    )
}

export default CounterContext;