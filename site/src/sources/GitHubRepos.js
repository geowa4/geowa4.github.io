import Rx from 'rx';

const ReposSubject = new Rx.AsyncSubject();

Rx.Observable.fromPromise(() => {
  return fetch('https://api.github.com/users/geowa4/repos?sort=pushed&direction=desc&per_page=100')
  .then(response => response.json())
  .then(repos => {
    return {repos: repos};
  });
})
.subscribe(ReposSubject);

export default ReposSubject;
