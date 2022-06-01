export class Starwars {
    id: number;
    nome: string;
    habilidade: string;
    planeta: string;
    armas: string;
    avatar: string;
    info: string;

    constructor(
        id: number, nome: string, habilidade: string, planeta: string, 
        armas: string, avatar: string, info: string) {
            
        this.id = id;
        this.nome = nome;
        this.habilidade = habilidade;
        this.planeta = planeta;
        this.armas = armas;
        this.avatar = avatar;
        this.info = info;
    }
}
