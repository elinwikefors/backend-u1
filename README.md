# Backen api teoretisk del 1
------

### 1. Hur används HTTP-protokollet när du surfar in på en webbsida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar. <https://www.smp.se/kultur-noje/> ?

 - HTTP-protokollet definieras av en samling 
  förfrågnings metoder som kommunicera med en server. Det vanligaste metoderna är GET och POST.
  När man skickar en URL i en webbläsare eller klicka på en länk ger webbläsaren en HTTP GET request till servern. Det finns 5 olika metoder. 
  1xx Informational, 2xx success (200 OK , 201 Created och 204 Nochange)
  3xx Redirection (301 Moved Permanently och 304 not modified)
  4xx client errors (400 bad request, 401 unauthorized, 403 forbidden, 404 not found) och 5xx server errors (500 internal error, 502 bad gateway och 503 service unavailable)

  

 - **Path** - /kultur-noje

 - **Method** - GET 

 - **Response code** - 200, OK

 - **body** - Hemsidans body



### 2. Beskriv HTTP-protokollets vanligaste metoder och vad de gör?

 - **GET** - Begär en representation av den angivna resursen

 - **POST** - Används för att skicka något till resursen

 - **PUT** - Begär att den slutna enheten lagras under den medföljande URI. Om URI hänvisas till en befintlig resurs ändras den. 

 - **DELETE** - Radera den angivna resursen

### 3. "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas?

 - **uri** - uniform resource locator

 - **http** - protocol

 - **localhost** - authority

 - **:3000** - port 

 - **/users** - path

- **?username=something** - query

### 4. På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl?

  Det finns 3 sätt att skicka in parameter i en http request
   
  -  **query** - `curl GET localhost:9000/api/students/?name=tomte -i -X`

  - **header** - `curl GET  localhost:9000/api/students -H “name”: “studentName”`

  - **path** - `curl  GET "localhost:9000/api/students -i`


  # Backen api teoretisk del 2

### 1. Vad är skillnaden mellan backend och databas? Beskriv vad respektive ansvarar för?

  - Backend är den kod som används för att komma åt en databas. Själva databasen är bara ett lager för att hålla koll på stora mängder data. Men backend är oftast kopplad till en databas, med till exempel användare.


### 2. Varför är det viktigt att vara konsekvent i sin API-design för att skapa ett användarväntligt API?

 - Att man förstå och följer alla befintliga stilar och policyer. Sen använda presentaitonsformat som camelCase, spine-case , date time och numeringsschema.

### 3. Vad är autentisering vs auktorisering?

 - Autentisering Kan man säga är ett bevis på att det är du.
 Auktorisering visar vad du har tillgång till. 

### 4. Vad är skillnaden mellan "Private Cloud" och "Public Cloud". Vilka typer av tjänster erbjuder public cloud? 

 - Privat moln distribueras i en brandvägg. Det offentliga molnet har alltid tillgång över internet. Privata moln kan vanligtvis endast spridas över LAN, medans offentilga kan nås över hela Världen.

### några av dom tjänsterna 

 - **Amazon Web Services (aws)** - En marknadsplats för hanterade och tredje parts tjänster

 - **Azure** - Microsoft: ger en stor integrerad upplevelse för att utveckla microsoft-tjänster.

 - **Google Cloud Platform (gcp)** - Databehandling och maskininlärning i global skala

 - ***IBM Cloud** - Enterprise molntjänst som driver köp av professionella tjänster 

### 5. Varför testar vi mjukvara?

 - Vi testar mjukvaran för att ge intressenter information om kvaliteten på programvaruprodukten eller tjänsten som testas. 
 Dom slags tester man gör är testdriven design, beteende driven design, integrationstest och verifiering och validering. 

### 6. Vad är fördelarna med API:er jämfört med en weblösning som går direkt mot en databas?

 - En API erbjuder utöver tredjepartsapplikationer att integrera med webblösningar, väldigt stor flexibilitet. Sedan så är det väldigt bra att använda en API för expandering. Oftast så är backend vädligt tajt kopplad till själva html och js koden. Men skriver en API så kan du vara lite mer flexibel och lägga in API kallelser här och var utan att förstöra eller behöva göra om själva backend koden. Skulle du vilja expendera din webbsida till en mobilapplikcation med t.ex. Angular eller React så kommer du inte behöva ta ut backend funktionerna du vill ha och lägga i den nya appen. Det räcker med att du sätter en http klient som kan använda sig av ApIn. En viktig fördel med APIs erbjudande är säkerheten. Det är säkrare att ha en API för att kontrollera begärans identitet än att låta alla förfrågningar gå in i databasen
 

### 7. Vad innebär OAUTH?

 - OAUTH står för Open Authorization. OAUTH ger webbplatser eller applicationer åtkomst till deras information på andra webbplatser men utan a
 tt ge dem lösenord.

### 8. Vilka typer av managed service erbjuds av Public Cloud och vad innebär de?

 #### Här är några av dom största leverantörern

 - **Amazon Web Services (aws)** - En marknadsplats för hanterade och tredje parts tjänster

 - **Azure** - Microsoft: ger en stor integrerad upplevelse för att utveckla microsoft-tjänster.

 - **Google Cloud Platform (gcp)** - Databehandling och maskininlärning i global skala

 - ***IBM Cloud** - Enterprise molntjänst som driver köp av professionella tjänster 

### 9. Vad innebär TDD och BDD?

 - TDD står för Test Driven Development och BDD står för Behavior Driven Development. 

 - TDD - Är en variant av enhetstestning som främjer full kodtäckning. Hjälper dig att dela upp problem i testbara bitar.

 - BDD - är en agile mjukvarutvecklingsprocess som uppmuntrar samarbete mellan utvecklare, QA och icke-tekniska eller affärsaktörer i ett program. Man skriver vanliga texter som alla kan förstå. ex Jag har 3 tröjor i lager och en kund kommer in och köper en så har jag bara 2 tröjor kvar. 