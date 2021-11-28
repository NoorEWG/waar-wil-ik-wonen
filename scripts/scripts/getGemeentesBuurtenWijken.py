import pandas as pd
import json
import pymongo

excel_data_fragment = pd.read_excel(r'..\data\pc6-gwb2020.xlsx')
json_str = excel_data_fragment.to_json(orient='records')
json_dict = json.loads(json_str)

excel_data_fragment = pd.read_excel(r'..\data\brt2020.xlsx')
buurt_str = excel_data_fragment.to_json(orient='records')

buurt_dict = json.loads(buurt_str)

# Save the data to MongoDB
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb=myclient["waar-wil-ik-wonen"]
mycol = mydb["postcode-gemeente"]
for item in json_dict:
    item['postcode'] = int(item['pc6'][0:4])
    for buurt in buurt_dict:
        if item['buurt'] == buurt['buurtcode']:
            item['buurtNaam'] = buurt['buurt']
            item['gemeenteNaam'] = buurt['gemeente']
            item['wijkNaam'] = buurt['wijk']
            print(item['gemeenteNaam'] + "/" + item['buurtNaam'])
    mycol.insert_one(item)

print("=========== finished gemeente / buurt / wijken - treated all data ========")
