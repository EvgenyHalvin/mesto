export default class UserInfo {
  constructor({nameselector, nameDescription}) {
    this._name = document.querySelector(nameselector);
    this._description = document.querySelector(nameDescription);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent
    }
  }

  setUserInfo({ name,description }) {
    this._name.textContent = name;
    this._description.textContent = description;
  }
}