export default class Model {
  id = ''
  firstname = ''
  lastname = ''
  email = ''
  role = ''
  district = ''
  city = ''
  role = ''
  partnership = ''
  status = ''
  
  generateId() {
    const str = this.email + Math.random(100) + '' + new Date().getMilliseconds()
    return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
  }
}