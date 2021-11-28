import pandas as pd
import json
import pymongo

excel_data_fragment = pd.read_excel(r'..\data\cbs_pc4_2020_v1.xlsx')

json_str = excel_data_fragment.to_json(orient='records')

json_str = json_str.lower()
# json_str = json_str.replace('-99997', '')
json_str = json_str.replace('pc4', 'postcode').replace('inwoner', 'inwoners').replace('inw_014', 'inwonersJongerDan14')
json_str = json_str.replace('inw_1524', 'inwonersTussen15en24Jaar').replace('inw_2544', 'inwonersTussen25en44Jaar').replace('inw_4564', 'inwonersTussen45en64Jaar')
json_str = json_str.replace('inw_65pl', 'inwonersVanaf65Jaar')
json_str = json_str.replace('p_nl_achtg', 'percentagePersonenMetNlAchtergrond').replace('p_we_mig_a', 'percentargePersonenMetWesterseMigratieActergrond').replace('p_nw_mig_a', 'percentagePersonenMetNietWesterseAchtergrond')
json_str = json_str.replace('aantal_hh', 'aantalHuishoudens').replace('tothh_eenp', 'totaalEenpersoonsHuishoudens').replace('tothh_mpzk', 'totaalMeerpersoonsHuishoudens')
json_str = json_str.replace('hh_eenoud', 'aantalEenOuderHuishoudens').replace('hh_tweeoud', 'aantalTweepersoonsHuishoudens').replace('gem_hh_gr', 'gemiddeldeGrootteHuishouden')
json_str = json_str.replace('woning', 'totaalWoningen').replace('wonvoor45', 'woningenVoor1945').replace('won_4564', 'woningen1945en1964')
json_str = json_str.replace('won_6574', 'woningen1965en1974').replace('won_7584', 'woningen1975en1984').replace('won_8594', 'woningen1985en1994')
json_str = json_str.replace('won_9504', 'woningen1995en2004').replace('won_0514', 'woningen2005en2014').replace('won_1524', 'woningen2015en2024')
json_str = json_str.replace('won_mrgez', 'meerGezinsWoning').replace('p_koopwon', 'percentageKoopwoningen').replace('p_huurwon', 'percentageHuurwoningen')
json_str = json_str.replace('won_hcorp', 'woningenCorporaties').replace('won_nbew', 'nietBewoondeWoningen').replace('woztotaalWoningen', 'gemiddeldeWozWaarde')
json_str = json_str.replace('uitkminaow', 'uitkeringenExclusiefAow').replace('oad', 'inwonersPerKm2').replace('sted', 'stedelijkheidCategorie')

# Make the string into a list to be able to input in to a JSON-file
json_dict = json.loads(json_str)

# Save the data to MongoDB
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb=myclient["waar-wil-ik-wonen"]
mycol = mydb["Postcode2020"]
for item in json_dict:
    item['gemiddeldeWozWaarde'] = item['gemiddeldeWozWaarde'] * 1000
    mycol.insert_one(item)

# Define file to write to and 'w' for write option -> json.dump() defining the list to write from and file to write to
# with open(r'..\output\cbs-pc4-data-2021.json', 'w') as json_file:
#     json.dump(json_dict, json_file)

