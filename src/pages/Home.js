import getData from '../utils/getData';

const Home = async () => {
	const characters = await getData();
	const view = /*html*/ `
        <div class="Characters">
            ${characters.results
							.map(
								(character) => /*html*/ `
            <article class="Character-item">
            <a href="#/${character.id}/">
                <img src="${character.image}"alt="${character.name}">
                <h2>${character.name}</h2>
            </a>
            </article>
            `
							)
							.join('')}
        </div>
    `;
	return view;
};

export default Home;
