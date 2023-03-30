import axios from 'axios'

const SERVER = "http://localhost:3500/";

export default class countryServer {
  static async getAll() {
    const respons = await axios.get(SERVER + 'countries');
    return respons.data;
  }

  static async getCountry(name) {
    const convertedName = name.toLowerCase();
    const respons = await axios.get(SERVER + 'countries');
    const country = await respons.data.filter(el => el.alpha3Code.toLowerCase() === convertedName.toLowerCase());
    return country[0];
  }
}
