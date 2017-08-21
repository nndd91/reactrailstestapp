/* eslint-disable import/prefer-default-export */

import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';
import axios from 'axios'

export const updateName = (text) => ({
  type: HELLO_WORLD_NAME_UPDATE,
  text,
});

export function GetJokeList () {
  let url = 'https://icanhazdadjoke.com/'
  let jokelist = axios.get(url)

  return {
    type:  'GET_JOKE_LIST',
    paylod: jokelist
  }
}
