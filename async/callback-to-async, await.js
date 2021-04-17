// async, await 활용해서 callback-to-promise 코드 다시 작성해보기

// Callback Hell example - How to solve a problem with promise 

class UserStorage {
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async loginUser(id, password) {
    await delay(1000);
    if (
      (id === 'ellie' && password === 'dream') ||
      (id === 'coder' && password === 'academy')
    ) {
      return id;
    } else {
      throw new Error('not found');
    }
  }

  async getRoles(user) {
    await delay(1000);
    if (user === 'ellie') {
      return {
        name: 'ellie',
        role: 'admin'
      };
    } else {
      throw new Error('no access');
    }
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(console.log);

async function userLoginRole() {
  const userId = await loginUser();
  const userRole = await getRoles();
  return alert(`Hello ${userId}, you have a ${userRole} role`);
}