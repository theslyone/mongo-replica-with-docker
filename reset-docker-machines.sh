function switchToServer {
  echo '···························'
  echo '·· swtiching >>>> '$1' server ··'
  echo '···························'
  #env='docker-machine env '$1
  #eval $($env)
  docker-machine ssh $1
}

function removeContainer {
  switchToServer $1
  docker rm -f $2
  docker volume rm $(docker volume ls -qf dangling=true)
}

removeContainer master01 mongoNode01
removeContainer worker01 mongoNode02
removeContainer worker02 mongoNode03
