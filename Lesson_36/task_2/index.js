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


  const onSearchUser = async() => {
      showSpiner()
      cleanReposList()
      const userName = userNameInputElem.value;
      try {
          const userData = await fetchUserData(userName);
          renderUserData(userData);
          const reposList = await fetchRepositories(userData.repos_url);
          renderRepos(reposList)
      } catch (err) {
          alert('Failed to load data')
      } finally {
          hideSpiner()
          
      }

  };

  showUserBtnElem.addEventListener('click', onSearchUser);