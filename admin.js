admin = db.getSiblingDB("admin")
admin.createUser(
  {
    user: "administrator",
    pwd: "*Passw0rd#",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

db.getSiblingDB("admin").auth("administrator", "*Passw0rd#" )

db.getSiblingDB("admin").createUser(
  {
    "user" : "replicaAdmininstrator",
    "pwd" : "*Passw0rd#",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)
