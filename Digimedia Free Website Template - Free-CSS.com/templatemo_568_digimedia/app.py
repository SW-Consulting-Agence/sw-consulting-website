import pymysql

try:
    db = pymysql.connect(
        host="localhost",
        user="root",
        password="Wis53142",
        database="contact_form"
    )
    print("Connexion réussie à la base de données")
except pymysql.MySQLError as err:
    print(f"Erreur lors de la connexion : {err}")
