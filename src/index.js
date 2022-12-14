// == Import : npm
import { render } from 'react-dom';

// == Import : local
// Composants
 import Converter from 'src/components/Converter';
//import DemoControlledComponent from 'src/components/DemoControlledComponent';
// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <Converter />;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
