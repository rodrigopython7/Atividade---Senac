
class Senac { //Classe Pai 
    constructor(nome, idade) { // seus contrutor com os atributos 
        this.nome = nome;
        this.idade = idade;
    }
}

class Aluno extends Senac { // classe Aluno filho 
    constructor(nome, idade, matricula) { // add matricula para aluno - usei o super pq tem um atributo a mais - Matricula
        super(nome, idade);
        this.matricula = matricula;
    }
    rodrigo() {
        console.log(`Nome: ${this.nome} | Idade: ${this.idade} | Matricula: ${this.matricula}`); // exibi os valores de aluno
    }
}

class Professor extends Senac { // classe Aluno filho 
    constructor(nome, idade, materia) {
        super(nome, idade);
        this.materia = materia;
    }
    aercio() {
        console.log(`Nome: ${this.nome} | Idade: ${this.idade} | Matéria: ${this.materia}`); // exibi os valores do professor
    }
}

class Turma extends Senac { // classe filho - e adicionei os tributos adicionais
    constructor(nome, idade, sala, periodo) {
        super(nome, idade,)
        this.alunos = [];
    }
    addAluno(aluno) {
        this.alunos.push(aluno); // metodo para add aluno
        console.log(this.alunos);
    }

    removerA(aluno) { // metodo para remover aluno
        let remover = prompt("Quer remover um aluno? 'sim' ou 'nao'"); // condição para remover ou não
        if (remover === "sim") {
            let index = this.alunos.indexOf(aluno);
            this.alunos.splice(index, 1);
            console.log(`Aluno: ${aluno1.nome} - foi removido`)
        } else{
            console.log("Nenhum aluno removido")
        }
    }
     
}

const turma = new Turma();

const aluno1 = new Aluno("Lucas", 22, "292921"); // criando as const e atribuindo valores
const aluno2 = new Aluno("Ronaldo", 20, "33874950");
const aluno3 = new Aluno("Messi", 18 , "3777659");

turma.addAluno(aluno1);
turma.addAluno(aluno2);
turma.addAluno(aluno3);

const aluno = new Aluno("Rodrigo", 26, "12345467");
aluno.rodrigo();

const professor = new Professor("Aércio", 30 ,"Javascript");
professor.aercio();

turma.removerA(aluno1); // chamando a função
