env.DOCKER_REPO='jenkinsewebservertutorial/webserver'
env.COMPONENT='jenkins-utils-webserver'
env.PUSHREQUEST_URL='https://rproxy.ironsrc.com/rest/api/1.0/projects/IAVC/repos/proxy/pull-requests'
env.PUSHREQUEST_TEXT='{ "title": "jenkinsPullRequest","description":"Pull request created by jenkins ci cd process","state":"OPEN","open":true,"closed":false,"fromRef":{"id":"refs/heads/staging","repository":{"slug":"proxy","name":null,"project":{"key":"iavc"}}},"toRef":{"id":"refs/heads/master","repository":{"slug":"proxy","name":null,"project":{"key":"iavc"}}},"locked":false}'

