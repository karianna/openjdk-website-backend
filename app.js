var GitHub = require('github-api');
var fs = require('fs')
var Client = require('ftp');

// basic auth
var gh = new GitHub({
    token: process.env['GITHUB_TOKEN']
});

//var AdoptOpenJDK = gh.getOrganization('AdoptOpenJDK');
var releases = gh.getRepo('AdoptOpenJDK', 'openjdk-releases');
var nightly = gh.getRepo('AdoptOpenJDK', 'openjdk-nightly');

releases.listReleases(function(err, result) {
    fs.writeFileSync('releases.json', JSON.stringify(result, null, 2))
});

nightly.listReleases(function(err, result) {
    fs.writeFileSync('nightly.json', JSON.stringify(result, null, 2))
});
