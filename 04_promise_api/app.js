Promise.race([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 5000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
  ]).then(response => {
	console.log(response); 
  }).catch(err => console.log(err));