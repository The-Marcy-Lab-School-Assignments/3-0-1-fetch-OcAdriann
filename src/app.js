import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

export default function app(appDiv) {
  const page = setupPageBasics(appDiv)  
  checkResponseStatus()
  .then((status) => renderStatus(page.statusDiv, status))

  getUsers()
  .then((users) => renderUsers(page.usersUl, users))
  .then(() => {
    page.usersUl.addEventListener('click', (e) => {
      if(e.target.matches('button')) {
        console.log(e.target)
        const userId = e.target.getAttribute('data-user-id')
        console.log(userId)
        getUserPosts(userId)
        .then((response) => renderPosts(page.postsUl, response))
      }
    })
  })

  page.newUserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formObject = Object.fromEntries(formData)

    createNewUser(formObject)
    .then((response) => renderNewUser(page.newUserDiv, response))
    e.target.reset()
  })
}