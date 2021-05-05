export default class UserInfo {
  constructor({nameselector, nameDescription, avatarSelector}) {
    this._name = document.querySelector(nameselector);
    this._description = document.querySelector(nameDescription);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent
    }
  }

  setUserInfo({ name, description}) {
    this._name.textContent = name;
    this._description.textContent = description;
  }

  setUserAvatar({avatar}) {
    this._avatar.style.backgroundImage = `url(${avatar})`;
  }
}