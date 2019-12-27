  import { fetchUserData, fetchRepositories } from './geateways.js'
  import { renderUserData } from './user.js'
  import { renderRepos, cleanReposList } from './repos.js'
  import { showSpiner, hideSpiner } from './spiner.js'


  const defaultUser = {
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
      name: '',
      location: ''
  }

  renderUserData(defaultUser)

  const showUserBtnElem = document.querySelector('.name-form__btn');
  const userNameInputElem = document.querySelector('.name-form__input');


  const onSearchUser = () => {
      showSpiner()
      cleanReposList()
      const userName = userNameInputElem.value;
      fetchUserData(userName)
          .then(userData => {
              renderUserData(userData);
              return userData.repos_url;
          })
          .then(url => fetchRepositories(url))
          .then(respoList => {
              renderRepos(respoList)
              hideSpiner()
          })
          .catch(err => {
              hideSpiner()
              return alert(err.message)
          });
  };

  showUserBtnElem.addEventListener('click', onSearchUser);