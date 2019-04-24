// See https://medium.com/daily-now/optimistic-offline-first-apps-with-vuex-d8a412e105a7
// and https://netterminalmachine.com/blog/2018/persisting-a-vuex-store-to-indexed-db
// CONITNUE FROM ABOVE ARTICLES
import localforage from 'localforage';

const localForageService = localforage.createInstance({
  name: "mkwp",
  version : 1.0,
  storeName : 'followedTeams'
});

localForageService.setDriver([
  localforage.INDEXEDDB,
  localforage.LOCALSTORAGE
])
.then(() => {
  // use this to test your db connection - delete later
  localForageService.setItem('testTeam', 'testvalue', function() {
		/* eslint-disable */
    console.log('Of the driver options given, localforage is using:' + localForageService.driver());
		/* eslint-enable */
  });
})
.catch(error => {
	/* eslint-disable */
  console.log("nope, localForageService not working. Error:", error);
	/* eslint-enable */
});

export default localForageService;
