import mysql.connector

try:
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Wis53142",
        database="contact_form"
    )
    cursor = db.cursor()
    print("Connexion réussie à la base de données")
except mysql.connector.Error as err:
    print(f"Erreur : {err}")
