import pandas as pd
import geopandas as gpd
import requests

def get_odata(target_url):
    data = pd.DataFrame()
    while target_url:
        r = requests.get(target_url).json()
        data = data.append(pd.DataFrame(r['value']))

        if '@odata.nextLink' in r:
            target_url = r['@odata.nextLink']
        else:
            target_url = None

    return data

# De geodata wordt via de API van het Nationaal Georegister van PDOK opgehaald.
# Een overzicht van beschikbare data staat op https://www.pdok.nl/datasets.
geodata_url = "https://geodata.nationaalgeoregister.nl/cbsgebiedsindelingen/wfs?request=GetFeature&service=WFS&version=2.0.0&typeName=cbs_gemeente_2017_gegeneraliseerd&outputFormat=json"
gemeentegrenzen = gpd.read_file(geodata_url)
# Define file to write to and 'w' for write option -> json.dump() defining the list to write from and file to write to
# with open(r'..\output\cbs-gemeentegrenzen-2017.json', 'w') as json_file:
#     json.dump(gemeentegrenzen, json_file)

# Zoek op welke codes bij geboortecijfers horen
table_url = "https://odata4.cbs.nl/CBS/83765NED"
codes = get_odata(table_url + "/MeasureCodes")
geb = codes[codes['Title'].str.contains("Geboorte")]
print(geb[['Title','Unit','Identifier']])

target_url = table_url + "/Observations?$filter=Measure eq 'M000173_2' and startswith(WijkenEnBuurten,'GM')"
geboorten_per_gemeente = get_odata(target_url)

geboorten_per_gemeente = geboorten_per_gemeente.rename({'Value':'relatieve_geboorte'}, axis='columns')

gemeentegrenzen = pd.merge(gemeentegrenzen, geboorten_per_gemeente, left_on = "statcode", right_on = "WijkenEnBuurten")

p = gemeentegrenzen.plot(column='relatieve_geboorte', figsize = (10,8))
p.set_title("Levend geborenen per 1000 inwoners, 2017")