import { headerOptions, header } from '../block/header';
import { profileOptions, profile } from '../block/profile';
document.getElementById("root").innerHTML = `
  ${header(headerOptions)}
  ${profile(profileOptions)}`;