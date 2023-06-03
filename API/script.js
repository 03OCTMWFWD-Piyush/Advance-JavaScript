(async () => {
    async function getstarcount(repo){
        const repoData = await fetch(repo);
        const repoJson = await repoData.json()
        return repoJson.stargazers_count;
    }

    const reactstars = await getstarcount('https://api.github.com/repos/facebook/react');
    const vuestars = await getstarcount('https://api.github.com/repos/vuejs/core');
    console.log(`React has ${reactstars} stars, wherease vue has ${vuestars} stars `)
})();