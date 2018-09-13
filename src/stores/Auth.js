import { observable, action, decorate } from "mobx";
//import { computed, toJS } from "mobx";

export default class Auth {
  fUId = 'kote';
  Email = 'deku';
  check = false;

  setFUserId(fUId) {
    this.fUId = fUId;
  }
  setEmail(Email) {
    this.Email = Email;
  }
  setCheck(check){
    this.check = check;
  }

}

decorate(Auth, {
  fUId: observable,
  Email: observable,
  check: observable,
  setFUserId: action,
  setEmail: action,
  setCheck: action,
});
