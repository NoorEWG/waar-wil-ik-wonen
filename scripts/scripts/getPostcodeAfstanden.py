import pandas as pd
import cbsodata
import pymongo

# Downloaden van gehele tabel (kan een halve minuut duren)
data = pd.DataFrame(cbsodata.get_data('70072NED'))
data_dict = data.to_dict(orient='records')

# Save the data to MongoDB
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["waar-wil-ik-wonen"]
mycol = mydb["bevolking"]
for item in data_dict:
    try:
        mycol.insert_one(item)
    except:
        print("An exception occurred")

