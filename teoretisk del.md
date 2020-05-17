# Backen api uppgift 1 teoretiskt
------

### 1. Hur används HTTP-protokollet när du surfar in på en webbsida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar. <http://www.smp.se/kultur-noje/> ?

 - HTTP-protokollet definieras av en samling 
  förfrågnings metoder som kommunicera med en server. Det vanligaste metoderna är GET och POST.
  När man skickar en URL i en webbläsare eller klicka på en länk ger webbläsaren en HTTP GET request till servern. Det finns 5 olika metoder. 
  1xx Informational, 2xx success (200 OK , 201 Created och 204 Nochange)
  3xx Redirection (301 Moved Permanently och 304 not modified)
  4xx client errors (400 bad request, 401 unauthorized, 403 forbidden, 404 not found) och 5xx server errors (500 internal error, 502 bad gateway och 503 service unavailable )

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
   
    -  **query** - curl GET localhost:9000/api/students/?name=tomte -i -X

    - **header** - curl GET  localhost:9000/api/students -H “name”: “studentName”

    - **path** - curl  GET "localhost:9000/api/students -i

