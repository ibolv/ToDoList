class RAMService {

    constructor() {
        this._apiBase('https://rickandmortyapi.com/api')
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {

        }

        return await res.json();
    };

    getAllCharacters() {
        return this.getResource('/characters');
    };

    getCharacter(id) {
        return this.getResource(`characters/${id}`);
    }
}

const ram = new RAMService();

ram.getAllCharacters()
    .then(res => console.log(res))