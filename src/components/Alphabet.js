import GlobalContext from './GlobalContext';
import '../styles/Alphabet.css'

function Alphabet() {

    const alphabetList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const collectionOfLetters = [];

    for(let x=0;x < alphabetList.length;x++){
        collectionOfLetters.push(<p value={alphabetList[x]} key={alphabetList[x].toString()}>{alphabetList[x]}</p>);
    }

    return <div id='alpha'>{collectionOfLetters}</div>
}

export default Alphabet;