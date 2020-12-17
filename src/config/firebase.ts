import * as firebase from 'firebase';
import 'firebase/database';

let db = firebase.database();

let pessoa = {
    nome: "Emanuel",
    idade: 22,
    masculino: true,
  };

  db.ref('pessoa').set(pessoa);
  