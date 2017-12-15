admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "administrator", [ "root" , { role: "root", db: "admin" } ] )
