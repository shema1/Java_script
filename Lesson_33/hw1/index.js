  const userAvatarElem = document.querySelector('.user__avatar');
  const userNameElem = document.querySelector('.user__name');
  const userEmailElem = document.querySelector('.user__email');
  const userCommitElem = document.querySelector('.user__commit');

  const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

  userAvatarElem.src = defaultAvatar;

  const getMostActiveDevs = (days, userName) => {
      return fetch(`https://api.github.com/repos/${userName}`)
          .then(respons => respons.json())
          .then(respons => filterDevByDate(respons, days))
          .then(respons => sumDevCommit(respons))

  };

  const dayInMs = day => {
      let ms = day * 86400000
      return ms
  };

  const findDev = (arr, name) => {
      let findElem = arr.find(elem => elem.name == name)
      return findElem
  }

  const sumDevCommit = obj => {
      let arr = []
      obj.map(elem => {
          let currentDev = findDev(arr, elem.name)
          if (currentDev == undefined) {
              arr.push(elem)
              return
          }
          if (elem.name === currentDev.name) {
              currentDev.count++;
          }
      })

      return arr.sort((a, b) => b.count - a.count)[0]
  }

  const filterDevByDate = (obj, days) => {

      let filterDate = new Date().getTime() - dayInMs(days)
      let arrDev = obj.filter(date => new Date(date.commit.author.date) > filterDate)
          .map(dev => {
              return {
                  count: 1,
                  name: dev.commit.author.name,
                  email: dev.commit.author.email,
                  avatar: dev.author.avatar_url
              }
          })

      return arrDev
  }


  const renderUserData = userData => {
      const { count, name, email, avatar } = userData;

      userAvatarElem.src = avatar;
      userCommitElem.textContent = `${ "commits: " + count }`;
      userNameElem.textContent = `${"name: "+ name}|`;
      userEmailElem.textContent = `${'email: ' + email}|`
  };

  const showUserBtnElem = document.querySelector('.name-form__btn');
  const userNameInputElem = document.querySelector('.name-form__input');

  const onSearchUser = () => {
      const userName = userNameInputElem.value;
      getMostActiveDevs(10, userName)
          .then(userData => renderUserData(userData));
  };

  showUserBtnElem.addEventListener('click', onSearchUser);