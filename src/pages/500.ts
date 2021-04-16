import { error500 } from '../block/error';
import { renderElements } from '../utils/render';

renderElements("#root", [ error500 ]);