import { adviceIdElement, randomAdviceElement } from './dom';

let phrase;
const getPhrase = async () => {
	const response = fetch('https://api.adviceslip.com/advice');
	const data = await (await response).json();
	phrase = data;
	console.log(data);
	fillRandomAdvice();
};

const fillRandomAdvice = () => {
	randomAdviceElement.textContent = phrase.slip.advice;
	adviceIdElement.textContent = phrase.slip.id;
};
export { getPhrase, fillRandomAdvice };
